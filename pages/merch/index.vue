<template>
  <div class="merch-page">
    <div class="container-fluid">
      <div class="row p-5">
        <div class="col-12">
          <h1 class="text-white text-center mb-5">Мерч</h1>
        </div>
      </div>
      <div class="row p-5">
        <template v-for="item in sortedMerchItems" :key="item.id">
          <MerchItem
            v-if="item.type === 'cassette'"
            :title="item.title"
            :artist="item.artist"
            :cassette-id="item.cassetteId"
            :price="item.price"
            :numeric-price="item.numericPrice || 1500"
            :order-link="item.orderLink"
            :album-link="item.albumLink"
            :out-of-stock="item.outOfStock"
          />
          <TShirtItem
            v-if="item.type === 'tshirt'"
            :title="item.title"
            :description="item.description"
            :image-url="item.imageUrl"
            :price="item.price"
            :out-of-stock="item.outOfStock"
          />
        </template>
      </div>
    </div>

    <CartBar @checkout="showCheckout = true" />
    <CartCheckoutModal :show="showCheckout" @close="showCheckout = false" />
  </div>
</template>

<script>
export default {
  name: 'MerchPage',
  components: {
    MerchItem: () => import('~/components/MerchItem.vue'),
    TShirtItem: () => import('~/components/TShirtItem.vue'),
    CartBar: () => import('~/components/CartBar.vue'),
    CartCheckoutModal: () => import('~/components/CartCheckoutModal.vue')
  },
  data() {
    return {
      showCheckout: false,
      merchItems: [
        {
          id: 27,
          type: 'cassette',
          title: 'Полудрёма',
          artist: 'ВСЕСЛАВЪ',
          cassetteId: 'poludryoma',
          price: '1500 ₽',
          albumLink: '/releases/poludryoma'
        },
        {
          id: 26,
          type: 'cassette',
          title: 'Химеры прораба',
          artist: 'DJ Slon',
          cassetteId: 'dj_slon',
          price: '1500 ₽',
          albumLink: '/releases/himeri-proraba'
        },
        {
          id: 25,
          type: 'cassette',
          title: 'Evkalipt',
          artist: 'Kokokei',
          cassetteId: 'evkalipt',
          price: '1500 ₽',
          albumLink: '/releases/evkalipt'
        },
        {
          id: 24,
          type: 'cassette',
          title: 'Undisclosed Circuit',
          artist: 'Ambidextrous',
          cassetteId: 'ambidextrous_undisclosed_circuit',
          price: '1500 ₽',
          albumLink: '/releases/undisclosed-circuit'
        },
        {
          id: 't1',
          type: 'tshirt',
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
          type: 'tshirt',
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
        },
        {
          id: 23,
          type: 'cassette',
          title: 'Ratio et Сaritas',
          artist: 'Dubree',
          cassetteId: 'ratio_et_caritas',
          price: 'нет в наличии',
          albumLink: '/releases/ratio-et-caritas',
          outOfStock: true
        },
        {
          id: 21,
          type: 'cassette',
          title: 'Relikt 1',
          artist: 'Andrey Rasputin',
          cassetteId: 'relikt_1',
          price: '1500 ₽',
          albumLink: '/releases/relikt-1'
        },
        {
          id: 19,
          type: 'cassette',
          title: 'The Way of the Dog',
          artist: 'Anderdog',
          cassetteId: 'the_way_of_the_dog',
          price: 'нет в наличии',
          albumLink: '/releases/the-way-of-the-dog',
          outOfStock: true
        },
        {
          id: 18,
          type: 'cassette',
          title: 'Slow Crunch',
          artist: 'KIKOK',
          cassetteId: 'slow_crunch',
          price: 'нет в наличии',
          albumLink: '/releases/slow-crunch',
          outOfStock: true
        },
        {
          id: 22,
          type: 'cassette',
          title: 'Imagined / Awakenings',
          artist: 'H. Ruine / MIKHAIL KIREEV',
          cassetteId: 'imagined_awakenings',
          price: '1500 ₽',
          albumLink: 'releases/imagined-awakenings'
        },
        {
          id: 7,
          type: 'cassette',
          title: 'Дрёма',
          artist: 'ВСЕСЛАВЪ',
          cassetteId: 'vseslav',
          price: 'нет в наличии',
          albumLink: '/releases/dryoma',
          outOfStock: true
        },
        {
          id: 10,
          type: 'cassette',
          title: 'Anderdog Bizarre',
          artist: 'Anderdog',
          cassetteId: 'anderdog_bizarre',
          price: 'нет в наличии',
          albumLink: '/releases/imagine',
          outOfStock: true
        },
        {
          id: 6,
          type: 'cassette',
          title: 'Veter',
          artist: 'Ne Tvoy Drug',
          cassetteId: 'veter',
          price: '1500 ₽',
          albumLink: '/releases/veter'
        },
        {
          id: 15,
          type: 'cassette',
          title: 'Ko+Ma & Kokokei - Дорога в небо',
          artist: 'Ko+Ma & Kokokei',
          cassetteId: 'koma_doroga_v_nebo',
          price: '1500 ₽',
          albumLink: '/releases/ko-ma-kokokei-doroga-v-nebo'
        },
        {
          id: 5,
          type: 'cassette',
          title: 'Quietud',
          artist: 'Ilya Orange',
          cassetteId: 'quietud',
          price: '1500 ₽',
          albumLink: '/releases/quietud'
        },
        {
          id: 17,
          type: 'cassette',
          title: 'Shinra Banshou',
          artist: 'HAJIME KOJIRO',
          cassetteId: 'shinra_banshou',
          price: 'нет в наличии',
          albumLink: '/releases/shinra-banshou',
          outOfStock: true
        },
        {
          id: 14,
          type: 'cassette',
          title: 'Helix',
          artist: 'Morakh',
          cassetteId: 'helix_cassette',
          price: 'нет в наличии',
          albumLink: '/releases/helix',
          outOfStock: true
        },
        {
          id: 12,
          type: 'cassette',
          title: 'Bosporus Accident',
          artist: 'Raveny x Morphtables',
          cassetteId: 'bosporus_accident',
          price: '1500 ₽',
          albumLink: '/releases/bosporus-acident'
        },
        {
          id: 20,
          type: 'cassette',
          title: 'Я был спутником солнца',
          artist: 'Yella Gin',
          cassetteId: 'yella_gin',
          price: '1500 ₽',
          albumLink: '/releases/ya-bil-sputnicom-solnca'
        },
        {
          id: 29,
          type: 'cassette',
          title: 'Dog Eat Dog',
          artist: 'Anderdog',
          cassetteId: 'dog_eat_dog',
          price: 'нет в наличии',
          albumLink: '/releases/dog-eat-dog',
          outOfStock: true
        },
        {
          id: 2,
          type: 'cassette',
          title: 'Mandarin',
          artist: 'Kokokei',
          cassetteId: 'mandarin',
          price: 'нет в наличии',
          albumLink: '/releases/kokokei-mandarin',
          outOfStock: true
        },
        {
          id: 13,
          type: 'cassette',
          title: 'Fields of Domodedovskaya',
          artist: 'Kisser',
          cassetteId: 'fields_of_domodedovskaya',
          price: 'нет в наличии',
          albumLink: '/releases/fields-of-domodevskaya',
          outOfStock: true
        },
        {
          id: 16,
          type: 'cassette',
          title: 'Sun Instead of Head',
          artist: 'Max Ananyev',
          cassetteId: 'max_ananyev',
          price: 'нет в наличии',
          albumLink: '/releases/sun-instead-of-head',
          outOfStock: true
        },
        {
          id: 1,
          type: 'cassette',
          title: 'Grounded Rectangle',
          artist: 'Ambidextrous',
          cassetteId: 'ambidextrous',
          price: 'нет в наличии',
          albumLink: '/releases/grounded-rectangle',
          outOfStock: true
        },
        {
          id: 9,
          type: 'cassette',
          title: 'Xazy',
          artist: 'Ne Tvoy Drug',
          cassetteId: 'xazy',
          price: '1500 ₽',
          albumLink: '/releases/xazy'
        },
        {
          id: 28,
          type: 'cassette',
          title: 'Cherta-nova',
          artist: 'Andrey Rasputin',
          cassetteId: 'cherta_nova',
          price: 'нет в наличии',
          albumLink: '/releases/cherta-nova',
          outOfStock: true
        },
        {
          id: 3,
          type: 'cassette',
          title: 'Mimoza',
          artist: 'Kokokei',
          cassetteId: 'mimoza',
          price: 'нет в наличии',
          albumLink: '/releases/kokokei-mimoza',
          outOfStock: true
        },
        {
          id: 11,
          type: 'cassette',
          title: 'Romantic Selection',
          artist: 'Anderdog & Andrey Leto',
          cassetteId: 'anderdog_leto',
          price: 'нет в наличии',
          albumLink: '/releases/anderdog-andrey-leto',
          outOfStock: true
        },
        {
          id: 4,
          type: 'cassette',
          title: 'Limes',
          artist: 'Morakh',
          cassetteId: 'morakh',
          price: 'нет в наличии',
          albumLink: '/releases/morakh-limes',
          outOfStock: true
        },
        {
          id: 8,
          type: 'cassette',
          title: 'Vvvedenskaya Attempts',
          artist: 'Vvvedenskaya',
          cassetteId: 'vvvedenskaya',
          price: 'нет в наличии',
          albumLink: '/releases/vvvedenskaya-attempts',
          outOfStock: true
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
  padding-bottom: 80px;
}

h1 {
  font-family: NotoSans, sans-serif;
  font-weight: bold;
  letter-spacing: 0.1em;
}

.p-5 {
  justify-content: space-around;
}
</style>
