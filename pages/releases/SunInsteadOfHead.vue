<template>
  <div class="sun-instead-of-head w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/sun_instead_of_head.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Max Ananyev</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Sun Instead of Head</span>
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
          src="~/static/max_ananyev_face.jpg"
          alt="Ambidextrous"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1975533998/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
          <a href="https://mestnost.bandcamp.com/album/sun-instead-of-head">Sun Instead of Head by Max Ananyev</a>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Альбом Sun Instead of Head – это личное посвящение автора лету, поэтому символично, что альбом выходит в день летнего солнцестояния.
            «Лето – это день природного цикла, время активности для всего живого, ведь солнце щедро раздаёт энергию.
            Лично для меня (я думаю, что и для многих) лето – это время исследований. Мы много гуляем, путешествуем,
            получаем впечатления, открываем новое. В музыке мне хотелось передать это состояние увлеченного поиска, интереса к жизни.
            Возможно поэтому некоторые композиции звучат немного наивно, по-детски. В детстве ход времени воспринимается иначе.
            День кажется длиннее, потому что он складывается из череды новых открытий.
            Часть композиций альбома изначально были написаны как музыка к кино-инсталляции «Путь моего Художника» режиссёра Натальи Полуяновой.
            В этой работе Наташа так же иллюстрирует тему внутреннего ребёнка исследователя.
            Мне хотелось, чтобы музыка создавала необычные художественные образы, пробуждала фантазию и дополняла привычную реальность».
          </p>
        </div>
        <div class="col-md-12">
          <iframe src="https://player.vimeo.com/video/734328735?h=d8d77aa050" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SunInsteadOfHead',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/sun-instead-of-head',
        },
        // {
        //   name: 'Spotify',
        //   icon: 'spotify',
        //   link: 'https://open.spotify.com/album/1hWTjBU22lb451Sh04tbH5?si=_i0ghAWUTHyO0teRbxfMBA'
        // },
        // {
        //   name: 'Apple Music',
        //   icon: 'apple',
        //   link: 'https://music.apple.com/album/grounded-rectangle/1686636381',
        // },
        // {
        //   name: 'Yandex',
        //   icon: 'yandex',
        //   link: 'https://music.yandex.ru/album/25740573'
        // },
        // {
        //   name: 'Vk',
        //   icon: 'vk',
        //   link: 'https://vk.com/music/album/-2000933813_17933813_0ddee2e9b4bee423b5'
        // },
      ],
    }
  },
}
</script>

<style scoped>
.sun-instead-of-head {
  background-color: black;
  background-image: none;
}

h1 {
  color: white;
}

.description {
  margin: 0 5%;
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
