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
          fallbackLink: 'releases/FieldsOfDomodevskaya'
        },
        {
          name: 'Max Ananyev',
          photo: 'max_ananyev',
          fallbackLink: 'releases/SunInsteadOfHead'
        },
        {
          name: 'Ne Tvoy Drug',
          photo: 'ne_tvoy_drug',
          fallbackLink: 'releases/Xazy'
        },
        {
          name: 'Ko+Ma',
          photo: 'koma',
          fallbackLink: 'releases/DorogaVNebo'
        },
        {
          name: 'Andrey Rasputin',
          photo: 'rasputin',
          fallbackLink: 'releases/ChertaNova'
        },
        {
          name: 'Kokokei',
          photo: 'kokokei',
          fallbackLink: 'releases/KokokeiMandarin'
        },
        {
          name: 'Anderdog and Andrey Leto',
          photo: 'anderdogandreyleto',
          fallbackLink: 'releases/AnderdogAndreyLeto'
        },
        {
          name: 'Morakh',
          photo: 'morakh',
          fallbackLink: 'releases/MorakhLimes'
        },
        {
          name: 'Vvvedenskaya',
          photo: 'vvvedenskaya',
          fallbackLink: 'releases/VvvedenskayaAttempts'
        },
        {
          name: 'Microdog',
          photo: 'microdog',
          fallbackLink: 'releases/MicrodogEastSide'
        },
        {
          name: 'Ambidextrous',
          photo: 'ambidextrous',
          fallbackLink: 'releases/GroundedRectangle'
        },
        {
          name: 'Anderdog',
          photo: 'anderdog',
          fallbackLink: 'releases/DogEatDog'
        },
        {
          name: 'Yella Gin',
          photo: 'yella_gin',
          fallbackLink: 'releases/YaBilSputnicomSolnca'
        },
        {
          name: 'Raveny x Morphtables',
          photo: 'raveny_morphtables',
          fallbackLink: 'releases/BosporusAcident'
        },
        {
          name: 'HAJIME KOJIRO',
          photo: 'hajime_kojiro',
          fallbackLink: 'releases/ShinraBanshou'
        },
        {
          name: 'DJ HeadSick',
          photo: 'dj_headsick',
          fallbackLink: 'releases/NewLife'
        },
        {
          name: 'Ilya Orange',
          photo: 'ilya_orange',
          fallbackLink: 'releases/Quietud'
        },
        {
          name: 'Dessin Bizarre',
          photo: 'dessin_bizarre',
          fallbackLink: 'releases/Imagine'
        },
        {
          name: 'ВСЕСЛАВЪ',
          photo: 'vseslav',
          fallbackLink: 'releases/Dryoma'
        },
        {
          name: 'H. Ruine',
          photo: 'h_ruine',
          fallbackLink: 'releases/ImaginedAwakenings'
        },
        {
          name: 'Mikhail Kireev',
          photo: 'mikhail_kireev',
          fallbackLink: 'releases/ImaginedAwakenings'
        },
        {
          name: 'KIKOK',
          photo: 'kikok',
          fallbackLink: 'releases/LovelyGrinch'
        },
        {
          name: 'Dubree',
          photo: 'dubree',
          fallbackLink: 'releases/RatioEtCaritas'
        },
        {
          name: 'DJ Slon',
          photo: 'dj_slon',
          fallbackLink: 'releases/HimeriProraba'
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
