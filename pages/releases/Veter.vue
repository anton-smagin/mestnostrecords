<template>
  <div class="ne-tvoy-drug-veter w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/veter.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Ne Tvoy Drug</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Veter</span>
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
          src="~/static/ne_tvoy_drug_face_2.jpg"
          alt="Ne Tvoy Drug"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4182457386/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless>
          <a href="https://mestnost.bandcamp.com/album/veter">
            Veter by Ne Tvoy Drug
          </a>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Альбом «Ветер» Антон Ne Tvoy Drug писал не дома. Это было впервые.
            Под рукой не оказалось привычной студии, только наушники, два
            полумодульных синтезатора, сэмплер и кавказский хребет за окном –
            Тбилиси. Материал выходил непредсказуемым и свежим. Как ветер.
            Неопределенность и спонтанность пришлись автору по душе, новый
            инструментарий и незнакомый город прописались внутри каждого
            трека, добавили альбому особую атмосферу и даже интимность.
            «Ветер» не предназначен для танцполов, считает Антон. При этом
            танцевальные элементы рассыпаны в альбоме довольно щедро, но
            деликатно – упругость бита скорее напоминает кошачьи лапы, чем
            техничную бочку.
          </p>
          <p>
            Для Ne Tvoy Drug релиз стал особым еще по одной причине.
            Антон является сооснователем «Местности» и новый альбом на
            родном лейбле считает дружеской коллаборацией - материал для
            релиза сводил его коллега Костя Kokokei. Обложку придумала
            художница Рита Черепанова. «Постер с перелетными птицами можно
            назвать метафорой этого периода моей жизни – путешествия из
            Москвы в Тбилиси и потом в Белград», - делится Антон. «Ветер» стал
            для него результатом поиска нового места, звука, способов
            коммуникации с окружающим миром, и география, как в жизни
            любого художника, послужила для этого богатой пищей.
          </p>
          <p class="mt-5">
            Anton Ne Tvoy Drug did not write the album “Wind” at home. This was the
            first time he found himself in a situation like this. The studio that he grew
            so accustomed to was nowhere in sight, he only had his headphones, two
            semi-modular synthesizers, a sampler and the Caucasus Mountains
            outside the window – Tbilisi. The material that he came up with turned out
            to be both unpredictable and fresh. Not unlike the wind. All that
            uncertainty and spontaneity stroke a chord with the author; the new
            instruments and the vibe of the unfamiliar city were imprinted on each
            track, adding a special atmosphere and even intimacy to the album. As
            Anton sees it, “Wind” is not intended for dance floors. That said, dance
            elements are still scattered through the album quite generously, albeit
            delicately – the elasticity of the beat is more reminiscent of cat paws than a
            technical kick.
          </p>
          <p>
            There was another reason why this release was so special for Ne Tvoy Drug.
            Anton is a co-founder of the “Mestnost” label and he views this new album
            on his native label as a collaboration between friends. The material for the
            release was mixed by his colleague Kostya Kokokei. The cover was created
            by the artist Rita Cherepanova. “One could call the poster with migratory
            birds a perfect metaphor for this period of my life – a journey fromMoscow
            to Tbilisi and then to Belgrade,” Anton shares. For him, “Wind” became the
            embodiment of his search for a new place, sound, and ways of
            communicating with the outside world, and, as in the life of any artist,
            geography proved to be a plentiful source of inspiration.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NeTvoyDrugVeter',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/veter',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/3Onl48ztqytbWVR5AFFKFT?si=24j21VhVTYqzV1dbFZOb-Q',
        },
        {
          name: 'Apple',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/veter-ep/1783645888'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/34334210'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000689138_22689138_647bd77ed9c803cae4'
        },
      ],
    }
  },
}
</script>

<style scoped>
.ne-tvoy-drug-veter {
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
</style>
