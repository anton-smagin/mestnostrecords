"""Build MomsRelief: Mom's Typewriter + glyphs it lacks (0, 1, Cyrillic, some
punctuation) borrowed from JMH Typewriter, scaled to Moms' proportions.

Optional 4th argument: how much to thin every outline, in font units
(Mom's Typewriter is very inky; ~15 makes it read as a regular weight).

Usage: python scripts/build-relief-font.py "assets/fonts/moms_typewriter/Mom«t___.ttf" "assets/fonts/jmh_typewriter/JMH Typewriter-Bold.ttf" assets/fonts 14
Needs: pip install fonttools brotli shapely
"""
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.transformPen import TransformPen

moms_path, jmh_path, out_dir = sys.argv[1:4]
THIN = float(sys.argv[4]) if len(sys.argv) > 4 else 0
moms, jmh = TTFont(moms_path), TTFont(jmh_path)
mcmap, jcmap = moms.getBestCmap(), jmh.getBestCmap()
jgs = jmh.getGlyphSet()


def height(font, ch):
    g = font['glyf'][font.getBestCmap()[ord(ch)]]
    return g.yMax - g.yMin


# Digits match Moms digit height, letters match Moms cap height.
DIGIT_SCALE = height(moms, '2') / height(jmh, '2')
LETTER_SCALE = height(moms, 'H') / height(jmh, 'H')

wanted = [ord(c) for c in '01@#$*[]{}<>|\\~№«»—–…'] + list(range(0x400, 0x460)) + [0x490, 0x491]
for cp in wanted:
    if cp in mcmap or cp not in jcmap:
        continue
    src = jcmap[cp]
    scale = DIGIT_SCALE if chr(cp).isdigit() else LETTER_SCALE
    pen = TTGlyphPen(None)
    jgs[src].draw(TransformPen(pen, (scale, 0, 0, scale, 0, 0)))
    name = f'uni{cp:04X}'
    moms['glyf'][name] = pen.glyph()
    moms['glyf'][name].recalcBounds(moms['glyf'])
    adv, _ = jmh['hmtx'][src]
    moms['hmtx'][name] = (round(adv * scale), moms['glyf'][name].xMin)
    moms.setGlyphOrder(moms.getGlyphOrder() + [name]) if name not in moms.getGlyphOrder() else None
    for t in moms['cmap'].tables:
        if t.isUnicode():
            t.cmap[cp] = name



def thin_glyph(name):
    """Erode a glyph's outline by THIN units (flatten curves, buffer inward)."""
    from fontTools.pens.recordingPen import DecomposingRecordingPen
    from fontTools.pens.basePen import BasePen
    from shapely.geometry import Polygon, MultiPolygon

    class Flatten(BasePen):
        def __init__(self, gs):
            super().__init__(gs); self.contours = []; self.cur = []
        def _moveTo(self, p): self.cur = [p]
        def _lineTo(self, p): self.cur.append(p)
        def _qCurveToOne(self, p1, p2):
            p0 = self.cur[-1]
            for i in range(1, 9):
                t = i / 8
                self.cur.append(((1-t)**2*p0[0]+2*(1-t)*t*p1[0]+t*t*p2[0], (1-t)**2*p0[1]+2*(1-t)*t*p1[1]+t*t*p2[1]))
        def _curveToOne(self, p1, p2, p3):
            p0 = self.cur[-1]
            for i in range(1, 9):
                t = i / 8; a, b, c, d = (1-t)**3, 3*(1-t)**2*t, 3*(1-t)*t*t, t**3
                self.cur.append((a*p0[0]+b*p1[0]+c*p2[0]+d*p3[0], a*p0[1]+b*p1[1]+c*p2[1]+d*p3[1]))
        def _closePath(self):
            if len(self.cur) > 2: self.contours.append(self.cur)
            self.cur = []
        _endPath = _closePath

    gs = moms.getGlyphSet()
    pen = Flatten(gs); gs[name].draw(pen)
    if not pen.contours:
        return
    # Even-odd fill: XOR the contours together (robust to wrong contour direction).
    shape = Polygon()
    for c in pen.contours:
        shape = shape.symmetric_difference(Polygon(c).buffer(0))
    shape = shape.buffer(-THIN, join_style=2).simplify(1.5)
    out = TTGlyphPen(None)
    geoms = shape.geoms if isinstance(shape, MultiPolygon) else [shape]
    for poly in geoms:
        if poly.is_empty:
            continue
        for ring, clockwise in [(poly.exterior, True)] + [(r, False) for r in poly.interiors]:
            pts = [(round(x), round(y)) for x, y in ring.coords[:-1]]
            if ring.is_ccw == clockwise:
                pts.reverse()
            out.moveTo(pts[0])
            for pt in pts[1:]:
                out.lineTo(pt)
            out.closePath()
    glyph = out.glyph()
    glyph.recalcBounds(moms['glyf'])
    moms['glyf'][name] = glyph
    moms['hmtx'][name] = (moms['hmtx'][name][0], glyph.xMin if glyph.numberOfContours else 0)


if THIN:
    for name in moms.getGlyphOrder():
        thin_glyph(name)

moms['maxp'].numGlyphs = len(moms.getGlyphOrder())
for rec in moms['name'].names:
    if rec.nameID in (1, 4, 16):
        rec.string = 'MomsRelief'
    elif rec.nameID == 6:
        rec.string = 'MomsRelief-Regular'
# Mark Cyrillic support in OS/2 ranges.
os2 = moms['OS/2']
os2.ulUnicodeRange1 |= 1 << 9
os2.ulCodePageRange1 |= 1 << 2

moms.save(f'{out_dir}/MomsRelief.ttf')
moms.flavor = 'woff2'
moms.save(f'{out_dir}/MomsRelief.woff2')
print('digit scale %.3f, letter scale %.3f, glyphs %d' % (DIGIT_SCALE, LETTER_SCALE, len(moms.getGlyphOrder())))
