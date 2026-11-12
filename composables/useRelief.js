// Relief (Рельеф) — sublabel of Mestnost Records.
//
// The same code builds two sites:
// - mestnostrecords.com: Relief pages live under /relief (not linked yet)
// - relief.mestnostrecords.com: built with RELIEF_SITE=1, Relief pages at the root
// Every link between the two labels reads from here.

// Relief releases, newest first. Each gets a page at /relief/releases/<slug>.
// Add store/streaming links to `links` ({ name, icon, link }) when it is out.
// `description` is a list of paragraphs; an entry { photo, alt } puts a photo
// between paragraphs (photo is a base path: <photo>.webp and <photo>_600.webp).
const reliefReleases = [
  {
    slug: 'xx22',
    number: '001',
    artistName: 'Alexei Borisov, Anton Mobin',
    artistSlug: 'alexei-borisov',
    artistSlugs: ['alexei-borisov', 'anton-mobin'],
    releaseName: 'XX22',
    image: '/static/relief/xx22_cover.webp',
    links: [
      {
        name: 'Yandex',
        icon: 'yandex',
        link: 'https://music.yandex.com/album/44612572',
      },
      {
        name: 'Vk',
        icon: 'vk',
        link: 'https://vk.ru/music/playlist/-2000765895_29765895_213c1321792669ac53',
      },
    ],
    description: [
      { photo: '/static/relief/borisov_face_relief', alt: 'Алексей Борисов' },
      'Алексей Борисов хорошо известен как представитель российской авангардной сцены — музыкант, исследователь звука, участник легендарных советских групп «Центр» и «Ночной проспект». С французским саунд-артистом Антоном Мобеном его связал случай. В 2010 году во время гастролей с проектом ASTMA Борисов ездил по Европе, на одной из парижских андеграундных сцен вместе с ним выступал местный музыкант Антон Мобен — импровизатор, бас-гитарист, с 2000-х звуковой экспериментатор, создатель сложных электроакустических инструментов и неутомимый радиопродюсер. Авторы познакомились, заинтересовались работами друг друга и тут же решили начать сотрудничать. Так у Борисова и Мобена сложился плодотворный дуэт, а Мобен хорошо известен как раз своими дуэтными коллаборациями — среди его соавторов, например, выступили поэт и мультимедиахудожник Брайан Льюис Сондерс, вокалист Dead Kennedys Джелло Биафра и легендарный американский саксофонист Сонни Симмонс. На уровень музыкальной инженерии Мобен взобрался в том числе благодаря работе в арт-резиденции D. I. Y. FabLab Access Space в Шеффилде при поддержке Университета Лидса и Лондонского музея науки. Он зарекомендовал себя не просто как музыкант, но как исследователь и ученый, в 2016 году для этого он основал лейбл Middle Eight Recordings, чтобы сохранить и документировать свои работы в области экспериментальной лютневой музыки и создания инструментов. Также Антон работал в жанре радиоспектакля, продюсировал целые серии собственных программ, среди которых, в том числе проект на Radio Libertaire «Радио Тисто», которое вещало из клиники для душевнобольных, а ведущими выступали дети больные аутизмом.',
      { photo: '/static/relief/anton_mobin_face_relief', alt: 'Антон Мобен' },
      'После роковой встречи Борисов и Мобен выступили в популярном парижском клубе Les Instants Chavires, специализирующимся на экспериментальной электронике, приняли участие в записи альбомов авангардных музыкантов и дали жизнь нескольким необычным проектам. Главное — они записали совместный альбом ХХ22, в основу шести треков которого легли звуки, записанные в процессе некоей трудовой деятельности — в основном это слесарно-столярные и строительные работы. Все это сдобрено фрагментами студийных заготовок обоих авторов разных лет, радиопомехами, кассетными манипуляциями, звуками изобретенных Мобеном инструментов и голосовыми импровизациями. Свои эксперименты музыканты проводили в режиме онлайн, придерживаясь убеждения в том, что каждый звук живет один раз. Большую часть звуковой основы для альбома предоставил Борисов, Мобен же смонтировал и финализировал материал к весне 2022 года.',
      '«В настоящий момент, к сожалению, мне не удается установить связь с Антоном, надеюсь он жив и здоров», — говорит Борисов. Да, все дело в том, что Антон Мобен взял и стал музыкантом-призраком. В момент наступления эпидемии ковида он уехал в деревню, чтобы сосредоточиться на разведении цветов, а в течение последующих двух лет прекратил всю активность в сети, заморозил блоги и релизы. Еще в 2010 году Антон изъявил желание ограничить онлайн-деятельность, в первую очередь это касалось его «поспешных» релизов. Переход Мобена на сугубо физические носители поддержали десятки лейблов в разных странах, к счастью в сети все еще можно найти записи с его собственного лейбла Middle Eight Recordings и работы, сделанные с 2000 по 2010 годы в рамках работы с проектом H.A.K. Lo-Fi Record. С выходом ХХ22 мы получаем возможность познакомиться с одной из последних известных работ Мобена, будем надеяться, что он и сам ее услышит и подумает: не вернуться ли. Антон, привет!',
    ],
  },
]

// Relief artists. Each gets a page at /relief/artists/<slug>.
const reliefArtists = [
  {
    slug: 'alexei-borisov',
    name: 'Alexei Borisov',
    photo: '/static/relief/borisov_face_relief.webp',
  },
  {
    slug: 'anton-mobin',
    name: 'Anton Mobin',
    photo: '/static/relief/anton_mobin_face_relief.webp',
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
