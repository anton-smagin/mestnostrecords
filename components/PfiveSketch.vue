<template>
  <div class="p5-template justify-content-center">
    <vue-p5
      @preload="preload"
      @setup="setup"
      @draw="draw"
      @keypressed="keyPressed"
      @windowresized="windowResized"
    >
    </vue-p5>
  </div>
</template>

<script>
import { createNoise2D } from 'simplex-noise'

export default {
  name: 'PfiveSketch',
  components: {
    VueP5: () => import('vue-p5'),
  },
  props: {
    imageTitle: {
      type: String,
      required: true,
      default: '',
    },
  },
  data: () => ({
    lines: [],
    p5LogoImage: null,
    startTime: Date.now(),
    // store current time in data to force computed properties to update
    currentTime: Date.now(),
    noisePositionX: [0, 0, 0],
    noisePositionY: [0, 0, 0],
    noiseProgress: [0.001, 0.002, 0.003],
    noiseScale: 0.002,
    simplexNoise: createNoise2D(),
    speedX: 1,
    speedY: 1,
  }),
  computed: {
    msSinceStart() {
      return this.currentTime - this.startTime
    },
    blue() {
      return Math.floor(this.msSinceStart * 0.03) % 255
    },
    p5LogoRotationAngle() {
      return ((this.msSinceStart * 0.0001) % Math.PI) * 2
    },
    side() {
      const width = this.$el.clientWidth
      const height = this.$el.clientHeight
      return Math.min(width, height) * 2
    },
  },
  methods: {
    preload(sketch) {
      this.image = sketch.loadImage(`/${this.imageTitle}.jpg`)
    },
    setup(sketch) {
      sketch.createCanvas(this.side, this.side)
      this.image.resize(this.side, this.side)
    },
    draw(sketch) {
      this.currentTime = Date.now()
      this.image.loadPixels()
      const len = this.image.pixels.length
      // this.speedX = sketch.map(sketch.mouseX, 0, sketch.width, -15, 15);
      // this.speedY = sketch.map(sketch.mouseY, 0, sketch.width, -15, 15);
      for (let i = 0; i < sketch.width; i += 6) {
        for (let j = 0; j < sketch.height; j += 6) {
          const m = i + j * this.image.width
          let offset = this.warp(
            i,
            j,
            (0.000003 * this.msSinceStart) / 1000,
            615,
            sketch
          )
          offset = ((m - parseInt(offset)) % len) * 4
          this.image.set(
            i,
            j,
            sketch.color(
              this.image.pixels[offset],
              this.image.pixels[offset + 1],
              this.image.pixels[offset + 2]
            )
          )
        }
      }
      this.image.updatePixels()
      sketch.image(this.image, 0, 0)
    },
    keyPressed({ keyCode }) {
      // 'g' key
      if (keyCode === 71) {
        this.toggleGreen()
      }
    },
    toggleRed() {
      this.red = 255 - this.red
    },
    toggleGreen() {
      this.green = 255 - this.green
    },
    pushLine(line) {
      const lines = this.lines
      lines.push(line)
      this.lines = lines.slice(-100)
    },
    windowResized(sketch) {
      sketch.resizeCanvas(this.side, this.side)
    },
    warp(_x, _y, factor, nRange, sketch) {
      const n1 =
        this.simplexNoise((_x + 0.0) * factor, (_y + 0.0) * factor) * nRange
      const n2 =
        this.simplexNoise((_x + 5.2) * factor, (_y + 1.3) * factor) * nRange
      const q = sketch.createVector(n1, n2)

      const n3 =
        this.simplexNoise(
          (_x + q.x * 4 + 1.7) * factor,
          (_y + q.y * 4 + 9.2) * factor
        ) * nRange
      const n4 =
        this.simplexNoise(
          (_x + q.x * 4 + 8.3) * factor,
          (_y + q.y * 4 + 2.8) * factor
        ) * nRange
      const r = sketch.createVector(n3, n4)

      return (
        this.simplexNoise((_x + r.x * 4) * factor, (_y + r.y * 4) * factor) *
        nRange
      )
    },
  },
}
</script>
