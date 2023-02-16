<template>
  <div class="releases">
    <div class="container-fluid">
      <div class="row p-5">
        <div
          v-for="release in releases"
          :key="`${release.name}.sketch`"
          class="col-md-4 col-sm-6 col-xs-12 sketch align-items-center"
          @click="openReleasePage(release.name)"
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
          name: 'releases/ChertaNova',
          artistName: 'Andrey Rasputin',
          releaseName: 'Cherta-nova',
          image: 'cherta-nova',
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
  },
  methods: {
    openReleasePage(releaseName) {
      this.releasePage = releaseName
      this.showReleasePage = true
    },
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

.sketch {
  width: 100%;
}
</style>
