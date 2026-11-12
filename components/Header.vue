<template>
  <div class="w-100">
    <div id="nav" class="row justify-content-between">
      <!-- Mobile hamburger button -->
      <div class="hamburger-wrapper d-flex w-80 justify-content-end">
        <button
          class="hamburger-btn"
          :class="{ 'is-active': menuShow }"
          @click="menuShow = !menuShow"
          aria-label="Toggle menu"
        >
          <font-awesome-icon
            :icon="['fas', menuShow ? 'xmark' : 'bars']"
            class="hamburger-icon"
          />
        </button>
      </div>

      <!-- Mobile menu overlay -->
      <transition name="fade">
        <div
          v-if="menuShow"
          class="mobile-overlay"
          @click="menuShow = false"
        />
      </transition>

      <!-- Mobile menu -->
      <transition name="slide">
        <div v-if="menuShow" class="mobile-menu">
          <nav class="mobile-nav">
            <div
              v-for="item in menu"
              :key="item.to"
              class="mobile-nav-item"
              @click="menuShow = false"
            >
              <NuxtLink
                class="mobile-link"
                :class="item.class"
                :to="item.to"
                :external="item.external"
              >{{ item.mobileLabel || item.label }}</NuxtLink>
            </div>
          </nav>
        </div>
      </transition>

      <!-- Desktop menu -->
      <div class="desktop-menu row justify-content-between">
        <div v-for="item in menu" :key="item.to" class="desktop-menu-item">
          <NuxtLink
            class="btn text-nowrap px-2"
            :class="item.class"
            :to="item.to"
            :external="item.external"
          >{{ item.label }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  setup() {
    const route = useRoute()
    const { reliefPath, mestnostUrl, isReliefRoute } = useRelief()

    // Mestnost and Relief share one menu layout; each links to the other label.
    const mestnostMenu = [
      { label: 'Главная', to: '/' },
      { label: 'Местность', mobileLabel: 'О местности', to: '/about', class: 'cocomat-font' },
      { label: 'Релизы', to: '/releases' },
      { label: 'Артисты', to: '/artists' },
      { label: 'События', to: '/events' },
      { label: 'Мерч', to: '/merch' },
      { label: 'Рельеф', to: 'https://relief.mestnostrecords.com', external: true, class: 'sister-link' },
    ]
    const reliefMenu = [
      { label: 'Главная', to: reliefPath('') },
      { label: 'Рельеф', mobileLabel: 'О рельефе', to: reliefPath('/about'), class: 'cocomat-font' },
      { label: 'Релизы', to: reliefPath('/releases') },
      { label: 'Артисты', to: reliefPath('/artists') },
      { label: 'Местность', to: mestnostUrl, external: mestnostUrl.startsWith('http'), class: 'sister-link' },
    ]
    const menu = computed(() => (isReliefRoute(route.path) ? reliefMenu : mestnostMenu))
    return { menu }
  },
  data() {
    return {
      menuShow: false,
    }
  },
  watch: {
    menuShow(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
/* Custom 958px breakpoint */
.hamburger-wrapper {
  display: flex;
}

.desktop-menu {
  display: none;
}

.desktop-menu-item {
  display: block;
  width: 10%;
  padding: 0;
}

@media (min-width: 958px) {
  .hamburger-wrapper {
    display: none !important;
  }

  .mobile-overlay,
  .mobile-menu {
    display: none !important;
  }

  .desktop-menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
  }
}

.hamburger-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1001;
  position: relative;
}

.hamburger-icon {
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.hamburger-btn.is-active .hamburger-icon {
  transform: rotate(90deg);
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 999;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, rgba(20, 20, 20, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%);
  z-index: 1000;
  padding: 5rem 1.5rem 2rem;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-item:last-child {
  border-bottom: none;
}

.mobile-link {
  display: block;
  color: white;
  text-decoration: none;
  padding: 1rem 0.5rem;
  font-family: NotoSans, sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;
}

.mobile-link:hover,
.mobile-link.router-link-exact-active {
  color: #91a79d;
  padding-left: 1rem;
}

.mobile-link.cocomat-font {
  font-family: Cocomat, sans-serif;
}

/* Link to the sister label (Relief on Mestnost, Mestnost on Relief) */
.mobile-link.sister-link {
  margin-top: 0.5rem;
}

/* White Relief theme */
.relief-theme .hamburger-icon {
  color: #000;
}

.relief-theme .mobile-overlay {
  background: rgba(238, 237, 232, 0.7);
}

.relief-theme .mobile-menu {
  background: #eeede8;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.12);
}

.relief-theme .mobile-nav-item {
  border-bottom-color: rgba(0, 0, 0, 0.1);
}

.relief-theme .mobile-link {
  color: #000;
}

.relief-theme #nav a {
  color: #111;
}

.relief-theme #nav a.router-link-exact-active,
.relief-theme .mobile-link.router-link-exact-active {
  color: #7d8f87;
}


/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide transition for menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
