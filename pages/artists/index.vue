<template>
  <div class="artists">
    <div class="container-fluid">
      <div class="row p-5">
        <div
          v-for="artist in artists"
          :key="`${artist.name}`"
          class="col-md-4 col-sm-6 col-12 align-items-center"
        >
          <NuxtLink class="btn" :to="getArtistLink(artist)">
            <div class="mb-1 align-middle ">
              <NuxtImg :src="getImageUrl(artist.photo)" class="crop" format="webp" :quality="85" loading="lazy" />
            </div>
            <div class="text-white">
              <p class="description">{{ artist.name }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useArtists } from '~/composables/useArtists'

export default {
  name: 'ArtistsPage',
  components: {},
  setup() {
    const { hasSocialMedia, getArtistSlug } = useArtists()
    return { hasSocialMedia, getArtistSlug }
  },
  data() {
    return {
      artists: [
        {
          name: 'Kisser',
          photo: 'kisser',
          fallbackLink: 'releases/fields-of-domodevskaya'
        },
        {
          name: 'Max Ananyev',
          photo: 'max_ananyev',
          fallbackLink: 'releases/sun-instead-of-head'
        },
        {
          name: 'Ne Tvoy Drug',
          photo: 'ne_tvoy_drug',
          fallbackLink: 'releases/xazy'
        },
        {
          name: 'Ko+Ma',
          photo: 'koma',
          fallbackLink: 'releases/doroga-v-nebo'
        },
        {
          name: 'Andrey Rasputin',
          photo: 'rasputin',
          fallbackLink: 'releases/cherta-nova'
        },
        {
          name: 'Kokokei',
          photo: 'kokokei',
          fallbackLink: 'releases/kokokei-mandarin'
        },
        {
          name: 'Anderdog and Andrey Leto',
          photo: 'anderdogandreyleto',
          fallbackLink: 'releases/anderdog-andrey-leto'
        },
        {
          name: 'Morakh',
          photo: 'morakh',
          fallbackLink: 'releases/morakh-limes'
        },
        {
          name: 'Vvvedenskaya',
          photo: 'vvvedenskaya',
          fallbackLink: 'releases/vvvedenskaya-attempts'
        },
        {
          name: 'Microdog',
          photo: 'microdog',
          fallbackLink: 'releases/microdog-east-side'
        },
        {
          name: 'Ambidextrous',
          photo: 'ambidextrous',
          fallbackLink: 'releases/grounded-rectangle'
        },
        {
          name: 'Anderdog',
          photo: 'anderdog',
          fallbackLink: 'releases/dog-eat-dog'
        },
        {
          name: 'Yella Gin',
          photo: 'yella_gin',
          fallbackLink: 'releases/ya-bil-sputnicom-solnca'
        },
        {
          name: 'Raveny x Morphtables',
          photo: 'raveny_morphtables',
          fallbackLink: 'releases/bosporus-acident'
        },
        {
          name: 'HAJIME KOJIRO',
          photo: 'hajime_kojiro',
          fallbackLink: 'releases/shinra-banshou'
        },
        {
          name: 'DJ HeadSick',
          photo: 'dj_headsick',
          fallbackLink: 'releases/new-life'
        },
        {
          name: 'Ilya Orange',
          photo: 'ilya_orange',
          fallbackLink: 'releases/quietud'
        },
        {
          name: 'Dessin Bizarre',
          photo: 'dessin_bizarre',
          fallbackLink: 'releases/imagine'
        },
        {
          name: 'ВСЕСЛАВЪ',
          photo: 'vseslav',
          fallbackLink: 'releases/dryoma'
        },
        {
          name: 'H. Ruine',
          photo: 'h_ruine',
          fallbackLink: 'releases/imagined-awakenings'
        },
        {
          name: 'Mikhail Kireev',
          photo: 'mikhail_kireev',
          fallbackLink: 'releases/imagined-awakenings'
        },
        {
          name: 'KIKOK',
          photo: 'kikok',
          fallbackLink: 'releases/lovely-grinch'
        },
        {
          name: 'Dubree',
          photo: 'dubree',
          fallbackLink: 'releases/ratio-et-caritas'
        },
        {
          name: 'DJ Slon',
          photo: 'dj_slon',
          fallbackLink: 'releases/himeri-proraba'
        },
      ].sort((a,b)=> (a.name > b.name ? 1 : -1))
    }
  },
  methods: {
    getImageUrl(photo) {
      return `/static/${photo}_face.webp`
    },
    getArtistLink(artist) {
      if (this.hasSocialMedia(artist.name)) {
        return `/artists/${this.getArtistSlug(artist.name)}`
      }
      return `/${artist.fallbackLink}`
    }
  },
}
</script>

<style scoped>
.description {
  font-family: NotoSans, sans-serif;
  font-size: 0.8em;
  font-weight: bold;
  cursor: pointer;
}

.description:hover {
  color: #91a79d;
}

.p-5 {
  justify-content: space-around;
}

.artist {
  padding: 16px;
}

.crop {
  object-fit: cover;
  width: 280px;
  height: 280px;
}

@media only screen and (max-width: 1000px) {
  .crop {
    width: 210px;
    height: 210px;
  }
}
</style>
