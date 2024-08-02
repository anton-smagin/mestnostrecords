<template>
  <div class="dj-headsick-new-life w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/new_life.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">DJ HeadSick</h5>
          <h5 class="text-white">
            <span class="text-nowrap">New Life</span>
          </h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-lg-4 col-md-6 mt-5 text-nowrap"
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
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=229378529/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
          <a href="https://mestnost.bandcamp.com/album/new-life">New Life by DJ HeadSick</a>
        </iframe>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mb-5">
        <img
          src="~/static/dj_headsick_face.jpg"
          alt="dj headsick"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Dj HeadSick – это музыкант Коля Долгов, участник проектов Пайта и Проделки Больной Головы. Его новый альбом New Life – отформатированный и спрессованный кубик огромного количества переживаний, воспоминаний, боли и смирения. Но это красиво, потому что только поэты умеют просто ставить картинку на паузу и созерцать прожитый момент, каким бы он ни был. «Совсем не важно, по каким причинам что-то в жизни меняется – важно уметь находить в себе силы принимать любой исход, и хороший, и плохой» — говорит Коля.
          </p>
          <p>
            Альбом New Life – про жизнь, про большие перемены, про отношения и, конечно, про места. В нем охвачена большая география – рождение в Мурманске, детство в Севастополе, учеба в Краснодаре, переезд в Москву, связанный с вспыхнувшим интересом к музыке и ее языку.
          </p>
          <p>
            «В этот альбом запечатаны свет и надежда, боль и обиды, огромная любовь», – рассказывает автор. Слушая альбом, будто читаешь «Детство» Толстого, только все это про Колю. Вот он смотрит мультик «Котенок по имени Гав», вот влюбляется, вот впервые слушает джангл, вот теряет жизненные опоры и снова находит их в глубоком ломаном бите – и тот не подведет. – «Может слишком много поэзии моих в словах, но такая уж моя правда», остальное про Колю расскажут мелодии и ритмы.
          </p>
          <p><i>Запись и сведение: DJ HeadSick</i></p>
          <p><i>Мастеринг: Kokokei</i></p>
          <p><i>Обложка и дизайн кассеты: Morgoblin</i></p>
          <p><i>Пресс-релиз: Соня Шпильберг</i></p>
          <p class="mt-5">
            Dj HeadSick is a musician Kolya Dolgov, a member of projects "Payta" and "Prodelki Bolnoy Golovy". His new album New Life is a formatted and pressed cube of great lot of experiences, memories, pain, and placidity. But it's beautiful because only poets can simply make any picture pause and contemplate on any moment, no matter what it’s like.
          </p>
          <p>
            "It doesn't matter why something changes in life – what's important is finding the strength to accept any outcome, both good and bad," says Kolya.
          </p>
          <p>
            The album New Life is about life, big changes, relationships, and about different places, of course. It covers wide geography – being born in Murmansk, spending childhood in Sevastopol, studying in Krasnodar and then moving to Moscow due to a glowing interest in music and its language.
          </p>
          <p>
            "This album is packed with light and hope, pain and offences, and immense love," says the author. Listening to the album is like reading Tolstoy's "Childhood," but it's all about Kolya. Here he is watching the cartoon "Kotenok po imeni Gav", here he is falling in love, here he is listening to jungle music for the first time, here he is losing his life's foundations and finding them again in deep broken beats.
          </p>
          <p>
            "Maybe there's too much poetry in my words, but that's just my truth as it is" The rest about Kolya will be told by his melodies and rhythms.
          </p>
          <p><i>Recording and mixing: DJ HeadSick</i></p>
          <p><i>Mastering: Kokokei</i></p>
          <p><i>Design: Morgoblin</i></p>
          <p><i>Press release: Соня Шпильберг</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewLife',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/new-life',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/new-life/1756215617',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/4p1T5148mbyZCTqxCm161Y'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/32220580'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000347780_21347780_439400ec0ae52cb597?act=album'
        },
      ],
    }
  },
}
</script>

<style scoped>
.dj-headsick-new-life {
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
