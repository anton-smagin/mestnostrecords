const releases = [
  {
    name: 'releases/Evkalipt',
    artistName: 'Kokokei',
    releaseName: 'Evkalipt',
    image: 'kokokei_evkaliipt',
  },
  {
    name: 'releases/UndisclosedCircuit',
    artistName: 'Ambidextrous',
    releaseName: 'Undisclosed Circuit',
    image: 'ambidextrous_undisclosed_circuit',
  },
  {
    name: 'releases/Relikt0',
    artistName: 'Andrey Rasputin',
    releaseName: 'RELIKT-0',
    image: 'relikt_0',
  },
  {
    name: 'releases/SlowCrunchRemixes',
    artistName: 'KIKOK',
    releaseName: 'Slow Crunch remixes',
    image: 'slow_crunches_remixes',
  },
  {
    name: 'releases/RatioEtCaritas',
    artistName: 'Dubree',
    releaseName: 'Ratio et Сaritas',
    image: 'dubree_ratio_et_caritas',
  },
  {
    name: 'releases/Relikt1',
    artistName: 'Andrey Rasputin',
    releaseName: 'RELIKT-1',
    image: 'relikt_1',
  },
  {
    name: 'releases/TheWayOfTheDog',
    artistName: 'Anderdog',
    releaseName: 'The Way of the Dog',
    image: 'the_way_of_the_dog'
  },
  {
    name: 'releases/SlowCrunch',
    artistName: 'KIKOK',
    releaseName: 'Slow Crunch',
    image: 'slow_crunch'
  },
  {
    name: 'releases/ImaginedAwakenings',
    artistName: 'H. Ruine / MIKHAIL KIREEV',
    releaseName: 'Imagined / Awakenings',
    image: 'imagined_awakenings',
  },
  {
    name: 'releases/Dryoma',
    artistName: 'ВСЕСЛАВЪ',
    releaseName: 'Дрёма',
    image: 'dryoma',
  },
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
]

function normalizeArtistName(name) {
  return name.toLowerCase().replace(/\s+/g, ' ').trim()
}

function artistMatches(releaseArtist, searchName) {
  const normalizedRelease = normalizeArtistName(releaseArtist)
  const normalizedSearch = normalizeArtistName(searchName)

  // Direct match
  if (normalizedRelease === normalizedSearch) return true

  // Check if artist appears in collaboration (e.g., "Anderdog and Dessin Bizarre")
  const artistParts = normalizedRelease.split(/\s+(?:and|&|x|\/)\s+/)
  return artistParts.some(part => normalizeArtistName(part) === normalizedSearch)
}

export function useReleases() {
  function getReleasesByArtist(artistName) {
    return releases.filter(release => artistMatches(release.artistName, artistName))
  }

  function getLatestReleaseByArtist(artistName) {
    const artistReleases = getReleasesByArtist(artistName)
    // Returns first match (releases are ordered newest to oldest)
    return artistReleases[0] || null
  }

  function getAllReleases() {
    return releases
  }

  return {
    releases,
    getReleasesByArtist,
    getLatestReleaseByArtist,
    getAllReleases
  }
}
