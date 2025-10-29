<template>
  <div class="merch-page">
    <div class="container-fluid">
      <div class="row p-5">
        <div class="col-12">
          <h1 class="text-white text-center mb-5">Мерч</h1>
        </div>
      </div>
      <div class="row p-5">
        <TShirtItem
          v-for="tshirt in tshirts"
          :key="tshirt.id"
          :title="tshirt.title"
          :description="tshirt.description"
          :image-url="tshirt.imageUrl"
          :price="tshirt.price"
          :out-of-stock="tshirt.outOfStock"
        />
        <MerchItem
          v-for="item in sortedMerchItems"
          :key="item.id"
          :title="item.title"
          :artist="item.artist"
          :cassette-id="item.cassetteId"
          :price="item.price"
          :order-link="item.orderLink"
          :album-link="item.albumLink"
          :out-of-stock="item.outOfStock"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MerchPage',
  components: {
    MerchItem: () => import('~/components/MerchItem.vue'),
    TShirtItem: () => import('~/components/TShirtItem.vue')
  },
  data() {
    return {
      tshirts: [
        {
          id: 't1',
          title: 'Местность dubree',
          description: [
            'футболка gildan hammer белая',
            '100% хлопок',
            'принт на спине 28х28см с обложкой альбома',
            'размеры S/M/L/XL'
          ],
          imageUrl: '/static/dubree_t_shirt.webp',
          price: '2500 ₽',
          outOfStock: false
        },
        {
          id: 't2',
          title: 'Местность река reflect',
          description: [
            'футболка gildan hammer черная',
            '100% хлопок',
            'принт на светоотражающей пленке',
            'размеры S/M/L/XL'
          ],
          imageUrl: '/static/mestnost_t_shirt.webp',
          price: '2500 ₽',
          outOfStock: false
        }
      ],
      merchItems: [
        {
          id: 23,
          title: 'Ratio et Сaritas',
          artist: 'Dubree',
          cassetteId: 'ratio_et_caritas',
          price: '1500 ₽',
          albumLink: '/releases/RatioEtCaritas'
        },
        {
          id: 21,
          title: 'Relikt 1',
          artist: 'Andrey Rasputin',
          cassetteId: 'relikt_1',
          price: '1500 ₽',
          albumLink: '/releases/Relikt1'
        },
        {
          id: 19,
          title: 'The Way of the Dog',
          artist: 'Anderdog',
          cassetteId: 'the_way_of_the_dog',
          price: 'нет в наличии',
          albumLink: '/releases/TheWayOfTheDog',
          outOfStock: true
        },
        {
          id: 18,
          title: 'Slow Crunch',
          artist: 'KIKOK',
          cassetteId: 'slow_crunch',
          price: 'нет в наличии',
          albumLink: '/releases/SlowCrunch',
          outOfStock: true
        },
        {
          id: 22,
          title: 'Imagined / Awakenings',
          artist: 'H. Ruine / MIKHAIL KIREEV',
          cassetteId: 'imagined_awakenings',
          price: '1500 ₽',
          albumLink: 'releases/ImaginedAwakenings'
        },
        {
          id: 7,
          title: 'Дрёма',
          artist: 'ВСЕСЛАВЪ',
          cassetteId: 'vseslav',
          price: 'нет в наличии',
          albumLink: '/releases/Dryoma',
          outOfStock: true
        },
        {
          id: 10,
          title: 'Anderdog Bizarre',
          artist: 'Anderdog',
          cassetteId: 'anderdog_bizarre',
          price: '1500 ₽',
          albumLink: '/releases/Imagine'
        },
        {
          id: 6,
          title: 'Veter',
          artist: 'Ne Tvoy Drug',
          cassetteId: 'veter',
          price: '1500 ₽',
          albumLink: '/releases/Veter'
        },
        {
          id: 15,
          title: 'Ko+Ma & Kokokei - Дорога в небо',
          artist: 'Ko+Ma & Kokokei',
          cassetteId: 'koma_doroga_v_nebo',
          price: '1500 ₽',
          albumLink: '/releases/KoMaKokokeiDorogaVNebo'
        },
        {
          id: 5,
          title: 'Quietud',
          artist: 'Ilya Orange',
          cassetteId: 'quietud',
          price: '1500 ₽',
          albumLink: '/releases/Quietud'
        },
        {
          id: 17,
          title: 'Shinra Banshou',
          artist: 'HAJIME KOJIRO',
          cassetteId: 'shinra_banshou',
          price: 'нет в наличии',
          albumLink: '/releases/ShinraBanshou',
          outOfStock: true
        },
        {
          id: 14,
          title: 'Helix',
          artist: 'Morakh',
          cassetteId: 'helix_cassette',
          price: 'нет в наличии',
          albumLink: '/releases/Helix',
          outOfStock: true
        },
        {
          id: 12,
          title: 'Bosporus Accident',
          artist: 'Raveny x Morphtables',
          cassetteId: 'bosporus_accident',
          price: '1500 ₽',
          albumLink: '/releases/BosporusAcident'
        },
        {
          id: 20,
          title: 'Я был спутником солнца',
          artist: 'Yella Gin',
          cassetteId: 'yella_gin',
          price: '1500 ₽',
          albumLink: '/releases/YaBilSputnicomSolnca'
        },
        {
          id: 2,
          title: 'Mandarin',
          artist: 'Kokokei',
          cassetteId: 'mandarin',
          price: 'нет в наличии',
          albumLink: '/releases/KokokeiMandarin',
          outOfStock: true
        },
        {
          id: 13,
          title: 'Fields of Domodedovskaya',
          artist: 'Kisser',
          cassetteId: 'fields_of_domodedovskaya',
          price: 'нет в наличии',
          albumLink: '/releases/FieldsOfDomodevskaya',
          outOfStock: true
        },
        {
          id: 16,
          title: 'Sun Instead of Head',
          artist: 'Max Ananyev',
          cassetteId: 'max_ananyev',
          price: '1500 ₽',
          albumLink: '/releases/SunInsteadOfHead'
        },
        {
          id: 1,
          title: 'Grounded Rectangle',
          artist: 'Ambidextrous',
          cassetteId: 'ambidextrous',
          price: '1500 ₽',
          albumLink: '/releases/GroundedRectangle'
        },
        {
          id: 9,
          title: 'Xazy',
          artist: 'Ne Tvoy Drug',
          cassetteId: 'xazy',
          price: '1500 ₽',
          albumLink: '/releases/Xazy'
        },
        {
          id: 3,
          title: 'Mimoza',
          artist: 'Kokokei',
          cassetteId: 'mimoza',
          price: 'нет в наличии',
          albumLink: '/releases/KokokeiMimoza',
          outOfStock: true
        },
        {
          id: 11,
          title: 'Romantic Selection',
          artist: 'Anderdog & Andrey Leto',
          cassetteId: 'anderdog_leto',
          price: 'нет в наличии',
          albumLink: '/releases/AnderdogAndreyLeto',
          outOfStock: true
        },
        {
          id: 4,
          title: 'Limes',
          artist: 'Morakh',
          cassetteId: 'morakh',
          price: '1500 ₽',
          albumLink: '/releases/MorakhLimes'
        },
        {
          id: 8,
          title: 'Vvvedenskaya Attempts',
          artist: 'Vvvedenskaya',
          cassetteId: 'vvvedenskaya',
          price: '1500 ₽',
          albumLink: '/releases/VvvedenskayaAttempts'
        }
      ]
    }
  },
  computed: {
    sortedMerchItems() {
      return this.merchItems
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
