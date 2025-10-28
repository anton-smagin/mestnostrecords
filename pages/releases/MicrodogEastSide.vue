<template>
  <div class="microdog-east-side w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/microdog.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Microdog</h5>
          <h5 class="text-white"><span>East Side of the Breaktown</span></h5>
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
          src="/static/microdog_face.webp"
          alt="microdog"
          style="max-width: 70%; height: auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="col-md-6 offset-md-2">
          <iframe
            style="border: 0; width: 100%; height: 120px"
            src="https://bandcamp.com/EmbeddedPlayer/album=4259941700/size=large/bgcol=333333/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
            seamless
          ></iframe
          >
        </div>
        <div class="description text-white mb-5">
          <p>
            Как мы знаем, столицы не всегда правят балом. Масса ключевых
            проектов электронной сцены вышли с окраин, таких как Бристоль и
            Ромфорд в UK. К чему это? К Электростали. Городу, который воспитал
            авторов – участников дуэта Microdog, коллаборации Anderdog и Mi
            Croevkhas. Ребята практикуют джангл, басово-дабовые вибрации в
            IDM-формате, пишут сочные треки с многообразным битом.
          </p>
          <p>
            Название ЕР – East Side of the Breaktown. Треки крепко держат вайб:
            Shelf звучит так, будто из Криса Кларка выселилась юродствующая душа
            Шостаковича, а вместо нее въехал со всеми вещами Петр Ильич
            Чайковский. В Icid, анаграмме icy и acid, альпеншток усердно рубит
            ледяную твердь, за которой алиены наверняка проводят вечеринку.
            Chukhloma Muds стал IDM-даб-воспоминанием о совместно проведенном
            авторами опенэйре. О, да, чудесными были эти доковидные времена.
          </p>
          <p>
            Трек Mystik Spiral возвращает нас в детство родителей, в миры «Тайны
            третьей планеты» с ее громозеками, глотами, зеркальными подсолнухами
            и говорящими птицами (а его название отсылает к группе из сериала
            «Дарья», от которого в тинейджерские годы фанатели участники дуэта).
            В общем, готовьтесь пружинить на воздушных пузырях ломаных битов,
            летать на мухоморах-зонтиках в космос и нежиться в целебной грязи
            костромских рейвов.
          </p>
          <p>
            Релиз, однако, ломает не только биты, но и стереотипы, по причине
            которых мы любим мелодии больше, чем drums – время пробуждающих
            пощечин. В качестве бонуса в кассетном издании будет представлен
            трек Green Funk, трек, который ребята делали для конкурса
            Greenpeace, в нем очень много жизни. Увидимся на облаках, в раю
            ломаных ритмов.
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/microdog_cassette_1.webp"
          alt="microdog cassette 1"
          style="display: block; width: 80%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/microdog_cassette_2.webp"
          alt="microdog cassette 2"
          style="display: block; width: 80%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/microdog_cassette_3.webp"
          alt="microdog cassette 3"
          style="display: block; width: 80%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MicrodogEastSide',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/east-side-of-the-breaktown',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/album/1611436473',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/0hz2eBqxt2aQ12tP4OideU',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/21595457',
        },
      ],
    }
  },
}
</script>

<style scoped>
.microdog-east-side {
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
