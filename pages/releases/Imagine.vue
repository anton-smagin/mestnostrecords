<template>
  <div class="anderdog-dessin-bizarre-imagine w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img src="/static/imagine.jpg" width="80%" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Anderdog and Dessin Bizarre</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Imagine</span>
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
          src="/static/anderdog_dessin_bizarre_face.jpeg"
          alt="Anderdog and Dessin Bizarre"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1716834191/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless></iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Денис Рыжов, он же Anderdog, музыкант из Электростали, записал альбом в коллаборации с Иваном Красновым aka Dessin Bizarre. К созданию релиза Imagine авторов подтолкнуло особое отношение к времени и многообразию зафиксированных в нем звуковых ревербераций. Все дело в том, что Краснов пишет интеллектуальный эмбиент, где обосновался как композитор, исследователь и энтузиаст модульной электроники. Использование модулей для записи альбома позволило раскрыть весь спектр частот и модуляций, сделать ювелирную точность контроля над временем той средой, в которой глубоко и без спешки могут разворачиваться музыкальные события.
          </p>
          <p>
            Imagine – не первая коллаборация Дениса, до этого он успел поработать с hangdrum музыкантом Андреем Лето и другим уроженцем Электростали Mi Croevkhas, а его ремиксы, созданные с другими артистами «Местности», уверенно рвут танцполы на вечеринках лейбла. Каждый новый проект Anderdog – не только новизна, но и оправданные ожидания. Так, совместная работа с Красновым обеспечила материалу глубину резкости, но прежняя динамика треков делает почерк автора узнаваемым. Стоит упасть в мягкость эмбиентного монолога, как вдруг тебя будит новая ритмическая перебивка, а по музыкальной поверхности расползаются глитчи. Альбому Imagine не суждено стать просто фоном, он буквально интерактивен. Резиденты «Местности» делают серьезное предложение: поставить лоуфай на паузу и переместиться на уровень sublime.
          </p>
          <p class="mt-5">
            Denis Ryzhov, aka Anderdog, a musician born and raised in the city of Elektrostal, recorded an album in collaboration with Ivan Krasnov aka Dessin Bizarre. What prompted the authors into creating and subsequently releasing Imagine was the special attitude towards time and the existing diversity of sound reverberations. The fact of the matter is that Krasnov writes intellectual ambient, where he has settled down as a composer, researcher and enthusiast of modular electronics. The use of modules in the recording of the album made it possible to reveal the entire spectrum of frequencies and modulations and with pinpoint accuracy establish control over time in the environment where musical events can unfold in-depth and without haste.
          </p>
          <p>
            Imagine is not Denis’ first collaboration. Prior to this, he had a chance to work with a hangdrum musician - Andrey Leto and another Elektrostal native - Mi Croevkhas. What is more, his remixes, created with other Mestnost-signed artists, never fail to tear up the dance floor at the label’s parties. Each new Anderdog project is not just novelty and originality, but also a sense of fulfilled expectations. Thus, the collaboration with Krasnov ensured that the material had a certain depth of field, while the previous dynamics of the tracks made the author’s style recognizable. As soon as you allow yourself to fall into the softness of an ambient monologue, you are suddenly awakened by a new rhythmic interruption, while glitches spread across the musical surface. It’s not in the cards for the album Imagine to make do with being just background music, it is literally too interactive. The residents of the Mestnost label have a serious proposition for you: how about putting lo-fi on pause and moving to the sublime level?
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
        <div class="col-md-4 mt-5">
          <img
            src="/static/anderdog_bizarre_cassette_1.jpg"
            alt="anderdog bizarre cassette 1"
            width="90%"
            height="auto"
          />
        </div>
        <div class="col-md-4 mt-5">
          <img
            src="/static/anderdog_bizarre_cassette_2.jpg"
            alt="anderdog bizarre cassette 2"
            width="90%"
            height="auto"
          />
        </div>
        <div class="col-md-4 mt-5">
          <img
            src="/static/anderdog_bizarre_cassette_3.jpg"
            alt="anderdog bizarre cassette 3"
            width="90%"
            height="auto"
          />
        </div>
      </div> 
  </div>
</template>

<script>
export default {
  name: 'AndersogDessinBizarreImagine',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/imagine',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/3UyWQg1LtriGyOrqNu6lTq'
        },
        {
          name: 'Apple',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/imagine-ep/1792058015'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/35109734'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000056271_23056271_0586698e14d7f061f0'
        },
      ],
    }
  },
}
</script>

<style scoped>
.anderdog-dessin-bizarre-imagine {
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
