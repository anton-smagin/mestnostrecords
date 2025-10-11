<template>
  <div class="dubree-ratio-et-caritas w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img src="/static/dubree_ratio_et_caritas.jpg" width="80%" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Dubree</h5>
          <h5 class="text-white"><span>Ratio et Сaritas</span></h5>
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
          src="/static/dubree_face.jpg"
          alt="Dubree"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="col-md-6 offset-md-2">
          <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2093166359/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
          </iframe>
        </div>
        <div class="description text-white mb-5">
          <p>
            Виталий Dubree — артист из Черноголовки, города-наукограда в Московской области, где живут самые разные ученые. А что они делают в свободное время? Конечно же — грезят о звездах. Виталий жил среди этих грез, с детства был влюблен в космос, смотрел и пересматривал фильмы о путешествиях на другие планеты, зачитывался научной фантастикой. Однажды вместе с черноголовским астрономом, который установил на улице десяток телескопов и предложил жителям заглянуть в космос, Виталий устроил перформанс — вынес лэптоп, колонки и включил эмбиент. В этот вечер звезды стали ближе, а Вселенная поселилась в его творчество навсегда.
          </p>
          <p>
            Свой новый релиз на лейбле «Местность» Dubree посвятил извечной дихотомии человек-космос. Альбом носит латинское название Ratio et Caritas, что в переводе означает «разум и любовь», и отражает оба взгляда на мироздание — научный и эмоциональный. Латинский язык был выбрал как универсальный, это — своего рода знак, позволяющий людям всего мира из разных научных направлений понимать друг друга.
          </p>
          <p>
            Материал для автора не слишком характерный, даже экспериментальный — дело в том, что творчество Dubree тесно связано с жанром дабтехно, в рамках которого артист работает с лейпцигским лейблом Insectorama. Однако альбом Ratio et Caritas выдержан в жанре интеллектуальной электроники с заходами в берлин шуле и электро. Композиции сохранили размеренность и дабовую пульсацию, при этом сильно окрасились эмоционально и получили нехарактерное для даба внутреннее развитие.
          </p>
          <p>
            Dubree часто обращается к ностальгической ноте — в каждом треке можно услышать семплы, отсылающие к тому или иному советскому фильму в жанре научной фантастики.
          </p>
          <p>
            «В поисках своего звучания меня вдохновляли 70-е годы прошлого века: тут тебе и расцвет даба, и становление электронной музыки, которая только спустя десятилетия будет называться таковой, и пилотируемые космические полеты, и развитие кинофантастики — порой, до нелепого наивной», — рассказывает Виталий. В результате он получил зашитый в звуке баланс эпохи — минималистичный, медитативный и местами ламповый вайб уложен в четкую форму и пропитан смыслами, которые глубоко волнуют эмоционально. Даже сейчас, в эпоху ИИ и «блуда с материей», мы втайне мечтаем о том, чтобы сбежать в идеальный мир — для этого достаточно просто надеть наушники и услышать его.
          </p>
          <p class="mt-4">
            Recorded, mixed and mastered by <i>Dubree</i><br/>
            Cover and cassette design by <i>Margo Kobozeva</i><br/>
            Press-release by <i>Sonya Spielberg</i>
          </p>
        </div>
        <div class="row mb-5">
          <div class="col-md-12">
            <img
              src="/static/ratio_et_caritas_cassette.jpeg"
              alt="Ratio et Caritas cassette"
              width="70%"
              height="auto"
            />
          </div>
        </div>
        <div class="description text-white mb-5">
          <p>
            Vitaliy Dubree - An artist from Chernogolovka, a town of science in the Moscow Region, home to a diverse community of scientists. What do they do in their free time? They dream of the stars, of course. Vitaliy grew up surrounded by these dreams; since childhood, he has been in love with space, watching films about travels to other planets over and over again, and devouring science fiction literature. Once, together with a local astronomer who set up a dozen telescopes on the street and invited residents to peer into the cosmos, Vitaliy staged a performance - he brought out a laptop and speakers and played ambient music. That evening, the stars felt closer, and the universe found a permanent home in his art.
          </p>
          <p>
            His new release on the label Mestnost is dedicated to the eternal dichotomy of man versus cosmos. The album bears the Latin title Ratio et Caritas, which translates to "Reason and Love," reflecting both scientific and emotional perspectives on the universe. Latin was chosen as a universal language - a kind of symbol that allows people from all over the world, across different scientific fields, to understand each other.
          </p>
          <p>
            The material is somewhat uncharacteristic and even experimental for the artist. The thing is, Dubree's work is closely tied to the dub techno genre, under which he releases music on the Leipzig-based label Insectorama. However, the album Ratio et Caritas is crafted in the style of intelligent electronica with forays into Berlin School and electro. The tracks retain the measured pace and dub pulsation while becoming deeply emotional and developing an internal narrative unusual for dub.
          </p>
          <p>
            Dubree often strikes a nostalgic note - each track contains samples that reference various Soviet-era science fiction films.
          </p>
          <p>
            "In searching for my sound, I was inspired by the 1970s: you had the blossoming of dub, the emergence of electronic music (which would only be recognized as such decades later), manned space flights, and the development of sci-fi cinema—sometimes naively absurd," says Vitaliy. The result is a sound that captures the balance of that era: a minimalist, meditative, and at times warm, 'analog' vibe is structured into a clear form and infused with meanings that resonate on a deep emotional level. Even now, in the age of AI and technological excess, we secretly dream of escaping to an ideal world - and all it takes is putting on headphones to hear it.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DubreeRatioEtCaritas',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/ratio-et-caritas',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/us/album/ratio-et-сaritas/1841967048',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/7KDnJqDtb3EBwBMXlBrQl0',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.com/album/38371120',
        },
        {
          name: 'VK',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000358749_25358749_64dae3815a5de6fd97',
        }
      ],
    }
  },
}
</script>

<style scoped>
.dubree-ratio-et-caritas {
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
