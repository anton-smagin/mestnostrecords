<template>
  <div class="bosporus-accident w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img src="/static/bosporus_accident.jpg" width="80%" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Raveny x Morphtables</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Bosporus Acident</span>
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
          src="/static/raveny_morphtables_face.jpg"
          alt="yella gin"
          width="50%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=539927158/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            «Bosporus Acident» — релиз, который мог и не случиться, если бы не цепочка определенных закономерностей.
          </p>
          <p>
            Колоду событий случай перетасовал так, что Паша (Morphtables) и Артём (Raveny) пересеклись в 2023 году на берегу Босфора, обменялись железками и устроили живой IDM-джем.
          </p>
          <p>
            “Все просто: у нас собой были инструменты и желание поджемить. Мы сыграли 3 сета по часу и вытянули из них, на наш взгляд, самое интересное. Неизвестно, при каких обстоятельствах мы еще сможем встретиться. Этот мини-альбом — результат счастливых случайностей, простоты момента и музыкальных экспериментов”.
          </p>
          <p>
            Первый трек “Heatwave Treatment” — как тепловая волна, медленно заполняющая собой всю атмосферу. То и дело слышится, как она то достигает своих пороговых значений, то затихает. Здесь музыканты и использовали Reaktor и пропустили Roland TB-303 через эффекты в Зое.
          </p>
          <p>
            Второй трек “Seabird Perspective” — более воздушный, мягкий и пространственный. Будто воздух, который рассекает птица, совершая свой высокий и затяжной полет.
          </p>
          <p>
            Третий трек “The Last Acid Dream Of A Caterpillar” говорит сам за себя: последний сон, который видит гусеница, густо утопает в кислотном облаке.
          </p>
          <p class="mt-5">
            "Bosporus Accident" is a release that could have not happened if it weren't for a certain chain of events.
          </p>
          <p>
            A series of random occurrences shuffled the deck of events in such a way that Pasha (Morphtables) and Artem (Raveny) crossed paths in 2023 on the shores of the Bosphorus, exchanged gear, and organized a live IDM jam session.
          </p>
          <p>
            "It's simple: we had the tools and the desire to jam. We played 3 one-hour sets and extracted from them what we found most interesting. It's unknown when we'll be able to meet again under similar circumstances. This mini-album is the result of fortunate coincidences, the simplicity of the moment, and musical experiments."
          </p>
          <p>
            The first track, "Heatwave Treatment," is like a heatwave slowly filling the atmosphere. You can hear it reaching its threshold values and then subsiding. Here, the musicians used Reaktor and ran Roland TB-303 through effects in Zoe.
          </p>
          <p>
            The second track, "Seabird Perspective," is more airy, soft, and spacious. It's like the air that a bird cleaves through as it makes its high and drawn-out flight.
          </p>
          <p>
            The third track, "The Last Acid Dream Of A Caterpillar," speaks for itself: the last dream a caterpillar has, thickly submerged in an acidic cloud.
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <img
          src="/static/bosporus_accident_cassette_1.jpg"
          alt="bosporus_accident_cassette_1"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="/static/bosporus_accident_cassette_2.jpg"
          alt="bosporus_accident_cassette_1"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="/static/bosporus_accident_cassette_3.jpg"
          alt="bosporus_accident_cassette_3"
          width="90%"
          height="auto"
        />
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
          link: 'https://mestnost.bandcamp.com/album/bosporus-acident'
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/bosporus-acident/1730129277'
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/5uDaDTyiXkMxlkPz2UNPgO'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/29563476'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000154989_20154989?act=album'
        },
      ],
    }
  },
}
</script>

<style scoped>
.bosporus-accident {
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
