<template>
  <div class="absurdance w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/absurdance.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Morphtables</h5>
          <h5 class="text-white"><span>Absurdance</span></h5>
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
    <div class="row">
      <div class="col-md-12 mb-5">
        <NuxtImg
          src="/static/absurdance_photo_1.webp"
          alt="Morphtables"
          style="max-width: 50%; height: auto;"
          format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-6 offset-md-2 bandcamp-player">
        <iframe
          style="border: 0; width: 100%; height: 120px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=3739259997/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
          seamless
          title="Absurdance by Morphtables"
        ></iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Альбом Absurdance от музыканта из Тюмени Morphtables — это буйная нинтендо-вечеринка, куда можно придти в жабо, сесть за детский синтезатор Casio и сыграть симфонию Шостаковича.
          </p>
          <p>
            Павел и правда звучит уникально, потому что его музыку легко увидеть. Визуальная составляющая в творчестве Morphtables — момент главный и даже сакральный. Для создания музыки он сам программирует свои инструменты, так его работы приобретают необычные формы и открывают новые возможности по исследованию композиции и звука.
          </p>
          <p>
            Morphtables пишет музыку в стилях IDM, acid и braindance, но дебютировал в 2018-м с эмбиент-альбомом Internal patterns. Он успел поработать с лейблами Sitdownandance (Турция), zanderhythm (Германия), Forgotten Tapes (Россия). Свежий, четвертый его релиз из 13 треков под названием Absurdance выходит на «Местности».
          </p>
          <p>
            С детства Павел исследовал музыку, записывал различные звуки на кассеты, а с появлением компьютера увлекся синтезаторами. Признается, что на его звучание сильно повлиял трек Squarepusher — Tundra 4, буквально повернув восприятие.
          </p>
          <p>
            Название для нового альбома автор позаимствовал у вечеринки, которую делал в Стамбуле с друзьями. «Слово Absurdance идеально подходит для описания жанра или настроения некоторых моих треков, которые я никак не мог никуда отнести — обычно я их называл как-то типа ‘’треки со странной гармонией’’ или ‘’странным настроением’’, — рассказывает Павел. «Меня сразу как-то непонятно почему затянуло в этот мир, новый, странный, мультяшный, абсурдный». Там он остался и продолжает свои ‘’странные’’ исследования.
          </p>
          <p>
            Родной город Павел нежно любит — говорит, что собственный альбом 2022 года Сhronogramma крутил без остановки, объезжая на велосипеде окраины летней Тюмени. Однако в релизе Absurdance большая часть треков родом из Стамбула. Они были написаны с 2022 по 2024 год, в жизни Павла этот период был полон смятения и стресса. Тогда он поселился в стамбульском районе Тарлабаши, и ему посвящен в альбоме отдельный трек — там он столкнулся с необычным переживанием.
          </p>
          <p>
            Как-то ночью писал новый материал, а на пустынной улице внезапно появился бегущий турок, который кричал и отмахивался в ужасе от невидимых демонов. Теперь Павел, слушая свой новый альбом, всегда вспоминает то ночное видение, считает, что этот инфернальный образ прошел сквозной нитью через все треки. Неудивительно, чего только не бывает во вселенной Morphtables — интересно, если долго всматриваться в нее, начнет ли она всматриваться в тебя?
          </p>
        </div>
        <div class="row mb-5">
          <div class="col-12 text-center mb-5">
            <NuxtImg
              src="/static/absurdance_photo_2.webp"
              alt="Morphtables"
              style="max-width: 70%; height: auto; display: block; margin: 0 auto;"
              format="webp" :quality="85" loading="lazy" />
          </div>
        </div>
        <div class="description text-white mb-5 shadowed">
          <p>
            Recorded &amp; Mixed — Morphtables (Pavel Ukolov)<br>
            Mastered &amp; Tracklist — Kokokei (Konstantin Kolychev)<br>
            Design &amp; Cassette — Margo Bobozeva<br>
            Press Release — Sonya Spielberg
          </p>
        </div>
        <div class="description text-white mb-5">
          <p>
            The album Absurdance by Morphtables, a musician from Tyumen, is a wild Nintendo party where you can show up in a jabot, sit down at a children's Casio synthesizer, and play a Shostakovich symphony.
          </p>
          <p>
            Pavel really does sound unique, because his music is easy to see. The visual element in Morphtables' work is central, even sacred. To create music, he programs his own instruments, which gives his works unusual forms and opens up new possibilities for exploring composition and sound.
          </p>
          <p>
            Morphtables writes music in the styles of IDM, acid, and braindance, but he debuted in 2018 with the ambient album Internal Patterns. He has worked with the labels Sitdownandance from Turkey, zanderhythm from Germany, and Forgotten Tapes from Russia. His fresh fourth release, a 13-track album called Absurdance, is coming out on Mestnost.
          </p>
          <p>
            Pavel has been exploring music since childhood, recording various sounds onto cassette tapes, and after getting a computer, he became fascinated with synthesizers. He admits that Squarepusher's track "Tundra 4" had a strong influence on his sound, literally changing his perception.
          </p>
          <p>
            The title of the new album was borrowed from a party he organized in Istanbul with friends. "The word Absurdance is perfect for describing the genre or mood of some of my tracks that I could never place anywhere — I usually called them something like 'tracks with strange harmony' or 'strange mood,'" Pavel says. "For some reason I was immediately drawn into this world — new, strange, cartoonish, absurd." He stayed there and continues his "strange" explorations.
          </p>
          <p>
            Pavel dearly loves his hometown. He says he played his own 2022 album Chronogramma nonstop while cycling around the outskirts of summer Tyumen. However, most of the tracks on Absurdance come from Istanbul. They were written between 2022 and 2024, a period in Pavel's life full of confusion and stress. At that time, he settled in Istanbul's Tarlabaşı district, which has a separate track dedicated to it on the album — a place where he had an unusual experience.
          </p>
          <p>
            One night, while writing new material, he suddenly saw a Turkish man running down an empty street, screaming and waving his arms in terror at invisible demons. Now, whenever Pavel listens to his new album, he always remembers that night vision, and believes this infernal image runs like a thread through all the tracks. No wonder — anything can happen in the universe of Morphtables. The real question is: if you stare into it long enough, will it start staring back at you?
          </p>
        </div>
        <div class="row mb-5">
          <div class="col-12 text-center mb-5">
            <NuxtImg
              src="/static/absurdance_cassette_2.webp"
              alt="Morphtables Absurdance cassette"
              style="max-width: 70%; height: auto; display: block; margin: 0 auto;"
              format="webp" :quality="85" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useReleaseSeo } from '~/composables/useReleaseSeo'

export default {
  name: 'Absurdance',
  setup() {
    useReleaseSeo()
  },
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/absurdance',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/absurdance/6768816964',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/36leOc6SSo8dVDd8FQklNt',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.com/album/42057468',
        },
        {
          name: 'vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000687931_27687931_1893f71423c5eb0af9',
        },
      ],
    }
  },
}
</script>

<style scoped>
.absurdance {
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
