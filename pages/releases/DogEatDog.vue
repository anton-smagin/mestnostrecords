<template>
  <div class="anderdog-dog-eat-dog w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img src="/static/anderdog_dog_eat_dog.jpg" width="80%" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Anderdog</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Dog Eat Dog</span>
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
        <img
          src="/static/anderdog_face_dog_eat.jpeg"
          alt="anderdog"
          width="50%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3552478308/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            "Dog Eat Dog" — четвертый релиз от резидента “Местности” — Андердога.
          </p>
          <p>
            Помимо сольного творчества, Денис пишет музыку в объединении Microdog и регулярно отмечается хлёсткими ремиксами и фитами с различными артистами. Например, с хэнгистом Андреем Лето и музыкантом Mi Croevkhas.
          </p>
            Этот релиз — работа о личном и внутреннем. Микрокосм, в котором навсегда запечатлелись мысли и чувства артиста относительно событий текущего года.
            Жизнь и смерть, утрата и принятие, животная природа человека и справедливость — темы, которые будто застыли в невесомости и не собираются оттуда исчезать.
          <p>
            Каждый из 10 треков альбома — попытка осмыслить извечные вопросы бытия. Узнаваемое звучание Дениса здесь словно ракета, продирающаяся сквозь космическое полотно. Одиссея обещает быть захватывающей: дабовые партии сменяются джанглом, acid сосуществует с духовыми и клавишными, легкость с изобилием звуковых частиц, а грув — с лирикой. Последней, впрочем, здесь пропитано всё.
          </p>
          <p>
            Наконец, это символическая история о том, как собака, подобно уроборосу, замерла в необъятном пространстве, где есть только один маршрут — бесконечный цикл жизни и смерти.
          </p>
          <p class="mt-5">
            "Dog Eat Dog" is the fourth release from the "Mestnost" resident - Underdog.
          </p>
          <p>
            In addition to his solo work, Denis writes music as part of the Microdog collective and regularly stands out with sharp remixes and collaborations with various artists. For example, with the hang player Andrei Leto and musician Mi Croevkhas.
          </p>
          <p>
            This release is a reflection on the personal and internal. A microcosm in which the thoughts and feelings of the artist regarding the events of the current year are forever captured. Life and death, loss and acceptance, the animal nature of humans, and justice - themes that seem to have frozen in weightlessness and show no signs of disappearing from there.
          </p>
          <p>
            Each of the 10 tracks on the album is an attempt to comprehend the eternal questions of existence. Denis's recognizable sound here is like a rocket breaking through the cosmic fabric. The odyssey promises to be captivating: dub parts are replaced by jungle, acid coexists with brass and keyboards, lightness with an abundance of sound particles, and groove with lyrics. In fact, everything here is infused with the latter.
          </p>
          <p>
            Finally, it is a symbolic story of how, like the Ouroboros, the dog froze in the vast space where there is only one route - the endless cycle of life and death.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnderdogKelgoma',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/dog-eat-dog',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/dog-eat-dog/1714724006',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/0rs0Zj9fw7z3AGTp3BnJOd?si=w7cCCfP_SyWx8jnKXd4nOg',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/28046504',
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000222187_19222187_e5159173d3ff461394?act=album',
        },
      ],
    }
  },
}
</script>

<style scoped>
.anderdog-dog-eat-dog {
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
