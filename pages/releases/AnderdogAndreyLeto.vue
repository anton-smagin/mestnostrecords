<template>
  <div class="anderdog-andrey-leto w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="/anderdogandreyleto.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Anderdog And Andrey Leto</h5>
          <h5 class="text-white"><span>Romantic Selection</span></h5>
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
        <nuxt-img
          src="/anderdogandreyleto_face.jpg"
          alt="anderdog and andrey leto"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Резидент лейбла «Местность» Anderdog, автор вдумчивого релиза Sleep
            Paralysis 2021 года, отчасти навеянного борьбой жителей Электростали
            за чистый воздух, записал несколько новых работ. Этот альбом
            Romantic Collection для тех, кто помнит пронзительные интонации sax
            & sex и ностальгирует по фонотеке из компакт-дисков, где затерялся
            альбом I’m Your Baby Tonight Уитни Хьюстон.
          </p>
          <p>
            Сакса вы, конечно, в этой Romantic Collection не услышите, зато
            услышите хэнг, бойко пульсирующий в руках Andrey Leto – музыканта,
            который поднял этот инструмент из разряда полевых «укулеле» в ранг
            профессионального исполнительского мастерства. Andrey Leto также
            известен по коллаборации с Петром Терменом, внуком Льва Термена,
            изобретателя терменвокса, и замысловатому музыкальному диалогу этих
            двух, как оказалось, идеально совместимых инструментов.
          </p>
          <p>
            Romantic Collection - крайне динамичный музыкальный материал, хэнг
            здесь явный запевала и стержневой компонент всех треков.
            Действительно, романтизма здесь предостаточно, поскольку Anderdog не
            пускается в сложные звуковые эксперименты, а на мячики скачущего в
            экзальтации бита нанизывает то простые аккордовые педали, то
            засурдиненную трубу, играющую из-за пыльных кулис, то пианиста,
            аккомпанирующего своим любовным фантазиям, то семплы из нашего
            любимого acid-архива. Но первая скрипка – всегда хэнг Андрея Лето.
          </p>
          <p>
            Если хотите устроить себе романтическое свидание c едой, девушкой,
            любимыми шмотками или томиком лекций по культуре постмодерна –
            включайте I Will Always Glitch You или Have You Ever Really Loved
            Acid, и пусть Уитни подождет.
          </p>
        </div>
        <div class="col-md-6 offset-md-2">
          <iframe
            style="border: 0; width: 100%; height: 120px"
            src="https://bandcamp.com/EmbeddedPlayer/album=3582880563/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://mestnost.bandcamp.com/album/romantic-selection"
              >Romantic Selection by Anderdog, Andrey Leto</a
            >
          </iframe>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <nuxt-img
          src="/anderdog_leto_cassette_1.jpg"
          alt="anderdog leto cassette 1"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <nuxt-img
          src="/anderdog_leto_cassette_2.jpg"
          alt="anderdog leto cassette 2"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <nuxt-img
          src="/anderdog_leto_cassette_3.jpg"
          alt="anderdog leto cassette 3"
          width="90%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnderdogAndreyLeto',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/romantic-selection',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ru/album/romantic-selection/1632608414',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/4sLcaHc8bzev9lkSzHtP6O',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/22916641',
        },
      ],
    }
  },
}
</script>

<style scoped>
.anderdog-andrey-leto {
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

.shadowed {
  color: lightgrey;
  font-size: 0.8em;
}
</style>
