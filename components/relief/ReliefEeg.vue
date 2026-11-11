<template>
  <canvas ref="canvas" class="relief-eeg" aria-hidden="true" />
</template>

<script setup>
import { createNoise2D } from 'simplex-noise'

// Faint "encephalogram" traces behind Relief pages: slow drifting lines
// with an occasional burst.
const props = defineProps({
  lines: { type: Number, default: 8 },
})

const canvas = ref(null)
let ctx = null
let frame = 0
let width = 0
let height = 0
let t = 0
const noise = createNoise2D()
const burstNoise = createNoise2D()

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = window.innerWidth
  height = window.innerHeight
  canvas.value.width = width * dpr
  canvas.value.height = height * dpr
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function draw() {
  ctx.clearRect(0, 0, width, height)
  const gap = height / (props.lines + 1)
  ctx.lineWidth = 1
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.07)'

  for (let i = 0; i < props.lines; i++) {
    const y0 = gap * (i + 1)
    ctx.beginPath()
    for (let x = 0; x <= width; x += 3) {
      const drift = noise(x * 0.002 + t * 0.3, i * 7.1) * 5
      const burst = burstNoise(x * 0.001 - t * 0.25, i * 3.3)
      const spike = burst > 0.6 ? noise(x * 0.08 + t * 2, i) * (burst - 0.6) * 60 : 0
      const y = y0 + drift + spike
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
}

function loop() {
  t += 0.004
  draw()
  frame = requestAnimationFrame(loop)
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  resize()
  window.addEventListener('resize', resize)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    draw()
  } else {
    loop()
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
.relief-eeg {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
}
</style>
