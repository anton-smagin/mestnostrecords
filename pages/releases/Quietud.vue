<template>
  <div class="ilya-orange-quietud w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img src="/static/quietud.jpg" width="80%" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Ilya Orange</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Quietud</span>
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
    <div class="row mb-5">
      <div class="col-md-6 offset-md-3">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1718581357/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
        </iframe>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mb-5">
        <img
          src="/static/ilya_orange_face.jpg"
          alt="ilya orange"
          width="50%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Продюсер, саунд-дизайнер, автор проектов Наукоград и Legobyte Илья Оранж выпускает альбом «Quietud» для того, чтобы мы носили с собой лето в мыслях, делах, планах. Он записывал эти треки на даче из подручных средств, лепил из антикварных сэмплов с кассет и пиратских компакт-дисков, а главное - был в тот момент совершенно свободен. От этой свободы альбом получился легким, таким, когда включаешь первый трек - и тут уже восьмой, но это так классно.
          </p>
          <p>
            Жанрово работу можно отнести к лоуфай-хаусу, но - «дача». Она для автора стала не просто обстоятельством. Дача - понятный смысл и символ сакрального ничегонеделания, и почему мы разучились просто быть? Восемь треков альбома пропитаны дачным вайбом - детством, уютом, защищенностью. От них становится легко в голове, и в этом нет ничего плохого - это просто жизнь как она есть.
          </p>
          <p class="mt-5">
            Producer, sound designer, author of such projects as Naukograd and Legobyte, Ilya Orange releases album "Quietud" as a way for all of us to carry a piece of summer with us, to have it permeate our thoughts, deeds, and plans. He recorded these tracks in his country house using whatever tools he had at hand; molded them from antique cassette and pirate CD samples, and what’s most important - he was completely free at that moment. This freedom is what made the album so light, sort of like when you turn on the first track - and then all of a sudden you realize that you are already on the eighth song, and it is so cool.
          </p>
          <p>
            The piece can be classified as lo-fi house in terms of genre, but – “dacha”. For the author, it turned into something more than just a circumstance. Dacha is the embodiment of clear meaning and symbol of sacred idleness, a personification of the question: “why have we forgotten how to just be?” The eight tracks of the album are imbued with the dacha vibe – things like childhood, coziness, and security. They make your head feel weightless, and there is nothing bad about it - it is just life as it is.
          </p>
        </div>
      <div class="row mb-5">
        <div class="col-md-4 mt-5">
          <img
            src="/static/quietud_cassette_1.jpg"
            alt="quietud cassette 1"
            width="90%"
            height="auto"
          />
        </div>
        <div class="col-md-4 mt-5">
          <img
            src="/static/quietud_cassette_2.jpg"
            alt="quietud cassette 2"
            width="90%"
            height="auto"
          />
        </div>
        <div class="col-md-4 mt-5">
          <img
            src="/static/quietud_cassette_3.jpg"
            alt="quietud cassette 3"
            width="90%"
            height="auto"
          />
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IlyOrangeQuietud',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/quietud',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/us/album/quietud/1773163407',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/5VW2Q6W9S1vf87Vobigdhn',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/33612841',
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000168199_22168199_564e9bb5e8adf9c10f',
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
          content: '/static/quietud.jpg'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Ilya Orange - Quietud'
        }
      ]
    }
  }
}
</script>

<style scoped>
.ilya-orange-quietud {
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
  margin-left: 0.1em;
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
