<template>
  <div class="koma-doroga-v-nebo w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/doroga_v_nebo.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Ko+Ma</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Дорога в небо</span>
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
          src="/static/koma_face_2.webp"
          alt="Koma"
          style="max-width: 70%; height: auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2768196344/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Ko+Ma продолжают свое путешествие к осознанию мира и самих себя через земную точку их пребывания.
            Это Беляево и его концептуалистский сценарий, которые для авторов переросли художественные формы и через осмысление в музыке
            стали духовными объектами, нашедшими отражение в новом ЕР дуэта под названием Ko+Ma. «Для нас место Беляево перешло во вневременной формат,
            переселилось в небесные сферы и продлилось в бесконечность – это совершенно иной взгляд на историю одной географической точки, не через разум,
            а сквозь сердце», - признаются авторы.
          </p>
          <p>
            На этот раз они распределили роли на художественную – главным «композитором» релиза стала Мария – и продюсерскую,
            которую взял на себя Костя. Сердцевиной EP можно назвать трек «Дорога в небо»,
            Ko+Ma швартуются к облакам и предлагают нам мягко и без побочных эффектов переключить стадию заземления в режим up.
          </p>
          <p>
            Релиз дополняют ремиксы от Anderdog, Morakh, Ne Tvoy Drug и Kisser.
          </p>
          <p class="mt-5">
            Ko+Ma continue their journey towards
            understanding the world and their inner selves through their earthly abode. We
            are talking about none other than Belyaevo and its conceptual scenario, which
            for the authors has outgrown and transcended a mere art form. As the authors
            started to experience and gain understanding of all things music, this entire
            area was turned into a spiritual object reflected in the latest EP of the duo
            called Ko+Ma. “For us, the Belyaevo location crossed over into a timeless
            format, it was uprooted to the celestial spheres and transformed into something
            endless and infinite. This approach of looking at the history of any given
            geographical region is truly unique, as it encourages you to experience things
            not through your mind, but through your heart,” the authors admit.
          </p>
          <p>
            This time around,they divided their responsibilities – Maria took on the role of an artist and
            became the main “composer” of the release and Kostya served as a producer. The
            track “Road to the Sky” is like a beating heart of the entire EP. Ko+Ma moor to
            the clouds and invite us to forego our grounded status, then gently and without
            any side effects switch to the Up mode.
          </p>
          <p>
            The release is complemented by remixes
            from Anderdog, Morakh, Ne Tvoy Drug and Kisser.
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/koma_doroga_v_nebo_cassette_1.webp"
          alt="koma doroga v nebo cassette 1"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/koma_doroga_v_nebo_cassette_2.webp"
          alt="koma doroga v nebo cassette 2"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/koma_doroga_v_nebo_cassette_3.webp"
          alt="koma doroga v nebo cassette 3"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DorogaVNebo',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/--2',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/album/%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B0-%D0%B2-%D0%BD%D0%B5%D0%B1%D0%BE/1679611507',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/1ihikHexWcnRQJhGPckr24?si=QOdpQjb_Rp-6-dHyoeG6rg'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/25404266'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000698588_17698588_09e3705ba4a48cc018'
        },
      ],
    }
  },
}
</script>

<style scoped>
.koma-doroga-v-nebo {
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
