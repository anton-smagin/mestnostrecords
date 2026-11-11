<template>
  <div class="relief-home">
    <div class="container-fluid h80">
      <div
        class="d-flex flex-column align-items-center justify-content-center h80"
      >
        <h1 class="relief-logo-wrap">
          <NuxtLink
            :to="reliefPath('/about')"
            class="relief-logo-link"
            aria-label="О Рельефе"
          >
            <img
              src="/static/relief/relief_disc.webp"
              alt=""
              aria-hidden="true"
              class="relief-disc"
            />
            <img
              src="/static/relief/relief_logo.webp"
              alt="Рельеф"
              class="relief-logo"
              width="816"
              height="159"
            />
          </NuxtLink>
        </h1>
        <p class="relief-sub">другая сторона Местности</p>
      </div>
    </div>
    <footer class="footer-links">
      <a
        href="https://t.me/mestnost_label"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        title="Telegram"
      >
        <font-awesome-icon :icon="['fab', 'telegram']" class="social-icon" />
      </a>
      <a
        href="https://mestnost.bandcamp.com"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        title="Bandcamp"
      >
        <font-awesome-icon :icon="['fab', 'bandcamp']" class="social-icon" />
      </a>
    </footer>
  </div>
</template>

<script setup>
const { reliefPath } = useRelief()
const title = 'Рельеф — другая сторона Местности'
const description =
  'Рельеф — другая сторона «Местности»: нойз, конкрит, лефтфилд и направления, которые еще не получили названия.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://mestnostrecords.com/static/relief/relief_logo.png',
})
</script>

<style scoped>
/* layout stays on the h1; the link only adds the click and the hand cursor */
.relief-logo-link {
  display: contents;
  cursor: pointer;
}

.relief-logo-link img {
  cursor: pointer;
}

.relief-logo-wrap {
  position: relative;
  width: min(560px, 80vw);
  margin: 0;
}

.relief-logo {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
}

/* The disc fades in and turns behind the logo on hover */
.relief-disc {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(440px, 70vw);
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s ease;
  animation: relief-disc-spin 14s linear infinite paused;
}

.relief-logo-wrap:hover .relief-disc {
  opacity: 0.35;
  animation-play-state: running;
}

@keyframes relief-disc-spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .relief-disc {
    animation: none;
  }
}

.relief-sub {
  margin-top: 1.5rem;
  color: #111;
  font-family: var(--relief-font);
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.6;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 1rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .footer-links {
    justify-content: center;
  }
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: #111;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  border-color: #7d8f87;
  color: #7d8f87;
}

.social-icon {
  font-size: 1.4rem;
}
</style>
