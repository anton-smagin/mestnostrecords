<template>
  <div class="anderdog-andrey-leto w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/anderdogandreyleto.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Anderdog And Andrey Leto</h5>
          <h5 class="text-white"><span>Romantic Selection</span></h5>
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
          src="/static/anderdogandreyleto_face.webp"
          alt="anderdog and andrey leto"
          style="max-width: 70%; height: auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="col-md-6 offset-md-2">
          <iframe
            style="border: 0; width: 100%; height: 120px"
            src="https://bandcamp.com/EmbeddedPlayer/album=3582880563/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
          </iframe>
        </div>
        <div class="description text-white mb-5">
          <p>
            Резидент лейбла «Местность» Anderdog, автор вдумчивого релиза Sleep
            Paralysis 2021 года, отчасти навеянного борьбой жителей Электростали
            за чистый воздух, записал несколько новых работ. Этот альбом
            Romantic Selection для тех, кто помнит пронзительные интонации sax
            & sex и ностальгирует по фонотеке из компакт-дисков, где затерялся
            альбом I’m Your Baby Tonight Уитни Хьюстон.
          </p>
          <p>
            Сакса вы, конечно, в этой Romantic Selection не услышите, зато
            услышите хэнг, бойко пульсирующий в руках Andrey Leto – музыканта,
            который поднял этот инструмент из разряда полевых «укулеле» в ранг
            профессионального исполнительского мастерства. Andrey Leto также
            известен по коллаборации с Петром Терменом, внуком Льва Термена,
            изобретателя терменвокса, и замысловатому музыкальному диалогу этих
            двух, как оказалось, идеально совместимых инструментов.
          </p>
          <p>
            Romantic Selection - крайне динамичный музыкальный материал, хэнг
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
        <div class="description text-white mb-5">
          <p>
            Anderdog, an artist signed to the Mestnost record label,
            author of the brooding 2021 Sleep Paralysis release loosely inspired
            by the fight of Elektrostal residents for clean air, has recorded several new pieces.
            The Romantic Selection album would be perfect for those who remember the piercing sounds
            of sax & sex and feel nostalgic for CD collections where Whitney Houston’s album I’m Your Baby Tonight got lost in the shuffle.
          </p>
          <p>
            Granted, you will not hear the sax in this Romantic Selection, but you will get a chance to enjoy the sounds of a hang,
            performed with a brisk dancing tempo by Andrey Leto, a musician who raised this instrument from the category of run-of-the-mill
            ukuleles to the rank of professional musical instruments.
            Andrey Leto is also known for his collaboration with Peter Theremin, the grandson of Lev Theremin,
            inventor of the thereminvox, and the intricate musical dialogue of these two, as it turned out, perfectly compatible instruments.
          </p>
          <p>
            Romantic Selection offers highly dynamic musical content; it is obvious that the hang sets the tune and is the core component of all tracks.
            Honestly, there is plenty of romance here. Anderdog does not lose himself in complex sound experiments,
            but instead he skillfully intertwines the beat pumping in pure exaltation with either a trumpet softly thudding off-stage,
            or a pianist accompanying his love fantasies, or samples from our favorite acid archive.
          </p>
          <p>
            If you want to plan a romantic date with some food, a girlfriend, your favorite clothes or a copy of
            lectures on postmodern culture - turn on I Will Always Glitch You or Have You Ever Really Loved Acid, and let Whitney wait.
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/anderdog_leto_cassette_1.webp"
          alt="anderdog leto cassette 1"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/anderdog_leto_cassette_2.webp"
          alt="anderdog leto cassette 2"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/anderdog_leto_cassette_3.webp"
          alt="anderdog leto cassette 3"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
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
