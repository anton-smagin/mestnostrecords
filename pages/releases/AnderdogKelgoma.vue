<template>
  <div class="anderdog-kelgoma w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="/static/anderdog_kelgoma.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Anderdog</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Kelgoma</span>
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
          src="/static/anderdog_face_kelgoma.jpeg"
          alt="anderdog"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2287507512/size=large/bgcol=333333/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Мокша танцуют IDM
          </p>
          <p>
            Anderdog, автор альбома Sleep Paralysis 2021 года и недавнего совместного
            с Andrey Leto релиза Romantic Selection, записал свежий альбом Kelgoma. Загадочные названия треков – Ineved, Moksha, Kelgoma, Kemama – слова мокшанского языка, на котором говорили мокшане,
            традиционно проживавшие к востоку от столицы и в нижегородских землях.
          </p>
          <p>
            Почему мокшане? Потому что сам автор онтологически принадлежит к этому народу,
            обретая свою уникальную идентичность и размешивая ее в серебрящихся и хрустящих как весенние льдинки треках – от почти драматичного Ineved c водопадами фортепианных семплов до интимно робкого Od Tol и финальных и очень кинематографичных Buka и Lixtaema. «Этот релиз – дань уважения маленькому мокшанскому этносу и его культуре, к которым я отношусь»,
            – не стесняясь признает автор, выпуская свежий и по-настоящему местный релиз.
          </p>
          <p class="mt-5">
            Moksha goes IDM dancing
          </p>
          <p>
            Anderdog, the author of the 2021 Sleep Paralysis album and the person behind the recent release of Romantic Selection in collaboration with Andrey Leto, has recorded a brand new album titled Kelgoma.
            The names of the tracks have been chosen with utmost care: the mysterious and cryptic Ineved, Moksha, Kelgoma, and Kemama are all words of the Moksha language that was spoken by the Moksha people, who historically took up residence to the east of the capital and in the Nizhny Novgorod lands.
          </p>
          <p>
            So, why Mokshas? Because, ontologically speaking, that is who the author identifies himself with, acquiring his very own unique traits along the way and then using them to create music. His one-of-a-kind identity is imprinted on all of his tracks that conjure up images of glistening silver and crisp spring icicles - from the slightly dramatic Ineved with waterfalls of piano samples to the intimately shy Od Tol to the final and very cinematic Buka and Lixtaema. Releasing such an invigorating and truly local album, the author doesn’t hold back when admitting that “this release is a tribute to the small Moksha ethnic group and its culture, to which he belongs.”
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <img
          src="/static/kelgoma_cassette_1.jpeg"
          alt="anderdog kelgoma cassette 1"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="/static/kelgoma_cassette_2.jpeg"
          alt="anderdog kelgoma cassette 2"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="/static/kelgoma_cassette_3.jpeg"
          alt="anderdog kelgoma cassette 3"
          width="90%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnderdogKelgoma',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/kelgoma',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/album/kelgoma/1656158106',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/1FKZWGghhTD03zf0pDahfH?si=dbW6rFfITYWAqQKqXtamEA',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/24195441',
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000815584_16815584_4591c47f1a19509a92?act=album',
        },
      ],
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          content: '/static/anderdog_kelgoma.jpg'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Anderdog - Kelgoma'
        }
      ]
    }
  }
}
</script>

<style scoped>
.anderdog-kelgoma {
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
