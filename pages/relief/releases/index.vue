<template>
  <div class="releases">
    <div class="container-fluid">
      <div class="row p-5">
        <div
          v-for="release in reliefReleases"
          :key="release.slug"
          class="col-md-4 col-sm-6 col-12 align-items-center"
        >
          <NuxtLink class="btn" :to="reliefPath(`/releases/${release.slug}`)">
            <img
              :src="release.image"
              :alt="`${release.artistName} - ${release.releaseName}`"
              class="release-image"
              loading="lazy"
            />
            <div>
              <p class="description">{{ release.artistName }}</p>
              <p class="description">{{ release.releaseName }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { reliefReleases, reliefPath } = useRelief()

useSeoMeta({
  title: 'Релизы — Relief',
  ogTitle: 'Релизы — Relief',
})
</script>

<style scoped>
.description {
  color: #111;
  font-family: var(--relief-font) !important;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.06em;
  line-height: 1.3;
  cursor: pointer;
}

.description:hover {
  color: #7d8f87;
}

.release-image {
  width: 100%;
  height: auto;
  max-width: 300px;
  display: block;
  margin: 0 auto;
}
</style>
