<template>
  <div class="ne-tvoy-drug-xazy w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img src="/static/xazy.jpg" width="80%" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Ne Tvoy Drug</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Xazy</span>
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
          src="/static/ne_tvoy_drug_face.jpg"
          alt="Ne Tvoy Drug"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3610587038/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
        </iframe>
      </div>
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
          src="/static/xazy_cassette_1.jpg"
          alt="xazy_cassette_1"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="/static/xazy_cassette_2.jpg"
          alt="xazy_cassette_2"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="/static/xazy_cassette_3.jpg"
          alt="xazy_cassette_3"
          width="90%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NeTvoyDrugXazy',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/xazy',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/4fCK1iv4ayuFa9zxYpyN3x?si=PB5bddifQkG_RwklXyFQbg'
        },
        {
          name: 'Apple',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/xazy-ep/1695709748'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/25649512'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000871493_17871493_03158b00f9c6ebe8d9'
        },
      ],
    }
  },
}
</script>

<style scoped>
.ne-tvoy-drug-xazy {
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
