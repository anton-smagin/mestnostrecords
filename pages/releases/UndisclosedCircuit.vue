<template>
  <div class="ambidextrous-undisclosed-circuit w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/ambidextrous_undisclosed_circuit.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Ambidextrous</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Undisclosed Circuit</span>
          </h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-12 col-lg-4 col-md-6 mt-5 text-nowrap"
            >
              <font-awesome-icon
                :icon="['fab', link.icon]"
                class="text-white"
              />
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
          src="/static/ambidextrous_undisclosed_circuit_face.webp"
          alt="Ambidextrous"
          style="max-width: 70%; height: auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=981621772/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Переиздание релиза Ника Завриева aka Ambidextrous под названием «Undisclosed Circuit» и выход в формате кассеты даст возможность оценить всю звуковую инженерию альбома в новой оптике.
            «Undisclosed Circuit» был выпущен на CD в 2023 году на английском лейбле Fantasy Enhancing. В этой работе Ника нет ни одного случайного звука. Просто он математик, выпускник факультета вычислительной математики и кибернетики МГУ, и одновременно художник — редкое сочетание. Ник как одаренный музыкант сделал из увлечения профессию, стал не только знаковым артистом, но и исследователем советской и российской электронной сцены.
          </p>
          <p>
            Над «Undisclosed Circuit» Ник работал с 2017 по 2021 год, он называет альбом задумчивым и чуть более минорным «братом» пластинки «Armchair Raver», которую писал параллельно. Треки он обкатывал на лайвах, хотя материал нельзя назвать клубным, и терпеливо дорабатывал.
          </p>
          <p>
            Ambidextrous — художник, зависимый от местности. Он много путешествует и признается, что среда и культурно, и визуально сильно влияет на его творчество. «Как у меня это часто бывает, «Undisclosed Circuit» — это альбом-трэвелог, — рассказывает Ник, — вот, например, трек «Shibuya Blues» записан под впечатлением от моей первой поездки в Японию, трек «Fractal Dinosaurs» родился благодаря сюрреалистическому рисунку, увиденному в одном из стамбульских кафе, а «Lizard Grace» создавался по следам каких-то горных впечатлений, и все это укладывается воедино потом, в процессе каких-то домашних размышлений и экспериментов».
          </p>
          <p>
            «Undisclosed Circuit» можно назвать одной из лучших работ автора с характерным, устоявшимся почерком. Здесь и свойственная ему архитектоника с арочными интермедиями, пространственность, организующая симметрия пульсаций и мелодичность в невероятном разнообразии синтетических тембров. Это по-настоящему зрелый продукт, который в обновленном формате сможет повторно порадовать поклонников эталонного IDM-звучания.
          </p>
          <p class="mt-3">
            Music by Nick Zavriev<br>
            Artwork by KodeTwo<br>
            Mastered by Árni Grétar
          </p>
          <p class="mt-5">
            The reissue of Nick Zavriev's release Undisclosed Circuit, now available on cassette, offers a new perspective on the album's sound engineering. Undisclosed Circuit was originally released on CD in 2023 on the UK label Fantasy Enhancing. There is not a single accidental sound in this work. Nick is, after all, a mathematician — a graduate of the Faculty of Computational Mathematics and Cybernetics at Moscow State University — and at the same time an artist, a rare combination. As a gifted musician, he turned his passion into a profession, becoming not only a significant artist, but also a researcher of the Soviet and Russian electronic scene.
          </p>
          <p>
            Nick worked on Undisclosed Circuit from 2017 to 2021. He calls the album a contemplative and slightly more minor "brother" to Armchair Raver, which he was creating in parallel. He tested the tracks in live performances — even though the material can hardly be called club-oriented — and refined them patiently over time.
          </p>
          <p>
            Ambidextrous is an artist deeply influenced by place. He travels extensively and admits that his environment — both culturally and visually — profoundly shapes his music. "As often happens with me, Undisclosed Circuit is a travelogue album," says Nick. "For example, the track Shibuya Blues was created after my first trip to Japan; Fractal Dinosaurs was inspired by a surreal drawing I saw in a café in Istanbul; and Lizard Grace grew out of some mountain impressions — all of which eventually came together during quiet moments of reflection and experimentation at home."
          </p>
          <p>
            "Undisclosed Circuit" can be considered one of the artist's finest works, distinguished by his mature, unmistakable signature. Here you'll find his characteristic architectonics with arched interludes, spatial depth, organizing symmetry of pulsations, and melodic richness expressed through an incredible variety of synthetic timbres. It is a truly mature work — one that, in its renewed format, will once again delight fans of classic IDM sound.
          </p>
          <p class="mt-3">
            <i>
              Re-issue — now available on cassettes & streaming services<br>
              Originally released by Fantasy Enhancing
            </i>
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-3 mt-5">
        <NuxtImg
          src="/static/ambidextrous_undisclosed_circuit_cassette_2.webp"
          alt="Ambidextrous Undisclosed Circuit cassette"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UndisclosedCircuit',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/undisclosed-circuit',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/6AWaCF848vrYCeso6YHGgE?si=SMguhLpnREy91NaQR4smkA'
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/undisclosed-circuit/1852625927'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.com/album/39136602'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000819359_25819359_80df24e067557080ba'
        },
      ],
    }
  },
}
</script>

<style scoped>
.ambidextrous-undisclosed-circuit {
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
  font-family: Acrom, sans-serif;
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
</style>
