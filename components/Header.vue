<template>
  <div class="w-100">
    <div id="nav" class="row justify-content-end">
      <div class="d-flex w-100 justify-content-end">
        <img
          class="hamburger d-block d-sm-none"
          src="~/static/white-hamburger.png"
          width="30px"
          height="30px"
          alt=""
          @click="menuShow = !menuShow"
        />
      </div>
      <transition name="fade">
        <div v-if="menuShow" class="d-sm-none row">
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
            <NuxtLink class="btn text-nowrap" to="/contacts">Контакты</NuxtLink>
          </div>
        </div>
      </transition>
      <div class="col-sm-2 d-none d-sm-block">
        <NuxtLink class="btn text-nowrap px-2" to="/">Главная</NuxtLink>
      </div>
      <div class="col-sm-3 d-none d-sm-block">
        <NuxtLink class="btn text-nowrap px-2" to="/about">O местности</NuxtLink>
      </div>
      <div class="col-sm-3 d-none d-sm-block">
        <NuxtLink class="btn text-nowrap px-2" to="/releases">Релизы</NuxtLink>
      </div>
      <div class="col-sm-2 d-none d-sm-block">
        <NuxtLink class="btn text-nowrap px-2" to="/artists">Артисты</NuxtLink>
      </div>
      <div class="col-sm-2 d-none d-sm-block">
        <NuxtLink class="btn text-nowrap px-2" to="/contacts">Контакты</NuxtLink>
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
