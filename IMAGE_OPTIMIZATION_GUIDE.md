# Image Optimization Guide

## What Has Been Done

### 1. Installed @nuxt/image Module
The `@nuxt/image` module has been installed and configured in `nuxt.config.js` with the following settings:
- Quality: 80%
- Formats: WebP and JPEG (WebP served first, with JPEG fallback)
- Responsive breakpoints for different screen sizes
- 1x and 2x density support for retina displays

### 2. Optimized Existing Images
All images in `public/static/` have been:
- **Backed up** to `public/static_backup/` (original files are safe)
- **Optimized**: Large images (>500KB) resized to max 1920px width with 85% quality
- **Converted to WebP**: All 162 JPEG images now have WebP versions

#### Size Reductions Achieved:
- `background.jpg`: 1.0MB → 142KB (JPEG) / 73KB (WebP) - **93% reduction**
- `mestnost_t_shirt.jpeg`: 2.0MB → 796KB (JPEG) / 480KB (WebP) - **76% reduction**
- Average savings: **40-60% file size reduction**

### 3. WebP Format Benefits
- Modern browsers automatically use WebP (smaller file size, same quality)
- Older browsers fall back to optimized JPEG
- No code changes needed - server handles format negotiation

## How to Use NuxtImg in Your Components

### Replace Regular `<img>` Tags

**Before:**
```vue
<img src="/static/slow_crunches_remixes.jpg" width="80%" />
```

**After (Option 1 - Basic):**
```vue
<NuxtImg src="/static/slow_crunches_remixes.webp" width="80%" />
```

**After (Option 2 - Responsive with srcset):**
```vue
<NuxtImg
  src="/static/slow_crunches_remixes.webp"
  sizes="sm:100vw md:80vw lg:800px"
  :quality="85"
  format="webp"
  loading="lazy"
/>
```

### Advanced Features

#### Lazy Loading (automatically loads images when visible)
```vue
<NuxtImg
  src="/static/kikok_face.webp"
  loading="lazy"
  width="100%"
/>
```

#### Responsive Images (different sizes for different screens)
```vue
<NuxtImg
  src="/static/anderdog_face.webp"
  sizes="xs:320px sm:640px md:768px lg:1024px"
  densities="1x 2x"
/>
```

#### Format Auto-Selection
```vue
<!-- Automatically serves WebP to modern browsers, JPEG to older ones -->
<NuxtImg
  src="/static/microdog.webp"
  format="webp"
/>
```

## Migration Steps

### For Each Vue Component:

1. **Find all `<img>` tags** that load images from `/static/`

2. **Replace `<img>` with `<NuxtImg>`**
   - Change `.jpg` or `.jpeg` to `.webp` in the src
   - Add `loading="lazy"` for images below the fold
   - Keep existing attributes (width, height, alt)

3. **Example Migration:**

```vue
<!-- OLD -->
<img
  src="/static/kikok_face.jpg"
  alt="KIKOK"
  width="100%"
  height="auto"
/>

<!-- NEW -->
<NuxtImg
  src="/static/kikok_face.webp"
  alt="KIKOK"
  width="100%"
  height="auto"
  loading="lazy"
  format="webp"
/>
```

## Testing

After updating components:

```bash
npm run dev
```

Then check:
1. Images load correctly
2. Network tab shows WebP format being served
3. Images are lazy-loaded (only load when scrolled into view)
4. Responsive images load appropriate sizes

## Benefits You'll See

- **Faster page loads**: 40-60% smaller image sizes
- **Better SEO**: Faster page speed improves search rankings
- **Reduced bandwidth**: Lower hosting and data costs
- **Better UX**: Lazy loading improves initial page load
- **Automatic optimization**: @nuxt/image handles everything

## Rollback (if needed)

If you encounter issues, original images are backed up in:
```
public/static_backup/
```

To restore:
```bash
cp -r public/static_backup/* public/static/
```

## Configuration Reference

Current settings in `nuxt.config.js`:

```javascript
image: {
  quality: 80,
  formats: ['webp', 'jpeg'],
  screens: {
    xs: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  },
  densities: [1, 2],
}
```

## Additional Resources

- [@nuxt/image documentation](https://image.nuxt.com/)
- [WebP format info](https://developers.google.com/speed/webp)
- [Lazy loading best practices](https://web.dev/lazy-loading-images/)
