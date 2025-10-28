<template>
  <div class="anderdog-sleep-paralysis w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/anderdog.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Anderdog</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Sleep Paralysis</span>
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
        <NuxtImg
          src="/static/anderdog_face.webp"
          alt="anderdog"
          style="max-width: 70%; height: auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe
          style="border: 0; width: 100%; height: 120px"
          src="https://bandcamp.com/EmbeddedPlayer/album=596035728/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
          seamless
        ></iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            "Мне в Электростали живется нормально": Как писать треки в духе WARP
            и вдохновляться самой большой в Европе свалкой.
          </p>
          <p>
            5 марта на новом лейбле «Местность» выйдет релиз Sleep Paralysis
            музыканта Дениса aka Anderdog. Это 10 треков, заряженных
            переживаниями сонного паралича и атмосферой индустриального города,
            где идет непрестанная борьба властей и эко-активистов.
          </p>
          <p>
            В интервью Денис рассказал, почему в Электростали все любят металл,
            в чем прелесть работы часовщиком, как быть андердогом, не
            напрягаясь, и отделять музыку от политики.
          </p>
        </div>
        <p class="description text-white">
          <a href="https://t.me/mestnost_label/351">
            продолжение читайте в нашем телеграм канале...
          </a>
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/anderdog_cassette_1.webp"
          alt="anderdog"
          style="display: block; width: 80%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/anderdog_cassette_2.webp"
          alt="anderdog"
          style="display: block; width: 80%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/anderdog_cassette_3.webp"
          alt="anderdog"
          style="display: block; width: 80%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnderdogSleepParalysis',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/sleep-paralysis',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ru/album/sleep-paralysis/1553156110',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/5jJcLtOKuLxwcz56kU8DYP?si=mcb4SpeYQ-GtkpnxPU5w6A',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/13856322',
        },
      ],
    }
  },
}
</script>

<style scoped>
.anderdog-sleep-paralysis {
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

.release-name {
  font-weight: bold;
}

.fill {
  min-height: 90vh;
  height: 100%;
}
</style>
