<template>
  <div class="kokokei-evkalipt w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/kokokei_evkaliipt.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Kokokei</h5>
          <h5 class="text-white"><span>Evkalipt</span></h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-12 col-lg-4 col-md-6 mt-5 text-nowrap"
            >
              <ClientOnly>
                <font-awesome-icon
                  :icon="['fab', link.icon]"
                  class="text-white"
                />
              </ClientOnly>
              <a :href="link.link" target="_blank" class="text-white social">
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12 text-center">
        <NuxtImg
          src="/static/kokokei_evkalipt_face_5.webp"
          alt="Kokokei Evkalipt"
          style="max-width: 70%; height: auto; display: block; margin: 0 auto;"
          format="webp"
          :quality="85"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-6 offset-md-2 bandcamp-player">
        <iframe
          style="border: 0; width: 100%; height: 120px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=1149277045/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>Эвкалипт - финальная часть звукового триптиха Кости Kokokei, сооснователя лейбла «Местность». Серия была создана в кавказских горах и вдохновлена живым взаимодействием с природой. В релиз вошли как эмбиентовые джемовые зарисовки, передающие состояние медитативного присутствия, так и более структурированные треки, в которых чувствуется влияние IDM и трип-хопа.</p>
          <p>Костя говорит о релизе: «Финальная часть моей трилогии - отражение ощущений, которые подарило мне это место. Они были разными, и это слышно в треках. Спокойствие сменяется внутренней бурей и это нормально, что оба состояния присутствуют в нашей жизни. Но всё проходит, и всё будет хорошо.</p>
          <p>Спасибо каждому, кто доверился и услышал мою музыку - благодаря этому во Вселенной возникло что-то новое. Давайте держаться вместе и уважать друг друга. Искренне верю, что Любовь победит».</p>
          <p>Мастеринг сделал Фёдор Веткалов - преподаватель, композитор и музыкант.<br>
          Релиз выйдет ограниченным тиражом: в каждую кассету будет вложен настоящий лист обожжённого эвкалипта - физический отпечаток той самой горной деревушки.</p>
          <p class="shadowed">Music by Kokokei<br>Artwork by Maria Ko<br>Mastered by Fedor Vetkalov</p>
        </div>
        <div class="col-12 text-center mb-5">
          <NuxtImg
            src="/static/kokokei_evkalipt_face_2.webp"
            alt="Kokokei Evkalipt"
            style="max-width: 70%; height: auto; display: block; margin: 0 auto;"
            format="webp"
            :quality="85"
          />
        </div>
        <div class="description text-white mb-5">
          <p>Evkalipt is the final part of the sound triptych by Kostya Kokokei, co-founder of the label Mestnost. The series was created in the Caucasus mountains and inspired by a close interaction with nature. The release includes ambient jam sketches that convey a meditative presence, as well as more structured tracks influenced by IDM and trip-hop.</p>
          <p>Kostya says about the release:<br>
          "The final part of my trilogy is a reflection of the feelings this place gave me. They were different, and you can hear that in the tracks. Calmness shifts into an inner storm, and it is natural that both states exist in our lives. But everything passes, and everything will be alright.</p>
          <p>Thank you to everyone who trusted me and listened to my music. Because of this, something new appeared in the Universe. Let's stay together and respect each other. I sincerely believe that Love will prevail."</p>
          <p>Mastering was done by Fedor Vetkalov - composer, musician and teacher.<br>
          The release will come out as a limited edition: each cassette will include a real burnt eucalyptus leaf, a physical imprint of that mountain village.</p>
        </div>
        <div class="col-12 text-center mb-5">
          <NuxtImg
            src="/static/kokokei_evkalipt_face_3.webp"
            alt="Kokokei Evkalipt"
            style="max-width: 70%; height: auto; display: block; margin: 0 auto;"
            format="webp"
            :quality="85"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Evkalipt',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/evkalipt',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/evkalipt-ep/1860004624',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/6sIUU5V2t1g9e5fCufb1aM?si=8utguj-VSlKh2M_uj5effA',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/39681690',
        },
        {
          name: 'vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000095872_26095872_9220ff8a59e75d574e',
        },
      ],
    }
  },
}
</script>

<style scoped>
.kokokei-evkalipt {
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
  font-family: NotoSans, sans-serif;
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
