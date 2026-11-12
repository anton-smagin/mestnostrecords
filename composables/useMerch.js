// Merch: one list for both sites (mestnostrecords.com and relief.mestnostrecords.com).
// Edit it here and both merch pages change.
//
// type: 'cassette' (also used for CDs) or 'tshirt'.
// label: 'relief' for Relief releases; Mestnost items leave it out.
// albumLink: the release page on its own label's site ('/releases/<slug>').
// imageUrl: photo; cassettes without it use /static/<cassetteId>_cassette_2.webp.
// numericPrice: price used by the cart (default 1500, which counts toward
// the "3 cassettes = 3000 ₽" deal).
const merchItems = [
  {
    id: 'relief-001',
    type: 'cassette',
    label: 'relief',
    title: 'XX22 (CD)',
    artist: 'Alexei Borisov, Anton Mobin',
    cassetteId: 'xx22_cd',
    imageUrl: '/static/relief/xx22_cd.webp',
    price: '1200 ₽',
    numericPrice: 1200,
    albumLink: '/releases/xx22'
  },
  {
    id: 31,
    type: 'cassette',
    title: 'Пазлы времени',
    artist: 'tih i radosten',
    cassetteId: 'pazly_vremeni',
    price: '1500 ₽',
    albumLink: '/releases/pazly-vremeni'
  },
  {
    id: 30,
    type: 'cassette',
    title: 'Absurdance',
    artist: 'Morphtables',
    cassetteId: 'absurdance',
    price: '1500 ₽',
    albumLink: '/releases/absurdance'
  },
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
    price: 'нет в наличии',
    albumLink: '/releases/himeri-proraba',
    outOfStock: true
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
    price: 'нет в наличии',
    albumLink: '/releases/undisclosed-circuit',
    outOfStock: true
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
    price: 'нет в наличии',
    outOfStock: true
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
    albumLink: '/releases/imagined-awakenings'
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
    price: '1500 ₽',
    albumLink: '/releases/imagine'
  },
  {
    id: 6,
    type: 'cassette',
    title: 'Veter',
    artist: 'Ne Tvoy Drug',
    cassetteId: 'veter',
    price: 'нет в наличии',
    albumLink: '/releases/veter',
    outOfStock: true
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
    price: 'нет в наличии',
    albumLink: '/releases/ya-bil-sputnicom-solnca',
    outOfStock: true
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

const MESTNOST_ORIGIN = 'https://mestnostrecords.com'
const RELIEF_ORIGIN = 'https://relief.mestnostrecords.com'

export function useMerch() {
  const { reliefSite } = useRelief()

  // Link to an item's release page from the site being built: same-site
  // links stay relative, links to the other label's site are absolute.
  function releaseHref(item) {
    if (!item.albumLink) return ''
    const isRelief = item.label === 'relief'
    if (isRelief === reliefSite) return item.albumLink
    return (isRelief ? RELIEF_ORIGIN : MESTNOST_ORIGIN) + item.albumLink
  }

  return { merchItems, releaseHref }
}
