<template>
  <div class="releases">
    <div class="container-fluid">
      <div class="row p-5">
        <div
          v-for="release in releases"
          :key="`${release.name}.sketch`"
          class="col-md-4 col-sm-6 col-xs-12 sketch align-items-center"
        >
          <NuxtLink class="btn" :to="`/${release.name}`">
            <PfiveSketch :image-title="`${release.image}`" class="p5-sketch" />
            <div :key="`${release.name}.description`" class="text-white">
              <p class="description">{{ release.artistName }}</p>
              <p class="description">{{ release.releaseName }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReleasesPage',
  components: {
    PfiveSketch: () => {
      if (process.client) {
        return import('@/components/PfiveSketch.vue')
      }
    },
  },
  data() {
    return {
      releases: [
        {
          name: 'releases/Imagine',
          artistName: 'Anderdog and Dessin Bizarre',
          releaseName: 'Imagine',
          image: 'imagine',
        },
        {
          name: 'releases/Veter',
          artistName: 'Ne Tvoy Drug',
          releaseName: 'Veter',
          image: 'veter',
        },
        {
          name: 'releases/KoMaKokokeiDorogaVNebo',
          artistName: 'Ko+Ma',
          releaseName: 'Дорога в небо (Kokokei Edit)',
          image: 'doroga_v_nebo_kokokei_edit',
        },
        {
          name: 'releases/Quietud',
          artistName: 'Ilya Orange',
          releaseName: 'Quietud',
          image: 'quietud',
        },
        {
          name: 'releases/NewLife',
          artistName: 'DJ HeadSick',
          releaseName: 'New Life',
          image: 'new_life',
        },
        {
          name: 'releases/ShinraBanshou',
          artistName: 'HAJIME KOJIRO',
          releaseName: 'SHINRA BANSHOU',
          image: 'shinra_banshou',
        },
        {
          name: 'releases/Helix',
          artistName: 'Morakh',
          releaseName: 'Helix',
          image: 'helix',
        },
        {
          name: 'releases/DogRemixDog',
          artistName: 'Anderdog',
          releaseName: 'Dog Remix Dog',
          image: 'dog_remix_dog',
        },
        {
          name: 'releases/BosporusAcident',
          artistName: 'Raveny x Morphtables',
          releaseName: 'Bosporus Acident',
          image: 'bosporus_accident',
        },
        {
          name: 'releases/YaBilSputnicomSolnca',
          artistName: 'Yella Gin',
          releaseName: 'Я Был Спутником Солнца',
          image: 'yella_gin_ya_bil_sputnicom_solnca',
        },
        {
          name: 'releases/DogEatDog',
          artistName: 'Anderdog',
          releaseName: 'Dog Eat Dog',
          image: 'anderdog_dog_eat_dog',
        },
        {
          name: 'releases/KokokeiMandarin',
          artistName: 'Kokokei',
          releaseName: 'Mandarin',
          image: 'mandarin',
        },
        {
          name: 'releases/FieldsOfDomodevskaya',
          artistName: 'Kisser',
          releaseName: 'Fields of Domodevskaya',
          image: 'fields_of_domodevskaya',
        },
        {
          name: 'releases/SunInsteadOfHead',
          artistName: 'Max Ananyev',
          releaseName: 'Sun Instead Of Head',
          image: 'sun_instead_of_head',
        },
        {
          name: 'releases/GroundedRectangle',
          artistName: 'Ambidextrous',
          releaseName: 'Grounded Rectangle',
          image: 'grounded_rectangle',
        },
        {
          name: 'releases/Xazy',
          artistName: 'Ne Tvoy Drug',
          releaseName: 'Xazy',
          image: 'xazy',
        },
        {
          name: 'releases/DorogaVNebo',
          artistName: 'Ko+Ma',
          releaseName: 'Дорога в небо',
          image: 'doroga_v_nebo',
        },
        {
          name: 'releases/ChertaNova',
          artistName: 'Andrey Rasputin',
          releaseName: 'Cherta-nova',
          image: 'cherta-nova',
        },
        {
          name: 'releases/AnderdogKelgoma',
          artistName: 'Anderdog',
          releaseName: 'Kelgoma',
          image: 'anderdog_kelgoma',
        },
        {
          name: 'releases/KokokeiMimoza',
          artistName: 'Kokokei',
          releaseName: 'Mimoza',
          image: 'kokokei',
        },
        {
          name: 'releases/AnderdogAndreyLeto',
          artistName: 'Anderdog and Andrey Leto',
          releaseName: 'Romantic Selection',
          image: 'anderdogandreyleto',
        },
        {
          name: 'releases/MorakhLimes',
          artistName: 'Morakh',
          releaseName: 'Limes',
          image: 'morakh',
        },
        {
          name: 'releases/VvvedenskayaAttempts',
          artistName: 'Vvvedenskaya',
          releaseName: 'Attempts',
          image: 'vvvedenskaya',
        },
        {
          name: 'releases/MicrodogEastSide',
          artistName: 'Microdog',
          releaseName: 'East Side of the Breaktown',
          image: 'microdog',
        },
        {
          name: 'releases/AmbidextrousErrorism',
          artistName: 'Ambidextrous',
          releaseName: 'Errorism',
          image: 'ambidextrous_cassette_1',
        },
        {
          name: 'releases/KoMaRealFace',
          artistName: 'Ko+Ma',
          releaseName: 'По-настоящему счастливое лицо стремится стать кругом',
          image: 'koma',
        },
        {
          name: 'releases/AnderdogSleepParalysis',
          artistName: 'Anderdog',
          releaseName: 'Sleep Paralysis',
          image: 'anderdog',
        },
      ],
      releasePage: null,
      showReleasePage: false,
    }
  }
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

.sketch {
  width: 100%;
}
</style>
