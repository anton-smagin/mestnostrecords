<template>
  <div class="merch-page">
    <div class="container-fluid">
      <div class="row p-5">
        <div class="col-12">
          <h1 class="text-white text-center mb-5">Мерч</h1>
        </div>
      </div>
      <div class="row p-5">
        <MerchItem
          v-for="item in sortedMerchItems"
          :key="item.id"
          :title="item.title"
          :artist="item.artist"
          :cassette-id="item.cassetteId"
          :price="item.price"
          :order-link="item.orderLink"
          :album-link="item.albumLink"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MerchPage',
  components: {
    MerchItem: () => import('~/components/MerchItem.vue')
  },
  data() {
    return {
      merchItems: [
        {
          id: 1,
          title: 'Grounded Rectangle',
          artist: 'Ambidextrous',
          cassetteId: 'ambidextrous',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/grounded-rectangle',
          albumLink: '/releases/GroundedRectangle'
        },
        {
          id: 2,
          title: 'Mandarin',
          artist: 'Kokokei',
          cassetteId: 'mandarin',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/mandarin',
          albumLink: '/releases/KokokeiMandarin'
        },
        {
          id: 3,
          title: 'Mimoza',
          artist: 'Kokokei',
          cassetteId: 'mimoza',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/mimoza',
          albumLink: '/releases/KokokeiMimoza'
        },
        {
          id: 4,
          title: 'Morakh Limes',
          artist: 'Morakh',
          cassetteId: 'morakh',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/morakh-limes',
          albumLink: '/releases/MorakhLimes'
        },
        {
          id: 5,
          title: 'Quietud',
          artist: 'Ilya Orange',
          cassetteId: 'quietud',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/quietud',
          albumLink: '/releases/Quietud'
        },
        {
          id: 6,
          title: 'Veter',
          artist: 'Ne Tvoy Drug',
          cassetteId: 'veter',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/veter',
          albumLink: '/releases/Veter'
        },
        {
          id: 7,
          title: 'Дрёма',
          artist: 'ВСЕСЛАВЪ',
          cassetteId: 'vseslav',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/dryoma',
          albumLink: '/releases/Dryoma'
        },
        {
          id: 8,
          title: 'Vvvedenskaya Attempts',
          artist: 'Vvvedenskaya',
          cassetteId: 'vvvedenskaya',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/vvvedenskaya-attempts',
          albumLink: '/releases/VvvedenskayaAttempts'
        },
        {
          id: 9,
          title: 'Xazy',
          artist: 'Ne Tvoy Drug',
          cassetteId: 'xazy',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/xazy',
          albumLink: '/releases/Xazy'
        },
        {
          id: 10,
          title: 'Anderdog Bizarre',
          artist: 'Anderdog',
          cassetteId: 'anderdog_bizarre',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/anderdog-bizarre',
          albumLink: '/releases/Imagine'
        },
        {
          id: 11,
          title: 'Anderdog & Andrey Leto',
          artist: 'Anderdog & Andrey Leto',
          cassetteId: 'anderdog_leto',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/anderdog-andrey-leto',
          albumLink: '/releases/AnderdogAndreyLeto'
        },
        {
          id: 12,
          title: 'Bosporus Accident',
          artist: 'Raveny x Morphtables',
          cassetteId: 'bosporus_accident',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/bosporus-accident',
          albumLink: '/releases/BosporusAcident'
        },
        {
          id: 13,
          title: 'Fields of Domodedovskaya',
          artist: 'Kisser',
          cassetteId: 'fields_of_domodedovskaya',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/fields-of-domodedovskaya',
          albumLink: '/releases/FieldsOfDomodevskaya'
        },
        {
          id: 14,
          title: 'Helix',
          artist: 'Morakh',
          cassetteId: 'helix_cassette',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/helix',
          albumLink: '/releases/Helix'
        },
        {
          id: 15,
          title: 'Ko+Ma & Kokokei - Дорога в небо',
          artist: 'Ko+Ma & Kokokei',
          cassetteId: 'koma_doroga_v_nebo',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/koma-kokokei-doroga-v-nebo',
          albumLink: '/releases/KoMaKokokeiDorogaVNebo'
        },
        {
          id: 16,
          title: 'Sun Instead of Head',
          artist: 'Max Ananyev',
          cassetteId: 'max_ananyev',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/sun-instead-of-head',
          albumLink: '/releases/SunInsteadOfHead'
        },
        {
          id: 17,
          title: 'Shinra Banshou',
          artist: 'HAJIME KOJIRO',
          cassetteId: 'shinra_banshou',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/shinra-banshou',
          albumLink: '/releases/ShinraBanshou'
        },
        {
          id: 18,
          title: 'Slow Crunch',
          artist: 'KIKOK',
          cassetteId: 'slow_crunch',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/slow-crunch',
          albumLink: '/releases/SlowCrunch'
        },
        {
          id: 19,
          title: 'The Way of the Dog',
          artist: 'Anderdog',
          cassetteId: 'the_way_of_the_dog',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/the-way-of-the-dog',
          albumLink: '/releases/TheWayOfTheDog'
        },
        {
          id: 20,
          title: 'Я был спутником солнца',
          artist: 'Yella Gin',
          cassetteId: 'yella_gin',
          price: '1500 ₽',
          orderLink: 'https://mestnost.bandcamp.com/album/ya-bil-sputnicom-solnca',
          albumLink: '/releases/YaBilSputnicomSolnca'
        }
      ]
    }
  },
  computed: {
    sortedMerchItems() {
      return this.merchItems.sort((a, b) => a.artist.localeCompare(b.artist) || a.title.localeCompare(b.title))
    }
  }
}
</script>

<style scoped>
.merch-page {
  background-color: black;
  min-height: 100vh;
}

h1 {
  font-family: Acrom, sans-serif;
  font-weight: bold;
  letter-spacing: 0.1em;
}

.p-5 {
  justify-content: space-around;
}
</style>
