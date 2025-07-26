<template>
  <div class="anderdog-dog-remix-dog w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img src="/static/dog_remix_dog.jpg" width="80%" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Anderdog</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Dog Remix Dog</span>
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
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=239819616/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            "Dog Remix Dog" — сборник ремиксов на альбом Anderdog "Dog Eat Dog", который вышел на “Местности” в ноябре 2023 года.
          </p>
          <p>
            Сборник состоит из 21 трека, среди которых есть ремикс от британского музыканта AEVA, три микса от Ambidextrous, в том числе его диско-ремикс под аллиасом Demolition Knight Disco, и пост-панк VIP Mix от самого Андердога.
            К микрокосму “собаки, кусающей себя за хвост” также присоединились такие приглашенные артисты как Raumskaya, Produsserka, Alterleo, Fedor Vetkalov, nooMoon, Anton Take, Man As Island, dj_balanov и No Rules, а также резиденты лейбла: Morakh, Ne Tvoy Drug, Kokokei, Andrey Rasputin, Morphtables, Raveny, и Mi Croevkhas.
          </p>
          <p>
            Релиз доступен для бесплатного скачивания на Bandcamp  — для этого поставьте “0” в окне "Name your price".
          </p>
          <p class="mt-5">
            "Dog Remix Dog" is a collection of remixes for the album "Dog Eat Dog" by Anderdog, released on "Mestnost" in November 2023.
          </p>
          <p>
            The collection consists of 21 tracks, including a remix by British musician AEVA, three mixes by Ambidextrous, including his disco remix under the alias Demolition Knight Disco, and a post-punk VIP Mix by Anderdog himself. Invited artists such as Raumskaya, Produsserka, Alterleo, Fedor Vetkalov, nooMoon, Anton Take, Man As Island, dj_balanov, and No Rules, as well as label residents: Morakh, Ne Tvoy Drug, Kokokei, Andrey Rasputin, Morphtables, Raveny, and Mi Croevkhas, have also joined the microcosm of the "dog biting its own tail."
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnderdogDogRemixDog',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/dog-remix-dog',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/dog-remix-dog/1732851408',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/4FjUS9T2Ihr2EMbL3n5x5q?si=0ZoPGzIhRee30N9pmlG1XQ'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/29901140'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000081221_20081221?act=album'
        },
      ],
    }
  },
}
</script>

<style scoped>
.anderdog-dog-remix-dog {
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
