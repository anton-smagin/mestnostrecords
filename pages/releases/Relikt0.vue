<template>
  <div class="relikt-0 w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/relikt_0.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">RELIKT-0</h5>
          <h5 class="text-white"><span>Various Artists</span></h5>
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
          src="/static/rasputin_face_relikt_0.webp"
          alt="Andrey Rasputin"
          style="max-width: 70%; height: auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="col-md-6 offset-md-2 mb-5">
          <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1542960507/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>RELIKT-0 by Andrey Rasputin</iframe>
        </div>
        <div class="description text-white mb-5">
          <p>
            «RELIKT-0» состоит из 6 ремиксов от артистов и друзей лейбла на треки с альбома Andrey Rasputin — «RELIKT-1», плюс бонус — интерпретация самим Андреем той самой «Lora Palmer's Theme» из Твин Пикс, доступная только на Bandcamp.
          </p>
          <p>
            Открывает релиз Anderdog — его версия «Bibcode» начинается с даба, а перерастает в задумчивый брейкбит, после которого Надя nooMoon настраивает слушателя на что-то более тонкое и экспериментальное.
          </p>
          <p>
            Маэстро Ambidextrous с мелодичным IDM-ремиксом на «CMB» погружает в свой прекрасный, узнаваемый мир. А с появлением нашего японского брата HAJIME KOJIRO мы и вовсе отлетаем  далеко и становимся ближе к темным материям.
          </p>
          <p>
            Завершает историю ремикс от драм-н-бейс артиста No Rules — жёсткий и техноидный.
          </p>
          <p>
            И обязательно оставьте место для «Lora Palmer's Theme» в исполнении Распутина — это очень красиво
          </p>
        </div>
        <div class="description text-white mb-5">
          <p><i>Mastering: Andrey Rasputin</i></p>
          <p><i>Design: pititsy</i></p>
        </div>
        <div class="description text-white mb-5">
          <p>
            «RELIKT-0» consists of 6 remixes by label artists and friends of tracks from Andrey Rasputin's album «RELIKT-1», plus a bonus — Andrey's own interpretation of that very «Lora Palmer's Theme» from Twin Peaks, available exclusively on Bandcamp.
          </p>
          <p>
            The release opens with Anderdog — his version of «Bibcode» starts with dub and evolves into a contemplative breakbeat, after which Nadya nooMoon sets the listener up for something more subtle and experimental.
          </p>
          <p>
            Maestro Ambidextrous with a melodic IDM remix of «CMB» immerses us in his beautiful, recognizable world. And with the appearance of our Japanese brother HAJIME KOJIRO, we fly far away and get closer to dark matter.
          </p>
          <p>
            The story concludes with a remix from drum'n'bass artist No Rules — hard and technoid.
          </p>
          <p>
            And be sure to save room for «Lora Palmer's Theme» performed by Rasputin — it's very beautiful.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Relikt0',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/relikt-0',
        },
        // {
        //   name: 'Apple Music',
        //   icon: 'apple',
        //   link: '#',
        // },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/5qhsd8FnJfZtmwgdhO5yF3',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.com/album/39097789',
        },
        {
          name: 'VK',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000795242_25795242_6f03792a8bce834d54',
        }
      ],
    }
  },
}
</script>

<style scoped>
.relikt-0 {
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

.store-link svg {
  font-size: 1em;
  vertical-align: middle;
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

