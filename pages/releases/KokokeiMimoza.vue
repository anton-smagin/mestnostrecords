<template>
  <div class="kokkei-mimoza w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="/kokokei.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Kokokei</h5>
          <h5 class="text-white"><span>Mimoza</span></h5>
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
        <img src="/kokokei_face.jpg" alt="kokokei" width="70%" height="auto" />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Автор релиза «Мимоза» Костя Кококей является сооснователем лейбла
            «Местность» – уникального издательства. «Местность» пропускает
            музыкантов и их работы через сито локальной культуры, в которой те
            выросли. Для него контекст – такая же часть замысла любой
            музыкальной работы, как авторский взгляд, набор семплов и
            синтезаторов, используемых при записи.
          </p>
          <p>
            Релиз записан в отдаленной южной деревушке. Свежая картинка дала
            Косте новый импульс, который на время сменил московское Беляево с
            его концептуалистской историей на чистую, холмистую красоту южного
            края. Поездка из одной местности в другую была предпринята Костей в
            поиске самого себя, это был процесс конвертации в духовность и
            попытка расстаться со своим эго для того, чтобы увидеть мир, вещи,
            действительность саму по себе и раствориться в настоящем видении
            жизни как таковой.
          </p>
          <p>
            «Я пытался записать музыку такой, чтобы она не была похожей на
            чью-то, отпустить желание понравиться многим, хотя это было сложно»,
            – рассказывает автор. Пять треков релиза «Мимоза» станут первой
            частью трилогии, посвященной нашему пребыванию в реальности и
            попытке переживания красоты без давления личности. Работа написана с
            уклоном в лоу-фай хаус, остальные две части будут звучать в духе IDM
            и эмбиента. При записи треков Костя использовал звуки, собранные им
            «в полях», звуки местного быта и природы, прошедшие
            эйсид-конвертацию через басовый синтезатор Roland TB-03.
          </p>
          <p>
            «Мимоза» – не просто саундтрек для декораций мира, она меняет взгляд
            на них вместе с переживанием простой, не затронутой человеческим
            смыслом красоты, которая возникает где-то между ломаным битом,
            реверберациями «роланда» и лучом солнца, пробивающимся между ставен
            деревенского домика.
          </p>
        </div>
        <div class="col-md-6 offset-md-2">
          <iframe
            style="border: 0; width: 100%; height: 120px"
            src="https://bandcamp.com/EmbeddedPlayer/album=2532475065/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
            seamless
            ><a href="https://mestnost.bandcamp.com/album/mimoza"
              >Mimoza by Kokokei</a
            ></iframe
          >
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <img
          src="/mimoza_cassette_1.jpg"
          alt="mimoza cassette 1"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="/mimoza_cassette_2.jpg"
          alt="mimoza cassette 2"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="/mimoza_cassette_3.jpg"
          alt="mimoza cassette 3"
          width="90%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KokokeiMimoza',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/mimoza',
        },
        // { name: 'Apple Music', icon: 'apple', link: 'https://music.apple.com/album/attempts-ep/1620433720' },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/5ZR61ExaZWB9ENHgNivmsK',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/23288396',
        },
        {
          name: 'vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000161620_16161620_087d2718827c07cf9a',
        },
      ],
    }
  },
}
</script>

<style scoped>
.kokkei-mimoza {
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
