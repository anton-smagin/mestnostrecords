<template>
  <div class="w-100">
    <div id="nav" class="row justify-content-between">
      <!-- Mobile hamburger button -->
      <div class="d-flex w-80 justify-content-end d-lg-none">
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
          class="mobile-overlay d-lg-none"
          @click="menuShow = false"
        />
      </transition>

      <!-- Mobile menu -->
      <transition name="slide">
        <div v-if="menuShow" class="mobile-menu d-lg-none">
          <nav class="mobile-nav">
            <div class="mobile-nav-item" @click="menuShow = false">
              <NuxtLink class="mobile-link" to="/">Главная</NuxtLink>
            </div>
            <div class="mobile-nav-item" @click="menuShow = false">
              <NuxtLink class="mobile-link" to="/about">О местности</NuxtLink>
            </div>
            <div class="mobile-nav-item" @click="menuShow = false">
              <NuxtLink class="mobile-link" to="/releases">Релизы</NuxtLink>
            </div>
            <div class="mobile-nav-item" @click="menuShow = false">
              <NuxtLink class="mobile-link" to="/artists">Артисты</NuxtLink>
            </div>
            <div class="mobile-nav-item" @click="menuShow = false">
              <NuxtLink class="mobile-link" to="/events">События</NuxtLink>
            </div>
            <div class="mobile-nav-item" @click="menuShow = false">
              <NuxtLink class="mobile-link" to="/merch">Мерч</NuxtLink>
            </div>
          </nav>
        </div>
      </transition>

      <!-- Desktop menu -->
      <div class="row justify-content-between">
        <div class="col-lg-1 d-none d-lg-block">
          <NuxtLink class="btn text-nowrap px-2" to="/">Главная</NuxtLink>
        </div>
        <div class="col-lg-1 d-none d-lg-block">
          <NuxtLink class="btn text-nowrap px-2" to="/about">Местность</NuxtLink>
        </div>
        <div class="col-lg-1 d-none d-lg-block">
          <NuxtLink class="btn text-nowrap px-2" to="/releases">Релизы</NuxtLink>
        </div>
        <div class="col-lg-1 d-none d-lg-block">
          <NuxtLink class="btn text-nowrap px-2" to="/artists">Артисты</NuxtLink>
        </div>
        <div class="col-lg-1 d-none d-lg-block">
          <NuxtLink class="btn text-nowrap px-2" to="/events">События</NuxtLink>
        </div>
        <div class="col-lg-1 d-none d-lg-block">
          <NuxtLink class="btn text-nowrap px-2" to="/merch">Мерч</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
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
