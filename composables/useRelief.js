// Relief (Рельеф) — sublabel of Mestnost Records.
//
// The same code builds two sites:
// - mestnostrecords.com: Relief pages live under /relief (not linked yet)
// - relief.mestnostrecords.com: built with RELIEF_SITE=1, Relief pages at the root
// Every link between the two labels reads from here.

// Relief releases, newest first. Each gets a page at /relief/releases/<slug>.
// Add store/streaming links to `links` ({ name, icon, link }) when it is out.
const reliefReleases = [
  {
    slug: 'xx22',
    number: '001',
    artistName: 'Alexei Borisov, Anton Mobin',
    artistSlug: 'alexei-borisov',
    releaseName: 'XX22',
    image: '/static/relief/xx22_cover.webp',
    links: [],
    description: [
      'В 2010 году дуэт ASTMA (Алексей Борисов и Ольга Носова) совершал небольшой европейский тур, в рамках которого состоялся концерт в Париже в одном из местных заведений. Вторым проектом концерта был дуэт, одним из участников которого оказался молодой французский музыкант Антон Мобин (псевдоним). С того момента началось плотное сотрудничество с Антоном на уровне разных проектов и дуэтных коллабораций.',
      'Борисов и Мобин в свое время записали один совместный альбом, выступили в популярном парижском клубе Les Instants Chavires, который специализируется на экспериментальной музыке, приняли участие в записи альбомов других музыкантов и проектов. К сожалению, ковид разрушил дальнейшие планы, Антон уехал из Парижа в провинцию, организовывал специальную концертно/студийную площадку, затем сосредоточился на разведении цветов. Альбом ХХ22 последняя совместная работа музыкантов, выполненная в режиме онлайн. В настоящий момент к сожалению не удается установить связь с Антоном. Надеюсь он жив и здоров.',
      'В основе данного альбома лежат звуки, записанные в процессе трудовой деятельности (слесарно/столярные, строительные работы и тд.). Все это сдобрено фрагментами студийных заготовок разных лет, радио помехами, кассетными манипуляциями, голосовыми импровизациями. Основной звуковой материал предоставил Борисов, соответственно Мобин все это смонтировал и финализировал.',
    ],
  },
]

// Relief artists. Each gets a page at /relief/artists/<slug>.
const reliefArtists = [
  {
    slug: 'alexei-borisov',
    name: 'Alexei Borisov',
    photo: '/static/relief/alexei_borisov.jpg',
  },
]

export function useRelief() {
  const reliefSite = Boolean(useRuntimeConfig().public.reliefSite)

  // Path of a Relief page, e.g. reliefPath('/about') → '/relief/about' (or '/about' on the Relief site)
  const reliefPath = path => (reliefSite ? path || '/' : `/relief${path}`)
  const isReliefRoute = path => reliefSite || path === '/relief' || path.startsWith('/relief/')
  const reliefUrl = reliefPath('')
  const isExternal = false
  const mestnostUrl = reliefSite ? 'https://mestnostrecords.com' : '/'

  return { reliefSite, reliefUrl, isExternal, reliefPath, isReliefRoute, mestnostUrl, reliefReleases, reliefArtists }
}
