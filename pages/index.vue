<template>
  <div class="home">
    <div class="container-fluid h80">
      <div class="d-flex align-items-center h80">
        <h1 class="text-white logo w-100">МЕСТНОСТЬ</h1>
      </div>
    </div>
    <footer class="d-flex justify-content-start">
      <a
        class="btn text-white"
        href="https://t.me/mestnost_label"
        target="_blank"
      >
        telegram
      </a>
      <a
        class="btn text-white"
        href="https://www.instagram.com/mestnostishere/"
        target="_blank"
      >
        instagram
      </a>
      <a
        class="btn text-white"
        href="https://vk.com/mestnostrecords"
        target="_blank"
      >
        вк
      </a>
      <a
        class="btn text-white"
        href="https://mestnost.bandcamp.com"
        target="_blank"
      >
        bandcamp
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
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
  @media only screen and (max-width: 768px) {
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

.home {
  background: url('/background.jpg') no-repeat center center fixed;
  background-size: cover;
}

.logo {
  text-align: center;
  font-size: 3em;
  font-weight: normal;
  letter-spacing: 0.5em;
  margin-bottom: 10%;

  @media only screen and (max-width: 768px) {
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
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.1em;
  }
}
</style>
