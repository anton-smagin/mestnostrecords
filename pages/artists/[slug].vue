<template>
  <div class="artist-page w-100">
    <div v-if="artist" class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center text-center">
        <NuxtImg
          v-if="artistPhoto"
          :src="artistPhoto"
          :alt="displayName"
          class="artist-photo"
          format="webp"
          :quality="85"
        />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5 artist-info">
          <h2 class="text-white artist-name">{{ displayName }}</h2>
          <p v-if="artist['локация']" class="text-white location">
            <font-awesome-icon :icon="['fas', 'location-dot']" class="location-icon" />
            {{ artist['локация'] }}
          </p>
          <div class="social-links mt-4">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link text-white"
              :title="link.name"
            >
              <font-awesome-icon :icon="['fab', link.icon]" class="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="artistReleases.length > 0" class="releases-section">
      <div class="row p-5 justify-content-center">
        <div
          v-for="release in artistReleases"
          :key="release.name"
          class="col-md-4 col-sm-6 col-12 release-item"
        >
          <NuxtLink class="btn" :to="`/${release.name}`">
            <NuxtImg
              :src="`/static/${release.image}.webp`"
              :alt="`${release.artistName} - ${release.releaseName}`"
              class="release-image"
              format="webp"
              :quality="85"
              loading="lazy"
            />
            <div class="text-white">
              <p class="release-title">{{ release.releaseName }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-if="!artist" class="not-found text-white text-center">
      <h2>Artist not found</h2>
      <NuxtLink to="/artists" class="text-white">Back to artists</NuxtLink>
    </div>
  </div>
</template>

<script>
import { useArtists } from '~/composables/useArtists'
import { useReleases } from '~/composables/useReleases'

export default {
  name: 'ArtistPage',
  setup() {
    const { getArtistBySlug, getSocialLinks, getDisplayName } = useArtists()
    const { getReleasesByArtist } = useReleases()

    return {
      getArtistBySlug,
      getSocialLinks,
      getDisplayName,
      getReleasesByArtist
    }
  },
  data() {
    return {
      artist: null,
      displayName: '',
      socialLinks: [],
      artistReleases: [],
      artistPhoto: null
    }
  },
  created() {
    const slug = this.$route.params.slug
    this.artist = this.getArtistBySlug(slug)

    if (this.artist) {
      this.displayName = this.getDisplayName(this.artist)
      this.socialLinks = this.getSocialLinks(this.artist)
      this.artistReleases = this.getReleasesByArtist(this.displayName)
      this.artistPhoto = this.findArtistPhoto()
    }
  },
  methods: {
    findArtistPhoto() {
      // Map artist names to their photo files
      const photoMap = {
        'Kisser': 'kisser_face',
        'Max Ananyev': 'max_ananyev_face',
        'Ne Tvoy Drug': 'ne_tvoy_drug_face',
        'Ko+Ma': 'koma_face',
        'Andrey Rasputin': 'rasputin_face',
        'Kokokei': 'kokokei_face',
        'Anderdog and Andrey Leto': 'anderdogandreyleto_face',
        'Morakh': 'morakh_face',
        'Vvvedenskaya': 'vvvedenskaya_face',
        'Microdog': 'microdog_face',
        'Ambidextrous': 'ambidextrous_face',
        'Anderdog': 'anderdog_face',
        'Yella Gin': 'yella_gin_face',
        'Raveny x Morphtables': 'raveny_morphtables_face',
        'HAJIME KOJIRO': 'hajime_kojiro_face',
        'DJ HeadSick': 'dj_headsick_face',
        'Ilya Orange': 'ilya_orange_face',
        'Dessin Bizarre': 'dessin_bizarre_face',
        'ВСЕСЛАВЪ': 'vseslav_face',
        'H. Ruine': 'h_ruine_face',
        'Mikhail Kireev': 'mikhail_kireev_face',
        'KIKOK': 'kikok_face',
        'Dubree': 'dubree_face'
      }

      const photo = photoMap[this.displayName]
      if (photo) {
        return `/static/${photo}.webp`
      }

      // Fallback: try to find from releases
      if (this.artistReleases.length > 0) {
        return `/static/${this.artistReleases[0].image}.webp`
      }

      return null
    }
  },
  head() {
    return {
      title: this.displayName ? `${this.displayName} | Mestnost` : 'Artist | Mestnost'
    }
  }
}
</script>

<style scoped>
.artist-page {
  background-color: black;
  background-image: none;
  min-height: 100vh;
}

.fill {
  min-height: 70vh;
  height: 100%;
}

.artist-photo {
  max-width: 80%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
}

.artist-info {
  padding: 0 2rem;
  text-align: center;
}

.artist-name {
  font-family: NotoSans, sans-serif;
  font-weight: bold;
  letter-spacing: 0.15em;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.location {
  font-family: NotoSans, sans-serif;
  letter-spacing: 0.1em;
  font-size: 1.1rem;
  opacity: 0.8;
}

.location-icon {
  margin-right: 0.4em;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
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

.releases-section {
  padding: 2rem 0;
}

.release-item {
  text-align: center;
  margin-bottom: 2rem;
}

.release-image {
  width: 100%;
  height: auto;
  max-width: 300px;
  display: block;
  margin: 0 auto;
}

.release-title {
  font-family: NotoSans, sans-serif;
  font-size: 0.9em;
  font-weight: bold;
  letter-spacing: 0.1em;
  margin-top: 1rem;
  cursor: pointer;
}

.release-title:hover {
  color: #91a79d;
}

.not-found {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

@media only screen and (max-width: 768px) {
  .artist-name {
    font-size: 1.8rem;
  }

  .artist-info {
    padding: 0 1rem;
  }
}
</style>
