<template>
  <div class="releases">
    <div class="container-fluid">
      <div class="row p-5">
        <div
          v-for="release in releases"
          :key="`${release.name}.sketch`"
          class="col-md-4 col-sm-6 col-12 sketch align-items-center"
        >
          <NuxtLink class="btn" :to="`/${release.name}`">
            <NuxtImg :src="`/static/${release.image}.webp`" :alt="`${release.artistName} - ${release.releaseName}`" class="release-image" format="webp" :quality="85" loading="lazy" />
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
  data() {
    return {
      releases: [
        {
          name: 'releases/poludryoma',
          artistName: 'ВСЕСЛАВЪ',
          releaseName: 'Полудрёма',
          image: 'poludryoma',
        },
        {
          name: 'releases/himeri-proraba',
          artistName: 'DJ Slon',
          releaseName: 'Химеры прораба',
          image: 'dj_slon_himeri_proraba_cover',
        },
        {
          name: 'releases/evkalipt',
          artistName: 'Kokokei',
          releaseName: 'Evkalipt',
          image: 'kokokei_evkaliipt',
        },
        {
          name: 'releases/undisclosed-circuit',
          artistName: 'Ambidextrous',
          releaseName: 'Undisclosed Circuit',
          image: 'ambidextrous_undisclosed_circuit',
        },
        {
          name: 'releases/relikt-0',
          artistName: 'Andrey Rasputin',
          releaseName: 'RELIKT-0',
          image: 'relikt_0',
        },
        {
          name: 'releases/slow-crunch-remixes',
          artistName: 'KIKOK',
          releaseName: 'Slow Crunch remixes',
          image: 'slow_crunches_remixes',
        },
        {
          name: 'releases/ratio-et-caritas',
          artistName: 'Dubree',
          releaseName: 'Ratio et Сaritas',
          image: 'dubree_ratio_et_caritas',
        },
        {
          name: 'releases/relikt-1',
          artistName: 'Andrey Rasputin',
          releaseName: 'RELIKT-1',
          image: 'relikt_1',
        },
        {
          name: 'releases/the-way-of-the-dog',
          artistName: 'Anderdog',
          releaseName: 'The Way of the Dog',
          image: 'the_way_of_the_dog'
        },
        {
          name: 'releases/slow-crunch',
          artistName: 'KIKOK',
          releaseName: 'Slow Crunch',
          image: 'slow_crunch'
        },
        {
          name: 'releases/imagined-awakenings',
          artistName: 'H. Ruine / MIKHAIL KIREEV',
          releaseName: 'Imagined / Awakenings',
          image: 'imagined_awakenings',
        },
        {
          name: 'releases/dryoma',
          artistName: 'ВСЕСЛАВЪ',
          releaseName: 'Дрёма',
          image: 'dryoma',
        },
        {
          name: 'releases/imagine',
          artistName: 'Anderdog and Dessin Bizarre',
          releaseName: 'Imagine',
          image: 'imagine',
        },
        {
          name: 'releases/veter',
          artistName: 'Ne Tvoy Drug',
          releaseName: 'Veter',
          image: 'veter',
        },
        {
          name: 'releases/ko-ma-kokokei-doroga-v-nebo',
          artistName: 'Ko+Ma',
          releaseName: 'Дорога в небо (Kokokei Edit)',
          image: 'doroga_v_nebo_kokokei_edit',
        },
        {
          name: 'releases/quietud',
          artistName: 'Ilya Orange',
          releaseName: 'Quietud',
          image: 'quietud',
        },
        {
          name: 'releases/new-life',
          artistName: 'DJ HeadSick',
          releaseName: 'New Life',
          image: 'new_life',
        },
        {
          name: 'releases/shinra-banshou',
          artistName: 'HAJIME KOJIRO',
          releaseName: 'SHINRA BANSHOU',
          image: 'shinra_banshou',
        },
        {
          name: 'releases/helix',
          artistName: 'Morakh',
          releaseName: 'Helix',
          image: 'helix',
        },
        {
          name: 'releases/dog-remix-dog',
          artistName: 'Anderdog',
          releaseName: 'Dog Remix Dog',
          image: 'dog_remix_dog',
        },
        {
          name: 'releases/bosporus-acident',
          artistName: 'Raveny x Morphtables',
          releaseName: 'Bosporus Acident',
          image: 'bosporus_accident',
        },
        {
          name: 'releases/ya-bil-sputnicom-solnca',
          artistName: 'Yella Gin',
          releaseName: 'Я Был Спутником Солнца',
          image: 'yella_gin_ya_bil_sputnicom_solnca',
        },
        {
          name: 'releases/dog-eat-dog',
          artistName: 'Anderdog',
          releaseName: 'Dog Eat Dog',
          image: 'anderdog_dog_eat_dog',
        },
        {
          name: 'releases/kokokei-mandarin',
          artistName: 'Kokokei',
          releaseName: 'Mandarin',
          image: 'mandarin',
        },
        {
          name: 'releases/fields-of-domodevskaya',
          artistName: 'Kisser',
          releaseName: 'Fields of Domodevskaya',
          image: 'fields_of_domodevskaya',
        },
        {
          name: 'releases/sun-instead-of-head',
          artistName: 'Max Ananyev',
          releaseName: 'Sun Instead Of Head',
          image: 'sun_instead_of_head',
        },
        {
          name: 'releases/grounded-rectangle',
          artistName: 'Ambidextrous',
          releaseName: 'Grounded Rectangle',
          image: 'grounded_rectangle',
        },
        {
          name: 'releases/xazy',
          artistName: 'Ne Tvoy Drug',
          releaseName: 'Xazy',
          image: 'xazy',
        },
        {
          name: 'releases/doroga-v-nebo',
          artistName: 'Ko+Ma',
          releaseName: 'Дорога в небо',
          image: 'doroga_v_nebo',
        },
        {
          name: 'releases/cherta-nova',
          artistName: 'Andrey Rasputin',
          releaseName: 'Cherta-nova',
          image: 'cherta-nova',
        },
        {
          name: 'releases/anderdog-kelgoma',
          artistName: 'Anderdog',
          releaseName: 'Kelgoma',
          image: 'anderdog_kelgoma',
        },
        {
          name: 'releases/kokokei-mimoza',
          artistName: 'Kokokei',
          releaseName: 'Mimoza',
          image: 'kokokei',
        },
        {
          name: 'releases/anderdog-andrey-leto',
          artistName: 'Anderdog and Andrey Leto',
          releaseName: 'Romantic Selection',
          image: 'anderdogandreyleto',
        },
        {
          name: 'releases/morakh-limes',
          artistName: 'Morakh',
          releaseName: 'Limes',
          image: 'morakh',
        },
        {
          name: 'releases/vvvedenskaya-attempts',
          artistName: 'Vvvedenskaya',
          releaseName: 'Attempts',
          image: 'vvvedenskaya',
        },
        {
          name: 'releases/microdog-east-side',
          artistName: 'Microdog',
          releaseName: 'East Side of the Breaktown',
          image: 'microdog',
        },
        {
          name: 'releases/ambidextrous-errorism',
          artistName: 'Ambidextrous',
          releaseName: 'Errorism',
          image: 'ambidextrous_cassette_1',
        },
        {
          name: 'releases/ko-ma-real-face',
          artistName: 'Ko+Ma',
          releaseName: 'По-настоящему счастливое лицо стремится стать кругом',
          image: 'koma',
        },
        {
          name: 'releases/anderdog-sleep-paralysis',
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
  font-family: NotoSans, sans-serif !important;
  font-size: 0.8em;
  font-weight: bold;
  cursor: pointer;
}

.description:hover {
  color: #91a79d;
}

.release-image {
  width: 100%;
  height: auto;
  max-width: 300px;
  display: block;
  margin: 0 auto;
}
</style>
