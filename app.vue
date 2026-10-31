<template>
  <div id="app" :class="{ 'relief-theme': isRelief }">
    <ReliefEeg v-if="isRelief" />
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute()
const { isReliefRoute } = useRelief()
// Relief (sublabel) pages use the same layout in white
const isRelief = computed(() => isReliefRoute(route.path))

useHead({
  htmlAttrs: { class: computed(() => (isRelief.value ? 'relief-html' : '')) },
})
</script>

<style>
body {
  min-height: 100vh;
  margin: 0;
  background-color: black !important;
  max-width: 100%;
  overflow-x: hidden;
}

#app {
  font-weight: normal;
  letter-spacing: 0.3em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  min-height: 10vh;
}

#nav a {
  color: #f5fafa;
  font-size: 1em;
  font-weight: lighter;
}

@media (max-width: 768px) {
  #nav a {
    letter-spacing: 0.1em;
  }
}

#nav a.router-link-exact-active {
  color: #91a79d;
}

.hamburger {
  cursor: pointer;
}

.h80 {
  min-height: 80vh;
}

.button {
  margin: 8px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

html {
  height: 100%;
}

/* Relief: paper colour of its artwork instead of black (overrides the !important black above) */
html.relief-html {
  background-color: #eeede8 !important;
}

/* transparent so the background lines (z-index: -1) show through */
html.relief-html body {
  background-color: transparent !important;
}

.home {
  background:
    linear-gradient(
      to bottom,
      black 0%,
      black 5%,
      transparent 10%,
      transparent 80%,
      black 90%,
      black 100%
    ),
    url('/static/lofi_background.webp') no-repeat center center fixed !important;
  background-size: 100% 100%, cover;
  background-color: black;
}

.logo {
  text-align: center;
  font-size: 3em;
  font-weight: normal;
  letter-spacing: 0.5em;
  margin-bottom: 10%;
}

@media (max-width: 768px) {
  .logo {
    font-size: 2em;
    letter-spacing: 0.1em;
  }
}

footer {
  min-height: 10vh;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 16px;
}

footer a.btn {
  font-size: 1em;
}

@media (max-width: 768px) {
  footer a.btn {
    font-size: 0.8em;
    letter-spacing: 0.1em;
  }
}
</style> 
