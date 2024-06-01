<template>
  <div class="yella-gin-ya-bil-sputnicom-solnca w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/yella_gin_ya_bil_sputnicom_solnca.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Yella Gin</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Я Был Спутником Солнца</span>
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
    <div class="row">
      <div class="col-md-12 mb-5">
        <img
          src="~/static/yella_gin_face.jpg"
          alt="yella gin"
          width="50%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3356118069/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
          <a href="https://mestnost.bandcamp.com/album/--3">Я Был Спутником Солнца by Yella Gin</a>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Альбом «Я Был Спутником Солнца» написан Александром Yella Gin под впечатлением от просмотра одноименного советского фильма, вышедшего после запуска первого искусственного спутника Земли. Для автора космос – ключевая тема, он объясняет его через события простой человеческой жизни, которые вяжут бесконечный шарф вселенной. ”Я поливаю корни, всего что взросло” - эта цитата из Уолта Уитмена определила суть моего альбома: все, что с нами происходит в жизни – не случайно, из песчинок наших переживаний складывается матрица вселенной», – говорит Александр.
          </p>
          <p>
            Свою новую работу он составил из вспышек воспоминаний собственной жизни, к слову, трек «Юбилейная» посвящен улице детства. Автор связывает все треки в повествование по примеру Pink Floyd и альбома The Wall – музыкальной фрески про  жизнь человека и последовательное движение его жизни.
          </p>
          <p>
            Александр записал альбом в Красноярске, вдохновляясь экспериментальной электроникой и классикой жанра IDM образца 90-х. Гулкие треки с густой как сибирская нефть шумовой пропиткой стали его характерным почерком. Он ставит эксперименты, миксуя звуковые эффекты разных лет, и неизменно вдохновляется космосом – третий альбом, например, был написан им по мотивам книги «Час быка» фантаста Ивана Ефремова.
          </p>
          <p>
            Альбом стал четвертым в творчестве Александра и первым, вышедшем на лейбле «Местность» - предыдущие работы выходили на Monumental records и Raw Russian. Александра можно считать космистом от экспериментальной электроники, возможно – единственным, кто попытался через звук и простоту человеческих переживаний протащить вселенную.
          </p>
          <p>
            <i>Запись и сведение: Yella Gin</i><br>
            <i>Мастеринг: Kokokei</i><br>
            <i>Дизайн: Марго Кобозева</i><br>
            <i>Пресс-релиз: Соня Шпильберг</i><br>
          </p>
          <p class="mt-5">
            The Soviet film “I Was a Satellite of the Sun”, released after the launch of the first artificial Earth satellite, made such a huge impression on Alexander Yella Gin that it even motivated him to create an album of the same name. For the author, space is the key theme; he explains it through the events happening during normal everyday human existence that knit the never-ending scarf of the universe. “‘I moisten the roots of all that has grown’ - this quote by Walt Whitman set the course for my entire album: everything that happens to us in the course of our lifetimes is not accidental, the matrix of the universe is composed of the grains of sand that are our experiences,” says Alexander.
          </p>
          <p>
            His latest creation is woven together from flashes of memories of his own life; as a matter of fact, the track “Yubileinaya” [Milestone] is dedicated to the street from his childhood. The author ropes all the tracks together into a narrative that follows the example of Pink Floyd and their album “The Wall” - a musical fresco about a person’s life and the continuous movement of his life.
          </p>
          <p>
            Alexander recorded the album in Krasnoyarsk, inspired by experimental electronics and classics of the IDM genre of the 90s. Reverberating tracks with a noise saturation as thick as Siberian oil have turned into his signature style. He conducts experiments, mixing sound effects from different years, and invariably draws inspiration from space - for example, his third album is loosely based on the book “The Hour of the Bull” by science fiction writer Ivan Efremov.
          </p>
          <p>
            This album was the fourth in Alexander’s creative career and the first to be released with the “Mestnost” label, his previous releases were done in collaboration with Monumental records and Raw Russian. Alexander can be considered a cosmist enraptured by experimental electronics, perhaps the only person who has ever tried to jam the universe through the sound and the simplicity of human experiences.
          </p>
          <p>
            <i>Recording and mixing: Yella Gin</i><br>
            <i>Mastering: Kokokei</i><br>
            <i>Design: Margo Kobozeva</i><br>
            <i>Press release: Sonya Shpilberg</i><br>
          </p>
        </div>
        <div class="row mb-5 mt-5">
          <div class="col-md-12">
            <div class="description text-white mb-5">
              <p>
                Ты становишься старше, краски тускнеют, трезвость кладет на лопатки мечты, и эйфория юности конвертируется в тихую мудрость.
                Это время, когда пора смаковать жизнь как хорошее вино, растворяя в сердце воспоминания.
              </p>
              <p>
                Свежий релиз «Местности» от Ne Tvoy Drug под названием Xazy – то самое «шато марго», под пробкой которого хранятся сокровенные переживания,
                по прошествии лет ставшие только еще более изысканными. «Я свел и записал этот альбом в 2021 году, с тех пор он стал звучать более размыто и отстраненно,
                для меня это попытка зафиксировать эмоции и забытые воспоминания, а название Xazy отсылает к наивности и чистоте прошлых переживаний», - рассказывает автор альбома Антон Смагин,
                сооснователь Местности, он же Ne Tvoy Drug.
              </p>
              <p>
                Главной музыкальной идеей Xazy стала попытка совместить живые инструменты и электронную музыку.
                Поэтому в треках много гитар, педалей, синтезаторов, перкуссий и отдаленных речитативов, слушая которые хочется надеть футболку с культовым принтом Joy Division и отправиться на концерт любимой построковой группы юности.
                Все это делает альбом очень атмосферным и болезненно искренним. Впрочем, так и должно быть, музыка – самый загадочный проводник к тому, что существует вопреки рациональному.
              </p>
              <p class="mt-5">
                As you get older, the colors start to fade, sobriety snuffs out your dreams, and the
                euphoria of youth slowly transitions into quiet wisdom. This is the time to
                start savoring life like fine wine, setting the memories in your heart free. The
                latest release of the Mestnost label by Ne Tvoy Drug called Xazy is the quintessential
                “Chateau Margaux”, hiding behind its cork the innermost thoughts and feelings
                that over the years have only become more refined. “I mixed and recorded this
                album in 2021. Ever since then, it has begun to sound more obscure and distant.
                For me, it was an attempt to capture emotions and forgotten memories, and the
                name Xazy refers to the naivete and innocence of past experiences,” shares the
                author of the album Anton Smagin, Mestnost co-founder, aka Ne Tvoy Drug.
              </p>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-4 mt-5">
            <img
              src="~/static/yella_gin_cassette_1.jpg"
              alt="yella_gin_cassette_1"
              width="90%"
              height="auto"
            />
          </div>
          <div class="col-md-4 mt-5">
            <img
              src="~/static/yella_gin_cassette_2.jpg"
              alt="yella_gin_cassette_2"
              width="90%"
              height="auto"
            />
          </div>
          <div class="col-md-4 mt-5">
            <img
              src="~/static/yella_gin_cassette_3.jpg"
              alt="yella_gin_cassette_3"
              width="90%"
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YellaGinYaBilSputnicomSolnca',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/--3',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/%D1%8F-%D0%B1%D1%8B%D0%BB-%D1%81%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%BC-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0/1727024753',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/4Lu28BTnwNtYSboqxOqIh3',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/29220669',
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000801733_19801733_060d5b69b447b05a34',
        },
      ],
    }
  },
}
</script>

<style scoped>
.yella-gin-ya-bil-sputnicom-solnca {
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
