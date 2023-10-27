<template>
  <div class="kokokei-mandarin w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/mandarin.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Kokokei</h5>
          <h5 class="text-white"><span>Mandarin</span></h5>
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
          src="~/static/kokokei_face_2.jpg"
          alt="kokokei"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
        <div class="col-md-6 offset-md-2">
          <iframe
            style="border: 0; width: 100%; height: 120px;"
            src="https://bandcamp.com/EmbeddedPlayer/album=2542441696/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless
          >
            <a href="https://mestnost.bandcamp.com/album/mandarin">Mandarin by Kokokei</a>
          </iframe>
        </div>
      </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>Автор релиза «Мандарин» Костя Кококей является сооснователем лейбла «Местность» — уникального издательства. «Местность» пропускает музыкантов и их работы через сито локальной культуры, в которой те выросли. Для него контекст — такая же часть замысла любой музыкальной работы, как авторский взгляд, набор семплов и синтезаторов, используемых при записи.</p>
          <p>“Мандарин” продолжает южную трилогию релизов, записанных в окружении природы. Если в “Мимозе” — первой части трилогии, автор только погружается в самосозерцание и исследует действительность через пока еще ритмичный, “городской” bpm, то в этот раз путешествие внутрь себя замедляется и приобретает более вдумчивый и медитативный темп.</p>
          <p>“Треки были записаны в сентябре 2021 года, во время второй поездки в горную деревню. В этот раз мне было интересно исследовать тему борьбы добра со злом, столкновения света и тьмы. В “Мандарине” я снова записывал много окружающих звуков на рекордер и использовал их в треках” — говорит Костя.</p>
          <p>Финальное видение альбом получил в студии Soundartist осенью 2022 года. Над сведением и мастерингом Костя работал вместе с Федором Веткаловым — популяризатором модульных синтезаторов, преподавателем и музыкантом, который собирал сетапы для Zurkas Tepla, Mujuice, Электрической собаки и Moa Pillar.</p>
          <p>Релиз выйдет ограниченным тиражом. В каждой кассете будет лист мандарина — послание из прошлого и физический отпечаток той самой горной деревушки.</p>
        </div>
        <div class="description text-white mb-5">
          <p>The release's author of "Mandarin," Kostya Kokokei, is a co-founder of the label "Mestnost".</p>
          <p>"Mandarin" continues the southern trilogy of releases recorded in a natural environment. In "Mimosa" — the first part of the trilogy — the author only begins introspection and explores reality through a still rhythmic, "urban" bpm. This time, the journey inward slows down and takes on a more thoughtful and meditative pace.</p>
          <p>"The tracks were recorded in September 2021, during the second trip to the mountain village. This time, I was interested in exploring the theme of the struggle between good and evil, the collision of light and darkness. In 'Mandarin,' I again recorded many ambient sounds on a recorder and used them in the tracks," says Kostya.</p>
          <p>The release will be available in limited edition. Each cassette will contain a mandarin leaf — a message from the past and a physical imprint of that very mountain village.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KokokeiMandarin',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/mimoza',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/album/mandarin/1710828212'
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/08FmpkfJ10cYTlucHM3WG6',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/27675146',
        },
        {
          name: 'vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000035495_19035495_3439e254c67811514e',
        },
      ],
    }
  },
}
</script>

<style scoped>
.kokokei-mandarin {
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

.shadowed {
  color: lightgrey;
  font-size: 0.8em;
}
</style>
