<template>
  <div class="poludryoma w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/poludryoma.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">ВСЕСЛАВЪ</h5>
          <h5 class="text-white"><span>Полудрёма</span></h5>
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
    <div class="row">
      <div class="col-md-12 mb-5">
        <NuxtImg
          src="/static/vseslav_face.webp"
          alt="Vseslav"
          style="max-width: 30%; height: auto;"
          format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-6 offset-md-2 bandcamp-player">
        <iframe
          style="border: 0; width: 100%; height: 120px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=3803754582/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://mestnost.bandcamp.com/album/--6">Полудрёма by ВСЕСЛАВЪ</a>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Не пора ли притормозить? Жизнь человека в мире стала очень торопливой, при этом счастливее мы не стали. Все бегут, боятся куда-то опоздать, кого-то не встретить и чем-то не обладать, получается — не мы владеем делами, а дела нами.
          </p>
          <p>
            По-настоящему человеку надо мало — умиротворение и уют в душе, и у эмбиента как музыкального жанра в этом плане огромный терапевтический эффект. Это давно подметил для себя питерский музыкант со стажем Станислав Севостьянихин, известный под никами Dissident и Kontext. Когда-то он любил шум и угар драм-н-бэйса, но обрел умиротворение и теперь изменяет восприятие и пространство также посредством звуковых полотен, исполненных в духе эмбиента и вкрадчивого даба.
          </p>
          <p>
            Все это вылилось в альбом «Дрёма», выпущенный им в 2025 году на лейбле «Местность» под именем ВСЕСЛАВЪ. «Мне стало важно, чтобы музыка кроме взвинчивания энергии, побуждения к движению тела и мысли, имела терапевтическую ценность. В моем случае процесс написания атмосферных эмбиент-пьес – это средство от повышенной тревожности», — говорит Станислав.
          </p>
          <p>
            В «Дрёме» автору удалось аудиально прописать и образ родного Ленинграда, близлежащих болот и лесов, сакральное и душевное, чистое, из детства. Мистическая, пыльная сепия дворов-колодцев, коммуналок. Шумы, шорохи, скрипы, все таинство мира вещей в одной остановке во времени. Именно там, где небо большинство времени затянуто серыми тучами ощущается тоска по звездным пейзажам, куда автор и отправляет слушателя в ментальное путешествие.
          </p>
          <p>
            И главное — на «Местности» выходит продолжение «Дрёмы» под названием «Полудрёма» из восьми треков-путешествий по космосу, расчеловеченному бытию и поверхностям карстовых микроструктур. Автор обещает слушателям анксиолитический эффект.
          </p>
        </div>
        <div class="row mb-5">
          <div class="col-12 text-center mb-5">
            <NuxtImg
              src="/static/poludryoma_cassette_2.webp"
              alt="Vseslav Poludryoma cassette"
              style="max-width: 70%; height: auto; display: block; margin: 0 auto;"
              format="webp" :quality="85" loading="lazy" />
          </div>
        </div>
        <div class="description text-white mb-5">
          <p>
            Isn't it time to slow down? Life has become overwhelmingly fast-paced, yet we haven't become any happier. Everyone is rushing—afraid of being late, of missing someone, of not having something. In the end, it's not us who control our affairs, but our affairs that control us.
          </p>
          <p>
            In truth, a person needs very little—peace and a sense of inner comfort. Ambient music, as a genre, has a powerful therapeutic effect in this regard. This was something St. Petersburg-based musician Stanislav Sevostyanikhin, known as Dissident and Kontext, realized long ago. Once drawn to the intensity and chaos of drum and bass, he eventually found calm, and now reshapes perception and space through soundscapes rooted in ambient and subtle dub.
          </p>
          <p>
            All of this culminated in the album Drëma, released in 2025 on the Mestnost label under the name Vseslav. "It became important to me that music not only energize or stimulate movement of body and thought, but also carry therapeutic value. For me, the process of composing atmospheric ambient pieces is a way to cope with heightened anxiety," says Stanislav.
          </p>
          <p>
            In "Дрёма" (spelling like "dryoma", feeling—not fully asleep, not fully awake in Russian), the artist manages to sonically capture the image of his native Leningrad—its nearby swamps and forests, the sacred and the intimate, something pure and rooted in childhood. The mystical, dusty sepia of courtyard wells and communal apartments. Noises, rustles, creaks—the entire hidden life of objects suspended in a single moment in time. It is in this place, where the sky is most often covered by grey clouds, that a longing for star-filled landscapes emerges—and it is there that the artist sends the listener on a mental journey.
          </p>
          <p>
            And finally—Mestnost presents the continuation of "Дрёма", titled "Полудрёма" (spelling like "poludryoma", It's a deeper version of дрёма): eight tracks that travel through space, dehumanized existence, and the surfaces of karst microstructures. The artist promises listeners an anxiolytic effect.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useReleaseSeo } from '~/composables/useReleaseSeo'

export default {
  name: 'VseslavPoludryoma',
  setup() {
    useReleaseSeo()
  },
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/--6',
        },
      ],
    }
  },
}
</script>

<style scoped>
.poludryoma {
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
