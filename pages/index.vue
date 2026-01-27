<template>
  <div class="home">
    <div class="container-fluid h80">
      <div class="d-flex align-items-center h80">
        <h1 class="text-white logo w-100">МЕСТНОСТЬ</h1>
      </div>
    </div>
    <footer class="footer-links">
      <a
        href="https://t.me/mestnost_label"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link text-white"
        title="Telegram"
      >
        <font-awesome-icon :icon="['fab', 'telegram']" class="social-icon" />
      </a>
      <a
        href="https://www.instagram.com/mestnostrecords"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link text-white"
        title="Instagram"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" class="social-icon" />
      </a>
      <a
        href="https://vk.com/mestnostrecords"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link text-white"
        title="VKontakte"
      >
        <font-awesome-icon :icon="['fab', 'vk']" class="social-icon" />
      </a>
      <a
        href="https://mestnost.bandcamp.com"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link text-white"
        title="Bandcamp"
      >
        <font-awesome-icon :icon="['fab', 'bandcamp']" class="social-icon" />
      </a>
      <a
        href="https://soundcloud.com/mestnost-records"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link text-white"
        title="SoundCloud"
      >
        <font-awesome-icon :icon="['fab', 'soundcloud']" class="social-icon" />
      </a>
      <a
        href="https://www.mixcloud.com/Mestnost_Records/"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link text-white"
        title="Mixcloud"
      >
        <font-awesome-icon :icon="['fab', 'mixcloud']" class="social-icon" />
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
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
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  border-color: #91a79d;
  background-color: rgba(145, 167, 157, 0.2);
}

.social-icon {
  font-size: 1.4rem;
}
</style>
