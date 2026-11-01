<template>
  <div v-if="release" class="relief-release w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img
          :src="release.image"
          :alt="`${release.artistName} - ${release.releaseName}`"
          class="cover"
        />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="release-name">
            <NuxtLink :to="reliefPath(`/artists/${release.artistSlug}`)">{{ release.artistName }}</NuxtLink>
          </h5>
          <h5>{{ release.releaseName }}</h5>
          <p class="number">Relief {{ release.number }}</p>
          <div>
            <div
              v-for="link in release.links"
              :key="link.name"
              class="store-link col-12 col-lg-4 col-md-6 mt-5 text-nowrap"
            >
              <ClientOnly>
                <font-awesome-icon :icon="['fab', link.icon]" />
              </ClientOnly>
              <a :href="link.link" target="_blank" class="social">{{ link.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="artist" class="row">
      <div class="col-md-12 mb-5">
        <NuxtLink :to="reliefPath(`/artists/${artist.slug}`)">
          <img :src="artist.photo" :alt="artist.name" class="artist-photo" loading="lazy" />
        </NuxtLink>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description mb-5">
          <p v-for="(paragraph, i) in release.description" :key="i">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { reliefReleases, reliefArtists, reliefPath } = useRelief()
const release = reliefReleases.find(r => r.slug === route.params.slug)

if (!release) {
  throw createError({ statusCode: 404, statusMessage: 'Release not found' })
}

const artist = reliefArtists.find(a => a.slug === release.artistSlug)

const title = `${release.artistName} — ${release.releaseName}`
useSeoMeta({
  title,
  ogTitle: title,
  description: `${release.releaseName} — ${release.artistName}, Relief ${release.number}`,
  ogImage: `https://mestnostrecords.com${release.image}`,
})
</script>

<style scoped>
.relief-release,
.relief-release a {
  color: #111;
}

.cover {
  max-width: 80%;
  height: auto;
}

/* Cocomat Bold has a broken Cyrillic "о", so the name stays regular weight */
.artist-photo {
  max-width: 50%;
  height: auto;
}

.release-name {
  letter-spacing: 0.2em;
}

.release-name a {
  text-decoration: none;
}

.release-name a:hover {
  color: #7d8f87;
}

.number {
  margin-top: 1rem;
  font-size: 0.8em;
  opacity: 0.55;
}

.description {
  margin: 0 15%;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  font-family: NotoSans, sans-serif;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.08em;
  }
}

.social {
  font-size: 1em;
  text-decoration: none;
  margin-left: 0.5em;
  vertical-align: middle;
}

.store-link {
  display: inline-block;
  margin-left: 0.5em;
  vertical-align: middle;
  letter-spacing: 0.2em;
}

.fill {
  min-height: 90vh;
  height: 100%;
}
</style>
