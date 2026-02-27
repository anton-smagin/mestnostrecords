<template>
  <div class="dj-slon-himeri-proraba w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/dj_slon_himeri_proraba_cover.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">DJ Slon</h5>
          <h5 class="text-white"><span>Химеры прораба</span></h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-12 col-lg-4 col-md-6 mt-5 text-nowrap"
            >
              <ClientOnly>
                <font-awesome-icon
                  :icon="['fab', link.icon]"
                  class="text-white"
                />
              </ClientOnly>
              <a :href="link.link" target="_blank" class="text-white social">
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12 text-center">
        <NuxtImg
          src="/static/dj_slon_face.webp"
          alt="DJ Slon"
          style="max-width: 70%; height: auto; display: block; margin: 0 auto;"
          format="webp"
          :quality="85"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-6 offset-md-2 bandcamp-player">
        <iframe
          style="border: 0; width: 100%; height: 120px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=3645788028/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Никнейм новоприбывшего на «Местность» артиста под стать его величине и влиянию. Петербуржец Олег Азелицкий aka DJ Slon — пионер электронной сцены, один из первых российских диск-жокеев, крутивший пластинки в андеграунде северной столицы в начале 90-х — кстати сказать, именно он организовал там легендарный питерский сквот на Обводном.
          </p>
          <p>
            DJ Slon был резидентом того самого техно-клуба «Тоннель», ставшего отправной точкой и амбассадором отечественной рейв-культуры. Впервые встал за его вертушки в 1993 году, побывал арт-директором и остался навсегда. Там, в клубе «Тоннель» и в лице DJ Slon слово «диджей» приобрело профессиональный статус, авторские очертания, заблестело престижем. Для Олега Азелицкого профессия диджея — это образ жизни, который нельзя изменить, какие бы времена ни настали для клубной культуры. Да и трудно поверить в то, что можно забыть пережитое им на гребне рейв-волны: первое выступление его, русского диджея, на берлинском Love Parade, первые туры по Европе и лайвы в легендарных клубах Ultraschall и Tresor, первый российский техно-винил, первые просветительские программы на радио, посвященные отечественной электронике.
          </p>
          <p>
            С 1994 года DJ Slon руководит жизнью лейбла Underground Experience, положившему начало творчеству знаковых российских электронщиков. Свой опыт он систематизировал в культовой книге «Рейволюция», вышедшей в 2007 году — наряду с Ником Завриевым aka Ambidextrous, автором подкаста «Планетроника», его можно назвать вторым историком электронной сцены России, задокументировавшим этапы ее зарождения и становления.
          </p>
          <p>
            Новый альбом DJ Slon «Химеры прораба» объединен особым нарративом — это хроника одного простого человека, прораба, который идет в клуб, играет в казино, хандрит, удивляется красоте природы. В общем, грезит, пробудившись (или окончательно пропав) в финале. Здесь много характерного для автора эйсида, приятной бездушности аутентичного детройтского техно, даже минимализма и какой-то лапидарности, благодаря которой легко можно воссоздать образ «главного героя». При этом DJ Slon умудряется сохранить особую, местную идентичность, в том числе за счет многообразия тембров, среди которых флешбэком отзываются звуки советской космической кино-фантастики.
          </p>
          <p>
            Автор написал этот альбом в 2025 году под впечатлением от поездок по России и такой разной жизни ее глубинок. «Как и все мои альбомы, «Химеры прораба» отражают окружающую меня реальность», — говорит Олег. Характерным для его творчества экспериментальным языком ему удалось написать необычную «балабановскую» историю, глубоко понятную всем нам и неразрывно связанную именно с нашей, родной и такой окаянной местностью.
          </p>
          <p class="shadowed mt-5">
            музыка Олег Азелицкий | Dj Slon<br>
            сведение Олег Азелицкий, Андрей Барбекю, студия Underground Experience<br>
            мастеринг, продюсирование, треклист: Константин Колычев | Kokokei<br>
            дизайн обложки и кассеты Марго Кобозева | morgoblin
            Пресс-релиз: Соня Шпильберг
          </p>
        </div>
        <div class="row mb-5 mt-5">
          <div class="col-md-12">
            <div class="col-12 text-center mb-5">
              <NuxtImg
                src="/static/dj_slon_cassette_2.webp"
                alt="DJ Slon Химеры прораба cassette"
                style="max-width: 70%; height: auto; display: block; margin: 0 auto;"
                format="webp"
                :quality="85"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-5 mt-5">
        <div class="col-md-12">
          <div class="description text-white mb-5">
            <p class="mt-5">
              The nickname of the newly arrived artist on Mestnost matches his stature and influence. St. Petersburg native Oleg Azelitsky, aka DJ Slon, is a pioneer of the electronic scene and one of the first Russian DJs, spinning records in the underground of the northern capital in the early '90s. Notably, he was the organizer of the legendary St. Petersburg squat on Obvodny Canal.
            </p>
            <p>
              DJ Slon was a resident of the iconic techno club "Tunnel," which became the starting point and ambassador of Russian rave culture. He first stood behind its turntables in 1993, later became its art director, and remained forever associated with it. In "Tunnel," and through DJ Slon himself, the word "DJ" gained professional status, authorial identity, and prestige. For Oleg Azelitsky, being a DJ is a way of life that cannot be changed, no matter what times club culture goes through. It's hard to imagine forgetting what he experienced at the crest of the rave wave: his first performance as a Russian DJ at Berlin's Love Parade, his first European tours and live sets in the legendary clubs Ultraschall and Tresor, the first Russian techno vinyl release, and the first educational radio programs dedicated to domestic electronic music.
            </p>
            <p>
              Since 1994, DJ Slon has been steering the life of the Underground Experience label, which launched the careers of many significant Russian electronic artists. He systematized his experience in the cult book "Ravevolution," published in 2007. Alongside Nick Zavriev aka Ambidextrous, author of the "Planetroika" podcast, he can be considered one of the key historians of Russia's electronic scene, documenting its origins and development.
            </p>
            <p>
              DJ Slon's new album "Химеры прораба" (Foreman's Chimeras) is united by a distinct narrative — a chronicle of an ordinary man, a foreman, who goes to a club, plays at a casino, feels melancholic, marvels at the beauty of nature. In short, he dreams, awakening (or finally disappearing) in the finale. The album features plenty of the artist's characteristic acid sound, the pleasing soullessness of authentic Detroit techno, even minimalism and a certain lapidary quality that makes it easy to reconstruct the image of the "main character." At the same time, DJ Slon manages to preserve a special local identity, partly through a rich variety of timbres — among them echoes of Soviet space sci-fi cinema, like flashbacks.
            </p>
            <p>
              The author wrote this album in 2025, inspired by his travels across Russia and the diverse lives of its provinces. "Like all my albums, 'Химеры прораба' reflects the reality surrounding me," says Oleg. Through his characteristic experimental language, he has created an unusual "Balabanov-style" story — deeply understandable to all of us and inseparably connected to our own, native, and somewhat cursed locality.
            </p>
            <p class="shadowed mt-5">
              music by Oleg Azelitsky | Dj Slon<br>
              mixing by Oleg Azelitsky, Andrey Barbecue, Underground Experience studio<br>
              mastering, producing, tracklist by Konstantin Kolychev | Kokokei<br>
              cover and cassette design by Margo Kobozeva | morgoblin
              press release by Sonya Spielberg
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useReleaseSeo } from '~/composables/useReleaseSeo'

export default {
  name: 'HimeriProraba',
  setup() {
    useReleaseSeo()
  },
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/--5',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/%D1%85%D0%B8%D0%BC%D0%B5%D1%80%D1%8B-%D0%BF%D1%80%D0%BE%D1%80%D0%B0%D0%B1%D0%B0/1877224662',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/3yQ4jwUsblPpHZcdH34Ru8',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/40686502',
        },
        {
          name: 'vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000751642_26751642_fc0acb41567a5695b1',
        },
      ],
    }
  },
}
</script>

<style scoped>
.dj-slon-himeri-proraba {
  background-color: black;
  background-image: none;
}

h1 {
  color: white;
}

.description {
  margin: 0 15%;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  font-family: NotoSans, sans-serif;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.08em;
  }
}

.social {
  font-size: 1em;
  text-decoration: none;
  margin-left: 0.5em;
  vertical-align: middle;
}

.store-link {
  display: inline-block;
  margin-left: 0.5em;
  vertical-align: middle;
  letter-spacing: 0.2em;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
}

.release-name {
  font-weight: bold;
}

.fill {
  min-height: 90vh;
  height: 100%;
}

.shadowed {
  color: lightgrey;
  font-size: 0.8em;
}

</style>
