<template>
  <div class="koma-real-face w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/koma.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Ko+Ma</h5>
          <h5 class="text-white">
            По-настоящему счастливое лицо стремится стать кругом
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
          src="~/static/koma1.jpeg"
          alt="anderdog"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="col-md-6 offset-md-2">
          <iframe
            style="border: 0; width: 100%; height: 120px"
            src="https://bandcamp.com/EmbeddedPlayer/album=2190151488/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://mestnost.bandcamp.com/album/-"
              >По-настоящему счастливое лицо стремится стать кругом by Ko+Ma</a
            >
          </iframe>
        </div>
        <div class="description text-white mb-5">
          <p>
            Беляево – место, неразрывно связанное с эстетикой Московского
            концептуализма и с творчеством настоящего беляевского аборигена –
            художника Дмитрия Пригова. Ko+Ma обратились к сути этого
            художественного направления, где визуальная составляющая неотделима
            от текста и содержания, будь то самые противоречивые формы. Так
            авторам релиза удалось играючи поженить лирику, метафизику и жесткие
            электронные конструкты в одном альбоме. Для жителей Беляево – это
            нормально, открывать красоту в паттернах спальных районов.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mb-5">
        <img
          src="~/static/koma2.jpeg"
          alt="anderdog"
          width="70%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KoMaRealFace',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/-',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ru/album/_/1574280392',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/5cBQvOrmZ7Ui1Bnd3bPvEi',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/16554278',
        },
      ],
    }
  },
}
</script>

<style scoped>
.koma-real-face {
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
