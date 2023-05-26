<template>
  <div class="ambidextrous-grounded-rectange w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/grounded_rectangle.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Ambidextrous</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Grounded Rectangle</span>
          </h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-md-4 mt-5 text-nowrap"
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
        <img
          src="~/static/ambidextrous_face_2.jpg"
          alt="Ambidextrous"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=421466685/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
          <a href="https://mestnost.bandcamp.com/album/grounded-rectangle">Grounded Rectangle by Ambidextrous</a>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Ambidextrous – он же Ник Завриев, музыкант, популяризатор редкой электроники, журналист и продюсер в одном лице – выпускает совершенно
            нетипичный для себя релиз Grounded Rectangle на лейбле «Местность» в стиле краут-рок.
            От нежных и мелодичных треков он неожиданно переходит к математической монотонности,
            возведенной немцами в начале 70-х годов в стиль, которому, как и всем зародившимся в Германии направлениям, присущи строгая логика, структурированность и главенство разумного над чувственным.
          </p>
          <p>
            Особенность этого релиза не только в его звуковой уникальности, но и в колоссальной работе, которая была проделана в студии при его записи.
            Стилю свойственно сочетание стандартного рокового инструментария с синтезаторной подложкой и пульсирующим ритмом «моторик», поэтому большая часть краут-роковых «партитур» записывается буквально вручную.
          </p>
          <p>
            Например, в треке Reluctance Abuse звучат барабаны Сергея Ледовского, в прошлом – участника большинства московских инди-групп от Silence Kit до NRKTK и проекта Ambidextrous Live Band,
            сейчас Сергей является ударником калифорнийской дрим-поп группы Halou. Также в большинстве треков можно услышать советский синтезатор «Маэстро», к которому автор питает особую любовь.
          </p>
          <p>
            <i>«Забавно, что треку Marathon Machine уже 9 лет, я начал его сочинять его под трансляцию марафона лондонской олимпиады – мне показалось интересным, что бег человека – это тоже монотонный репетативный процесс, который вполне можно переложить на музыкальный язык»</i>, – рассказывает Ник.
          </p>
          <p class="mt-5">
            Ambidextrous, aka Nick Zavriev, musician, popularizer of rare electronics, journalist and producer all in one,
            has dropped a release that is completely out of character for him. His latest album with the Mestnost label is titled Grounded Rectangle
            and it draws heavily on the krautrock style. Completely out of the blue, Nick turns away from the soft and melodious tracks and immerses
            himself in the mathematical monotony elevated by the Germans to its own separate style in the early 70s, which, like all trends that
            originate in Germany, is characterized by the uncompromising logic, well-defined structure and prevalence of reason over sensation.
          </p>
          <p>
            At one time or another, Ledovsky played in the majority of Moscow-based indie bands from Silence Kit to NRKTK.
            He also participated in the Ambidextrous Live Band project. These days, Sergey is playing drums in the Californian dream-pop band Halou.
            Getting back to Ambidextrous and his latest album, it is interesting to note that Maestro, the Soviet synthesizer, which Nick is especially fond of,
            makes an appearance in most of his tracks.
          </p>
          <p>
            <i>
              “I still can’t believe that it’s been 9 years since the Marathon Machine track came out.
              I started composing it for the broadcast of the London Olympics marathon.
              I became fascinated with the idea that running can also be described as a monotonous repetitive process that can easily be translated into the language of music”
            </i> shares Nick.
            This style with its hypnotizing squareness could appeal to both the psychedelics lovers and the fans of electronic sound.
            If people could just look past the usual nods towards Kraftwerk and Faust, to an unbiased ear in 2023 it would seem like LCD Soundsystem has made a comeback.
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <img
          src="~/static/ambidextrous_cassette_rectangle_1.jpg"
          alt="ambidextrous grounded rectangle cassette 1"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="~/static/ambidextrous_cassette_rectangle_2.jpg"
          alt="ambidextrous grounded rectangle cassette 2"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="~/static/ambidextrous_cassette_rectangle_3.jpg"
          alt="ambidextrous grounded rectangle cassette 3"
          width="90%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroundedRectangle',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/grounded-rectangle',
        },
        //
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/1hWTjBU22lb451Sh04tbH5?si=_i0ghAWUTHyO0teRbxfMBA'
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/album/grounded-rectangle/1686636381',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/25740573'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000933813_17933813_0ddee2e9b4bee423b5'
        },
      ],
    }
  },
}
</script>

<style scoped>
.ambidextrous-grounded-rectange {
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
  text-align: left;
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.08em;
  }
}

.social {
  font-size: 1em;
}

.store-link {
  display: inline-block;
  margin-left: 0.1em;
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
