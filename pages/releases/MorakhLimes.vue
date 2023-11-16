<template>
  <div class="morakh-limes w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/morakh.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Morakh</h5>
          <h5 class="text-white"><span>Limes</span></h5>
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
          src="~/static/morakh_face.jpg"
          alt="morakh"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="col-md-6 offset-md-2">
          <iframe
            style="border: 0; width: 100%; height: 120px"
            src="https://bandcamp.com/EmbeddedPlayer/album=144619080/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://mestnost.bandcamp.com/album/limes"
              >Limes by Morakh</a
            >
          </iframe>
        </div>
        <div class="description text-white mb-5">
          <p>
            На «Местности» возникла новая геолокация – город Подольск и его
            житель Валера Morakh. Автор создает партитуры своих треков из
            гулкого, гипнотизирующего бита, барабанных речитативов и мелодики
            стародавних времен, когда музыка была магией.
          </p>
          <p>
            Вайб ключевых треков вдохновлен индустриальной историей города и
            снами его усталых жителей о танцах у костра в пестрых одеждах
            африканских племен.
          </p>
          <p>
            Автор называет свои работы «урбанистическим техно», изрядно
            изломанным как судьба подростка из микрорайона «Кузнечики». Morakh
            удается объединить любимую всеми нами хтонь русских городов и
            шаманскую, первобытную гармонию небесных сфер, которую мы забыли в
            электричке где-то по пути к постмодерну.
          </p>
          <p>
            Слушая качающие репетиции в ‘Way’, легко вспомнить легендарных Deep
            Forest и Enigma, а трек ‘Limes’ на арматурном гуле и пружинящих
            синкопах драм-машины навевает воспоминания о лучших постановках
            Центра Мейерхольда, где гастарбайтеры танцуют свое техно
            бетономешалок в декорациях стройки.
          </p>
          <p>
            В ‘RDMZ’ кадансирующие станки подольского машиностроительного
            вступают в полифонию с криками заводских рабочих, а может – это
            восклицают во сне женщины первобытных племен, которым грезится
            капитализм. ‘Shaman’ транслирует африканские кущи, где поют сверчки
            и камлают угандийские шаманы. Там электричка ЭР-2 мчится в саваннах
            среди носорогов и женщин в цветастых платьях, а усталые подольские
            рабочие дремлют на жестких деревянных сиденьях возле окон,
            убаюканные дрожью колес, им снится теплый песок.
          </p>
          <p>
            Работы Morakh можно слушать в качестве путешествовия по мирам, куда
            не продаются билеты. Это сакральная тоска Питера Гэйбриела, вошедшая
            в контакт с машиностроительным заводом им. Орджоникидзе, кармой
            мятежных мэров-уголовников и тощими воробьями из талалихинского
            парка.
          </p>
          <p>
            Ремиксы для релиза делали Kokokei, Ne tvoy drug, Glupyshka и
            Anderdog.
          </p>
        </div>
        <div class="description text-white mb-5">
          <p>
            A new object - the entire city of Podolsk and specifically one of its residents Valera Morakh – just showed up on the radar at our “Mestnost”
            [the name of the record label “Mestmost” literally means location in Russian].
            The author brings the sheet music of his songs to life with a hypnotic beat and the hustle and bustle
            of post-industrial echoes that resonate through the history of his city.
          </p>
          <p>
            According to Morakh, the genre that best describes his tracks is Urban Techno. He manages to both perfectly capture the chtonic
            realia of the Russian cities, which can be scary and absurd, but undeniably idiosyncratic,
            and convey the shamanic, primitive harmony of the celestial spheres that we’ve been missing since before the postmodernity period.
          </p>
          <p>
            The enthralling and all-consuming repetitive sequences in “Way” are reminiscent of the legendary Deep Forest and Enigma,
            and the track “Limes” using the hum and bouncy syncopation of a drum machine evokes memories of the best productions
            of the Meyerhold Center, where illegal migrant workers dance to their own tune of techno concrete mixers in the middle of the construction site.
          </p>
          <p>
            In the “RDMZ”, the cadence of machine tools at the Podolsk Car Factory clashes with the shouts of factory workers creating
            the perfect polyphony, or maybe it’s the sounds of primitive tribal women crying out in their sleep while dreaming about capitalism.
            “Shaman” transports you to the African wilderness, where crickets chirp and Ugandan shamans commune with the spirits.
            There, in the land of rhinos and women wearing brightly colored dresses, the ER-2 electric train whisks passengers through the savannah,
            while exhausted Podolsk factory workers doze off on uncomfortable wooden benches near the windows. Lulled to sleep by the rumble of wheels, they dream of warm sand.
          </p>
          <p>
            Morakh’s music will take you on a journey through the faraway and mystical worlds. In his songs,
            the sacred sadness of Peter Gabriel meets the Ordzhonikidze Car Factory and malnourished sparrows from the Talalikhin Park.
          </p>
          <p>
            The release includes remixes from Kokokei, Ne tvoy drug, Glupyshka and Anderdog.
            The release also will be available on limited edition cassettes 30 copies
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <img
          src="~/static/morakh_cassette_1.jpg"
          alt="morakh cassette 1"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="~/static/morakh_cassette_2.jpg"
          alt="morakh cassette 2"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="~/static/morakh_cassette_3.jpg"
          alt="morakh cassette 3"
          width="90%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MorakhLimes',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/limes',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ru/album/limes/1629759488',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/36xRrbdkALsaul9ELsjreQ',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/22917650',
        },
      ],
    }
  },
}
</script>

<style scoped>
.morakh-limes {
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
