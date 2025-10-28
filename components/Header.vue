<template>
  <div class="w-100">
    <div id="nav" class="row justify-content-between">
      <div class="d-flex w-80 justify-content-end">
        <NuxtImg
          class="hamburger d-block d-md-none"
          src="/static/white-hamburger.png"
          width="30"
          height="30"
          alt=""
          @click="menuShow = !menuShow"
        />
      </div>
      <transition name="fade">
        <div v-if="menuShow" class="d-lg-none row">
          <div class="col-sm-12" @click="menuShow = false">
            <NuxtLink class="btn text-nowrap" to="/">Главная</NuxtLink>
          </div>
          <div class="col-sm-12" @click="menuShow = false">
            <NuxtLink class="btn text-nowrap" to="/about">О местности</NuxtLink>
          </div>
          <div class="col-sm-12" @click="menuShow = false">
            <NuxtLink class="btn text-nowrap" to="/releases">Релизы</NuxtLink>
          </div>
          <div class="col-sm-12" @click="menuShow = false">
            <NuxtLink class="btn text-nowrap" to="/artists">Артисты</NuxtLink>
          </div>
          <div class="col-sm-12" @click="menuShow = false">
            <NuxtLink class="btn text-nowrap" to="/events">События</NuxtLink>
          </div>
          <div class="col-sm-12" @click="menuShow = false">
            <NuxtLink class="btn text-nowrap" to="/merch">Мерч</NuxtLink>
          </div>
        </div>
      </transition>
      <div class="row justify-content-between">
        <div class="col-md-1 d-none d-md-block">
          <NuxtLink class="btn text-nowrap px-2" to="/">Главная</NuxtLink>
        </div>
        <div class="col-md-1 d-none d-md-block">
          <NuxtLink class="btn text-nowrap px-2" to="/about">Местность</NuxtLink>
        </div>
        <div class="col-md-1 d-none d-md-block">
          <NuxtLink class="btn text-nowrap px-2" to="/releases">Релизы</NuxtLink>
        </div>
        <div class="col-md-1 d-none d-md-block">
          <NuxtLink class="btn text-nowrap px-2" to="/artists">Артисты</NuxtLink>
        </div>
        <div class="col-md-1 d-none d-md-block">
          <NuxtLink class="btn text-nowrap px-2" to="/events">События</NuxtLink>
        </div>
        <div class="col-md-1 d-none d-md-block">
          <NuxtLink class="btn text-nowrap px-2" to="/merch">Мерч</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      menuShow: false,
    }
  },
}
</script>
