<template>
  <div class="artists">
    <div class="container-fluid">
      <div class="row p-5">
        <div
          v-for="artist in artists"
          :key="`${artist.name}`"
          class="col-md-4 col-sm-6 col-12 align-items-center"
        >
          <NuxtLink class="btn" :to="`/${artist.link}`">
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
export default {
  name: 'ArtistsPage',
  components: {},
  data() {
    return {
      artists: [
        {
          name: 'Kisser',
          photo: 'kisser',
          link: 'releases/FieldsOfDomodevskaya'
        },
        {
          name: 'Max Ananyev',
          photo: 'max_ananyev',
          link: 'releases/SunInsteadOfHead'
        },
        {
          name: 'Ne Tvoy Drug',
          photo: 'ne_tvoy_drug',
          link: 'releases/Xazy'
        },
        {
          name: 'Ko+Ma',
          photo: 'koma',
          link: 'releases/DorogaVNebo'
        },
        {
          name: 'Andrey Rasputin',
          photo: 'rasputin',
          link: 'releases/ChertaNova'
        },
        {
          name: 'Kokokei',
          photo: 'kokokei',
          link: 'releases/KokokeiMandarin'
        },
        {
          name: 'Anderdog and Andrey Leto',
          photo: 'anderdogandreyleto',
          link: 'releases/AnderdogAndreyLeto'
        },
        {
          name: 'Morakh',
          photo: 'morakh',
          link: 'releases/MorakhLimes'
        },
        {
          name: 'Vvvedenskaya',
          photo: 'vvvedenskaya',
          link: 'releases/VvvedenskayaAttempts'
        },
        {
          name: 'Microdog',
          photo: 'microdog',
          link: 'releases/MicrodogEastSide'
        },
        {
          name: 'Ambidextrous',
          photo: 'ambidextrous',
          link: 'releases/GroundedRectangle'
        },
        {
          name: 'Anderdog',
          photo: 'anderdog',
          link: 'releases/DogEatDog'
        },
        {
          name: 'Yella Gin',
          photo: 'yella_gin',
          link: 'releases/YaBilSputnicomSolnca'
        },
        {
          name: 'Raveny x Morphtables',
          photo: 'raveny_morphtables',
          link: 'releases/BosporusAcident'
        },
        {
          name: 'HAJIME KOJIRO',
          photo: 'hajime_kojiro',
          link: 'releases/ShinraBanshou'
        },
        {
          name: 'DJ HeadSick',
          photo: 'dj_headsick',
          link: 'releases/NewLife'
        },
        {
          name: 'Ilya Orange',
          photo: 'ilya_orange',
          link: 'releases/Quietud'
        },
        {
          name: 'Dessin Bizarre',
          photo: 'dessin_bizarre',
          link: 'releases/Imagine'
        },
        {
          name: 'ВСЕСЛАВЪ',
          photo: 'vseslav',
          link: 'releases/Dryoma'
        },
        {
          name: 'H. Ruine',
          photo: 'h_ruine',
          link: 'releases/ImaginedAwakenings'
        },
        {
          name: 'Mikhail Kireev',
          photo: 'mikhail_kireev',
          link: 'releases/ImaginedAwakenings'
        },
        {
          name: 'KIKOK',
          photo: 'kikok',
          link: 'releases/LovelyGrinch'
        },
      ].sort((a,b)=> (a.name > b.name ? 1 : -1))
    }
  },
  methods: {
    getImageUrl(photo) {
      return `/static/${photo}_face.webp`
    }
  },
}
</script>

<style scoped>
.description {
  font-family: Acrom, sans-serif;
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
