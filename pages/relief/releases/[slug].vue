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
            <template v-for="(a, i) in releaseArtists" :key="a.slug">
              <span v-if="i">, </span>
              <NuxtLink :to="reliefPath(`/artists/${a.slug}`)">{{ a.name }}</NuxtLink>
            </template>
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
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description mb-5" lang="ru">
          <template v-for="(block, i) in release.description" :key="i">
            <img
              v-if="block.photo"
              :src="`${block.photo}.webp`"
              :srcset="`${block.photo}_600.webp 600w, ${block.photo}.webp 1200w`"
              sizes="(max-width: 768px) 90vw, 70vw"
              :alt="block.alt"
              :class="['description-photo', { 'description-photo--wide': block.wide }]"
              loading="lazy"
            />
            <p v-else>{{ block }}</p>
          </template>
          <p v-if="release.credits?.length" class="credits">
            <template v-for="line in release.credits" :key="line"><i>{{ line }}</i><br /></template>
          </p>
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


const releaseArtists = (release.artistSlugs || [release.artistSlug])
  .map(slug => reliefArtists.find(a => a.slug === slug))
  .filter(Boolean)

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
.relief-release h5 {
  font-weight: 400;
  letter-spacing: 0.06em;
  line-height: 1.3;
}

.release-name {
  letter-spacing: 0.06em;
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
  font-family: var(--relief-font);
  text-align: justify;
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
