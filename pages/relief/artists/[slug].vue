<template>
  <div v-if="artist" class="artist-page w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center text-center">
        <img :src="artist.photo" :alt="artist.name" class="artist-photo" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5 artist-info">
          <h2 class="artist-name">{{ artist.name }}</h2>
        </div>
      </div>
    </div>

    <div v-if="releases.length" class="releases-section">
      <div class="row p-5 justify-content-center">
        <div
          v-for="release in releases"
          :key="release.slug"
          class="col-md-4 col-sm-6 col-12"
        >
          <NuxtLink class="btn" :to="reliefPath(`/releases/${release.slug}`)">
            <img
              :src="release.image"
              :alt="`${release.artistName} - ${release.releaseName}`"
              class="release-image"
              loading="lazy"
            />
            <p class="release-title">{{ release.releaseName }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { reliefArtists, reliefReleases, reliefPath } = useRelief()
const artist = reliefArtists.find(a => a.slug === route.params.slug)

if (!artist) {
  throw createError({ statusCode: 404, statusMessage: 'Artist not found' })
}

const releases = reliefReleases.filter(r => (r.artistSlugs || [r.artistSlug]).includes(artist.slug))

useSeoMeta({
  title: `${artist.name} — Relief`,
  ogTitle: `${artist.name} — Relief`,
  ogImage: `https://mestnostrecords.com${artist.photo}`,
})
</script>

<style scoped>
.artist-page {
  color: #111;
}

.artist-photo {
  max-width: 80%;
  max-height: 70vh;
  object-fit: cover;
}

.artist-name {
  padding: 0 1rem;
  font-size: clamp(1.3rem, 2.2vw, 2rem);
  letter-spacing: 0.15em;
  line-height: 1.5;
}

.release-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.release-title {
  color: #111;
  font-family: MomsRelief, monospace;
  font-size: 0.8em;
  font-weight: bold;
}

.release-title:hover {
  color: #7d8f87;
}

.fill {
  min-height: 80vh;
}
</style>
