<template>
  <div class="kikok-slow-crunch-remixes w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img src="/static/slow_crunches_remixes.jpg" width="80%" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">KIKOK</h5>
          <h5 class="text-white"><span>Slow Crunch remixes</span></h5>
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
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-6 mb-3">
            <img
              src="/static/kikok_face.jpg"
              alt="KIKOK"
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div class="col-md-6 offset-md-2">
          <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1108843615/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
          </iframe>
        </div>
        <div class="description text-white mb-5">
          <p>
            KIKOK — Slow Crunch remixes (MES033, 2025)
          </p>
          <p>
            Ремиксы на альбом <nuxt-link to="/releases/SlowCrunch">KIKOK — Slow Crunch</nuxt-link>, вышедший на местности в апреле 2025 года.
            Релиз доступен для бесплатного скачивания на Bandcamp.
          </p>
          <p>
            <strong>Remixers</strong><br/>
            GNOOMES<br/>
            Ne Tvoy Drug<br/>
            Kokokei<br/>
            Disco Demolition Knight<br/>
            soft swamp<br/>
            Half Moon Glass
          </p>
          <p class="mt-4">
            Mastered by <i>Kokokei</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KikokSlowCrunchRemixes',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/slow-crunch-remixes',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/slow-crunch-remixes/1845947593',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/2G9vNgk4gldJxHfiIwZxxW?si=Oz2Z0RLAQeOKFaajeTJ-3A',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.com/album/38651413',
        },
        {
          name: 'VK',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000533064_25533064_fb0ad3753a55bd0bce',
        }
      ],
    }
  },
}
</script>

<style scoped>
.kikok-slow-crunch-remixes {
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
