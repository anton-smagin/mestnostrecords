<template>
  <div class="shinra-banshou w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/shinra_banshou.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">HAJIME KOJIRO</h5>
          <h5 class="text-white"><span>SHINRA BANSHOU</span></h5>
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
          src="/static/hajime_kojiro_face.webp"
          alt="hajime kojiro"
          style="max-width: 70%; height: auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5 mt-5">
        <div class="col-md-6 offset-md-2">
                  <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1903821004/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
        </iframe>
        </div>
      </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            У Хаджиме Коджиро случай не из легких. Прожив 18 лет в живописной префектуре Хёго, и после в Токио еще 13 лет,
            он пришел к выводу: пересадка местности жизненно необходима, поскольку в теле скромного японского самурая обнаружилась рваная рубаха русского гения.
          </p>
          <p>
            Он любит Россию и теперь живет здесь, а еще любит «пиво, коньяк и барабаны»,
            последних он ласково называет детьми, которых у него бесчисленное множество – пока еще Хаджиме
            перевез в Россию только часть своей коллекции. Он носит узкие джинсы, его цвет – всегда solid black,
            он находит вдохновение в шумах, больших и маленьких, участвует в коллаборации «Черные Бояре» и сводит
            дэт-металл с японским кото так нежно, как может только восточный аристократ уровня кугэ.
          </p>
          <p>
            Прописка на «Местности» дала Хаджиме шанс впервые высказаться конструктивно в своей новой транснациональной роли.
            Альбом SHINRA-BANSHOU (на японском название выглядит как 森羅万象) – это 9 крайне интересных работ,
            которые выходят за рамки «просто треков». Автор зашил в них образ вселенной от ее рождения до настоящего и будущего,
            расположив события в хронологическом порядке, если быть точными –  от 13,8 миллиарда лет назад до 10 миллиардов лет где-то впереди.
            Музыка Хаджиме больше напоминает дифференциальные уравнения, которые наш компьютер-мозг конвертирует в музыкальные образы, очень необычные.
            В театре-кабуки играет Burzum, Акира Куросава танцует в костюме Сейлор Мун, а хор хтони нежно поет J-pop.
          </p>
          <p>
            <i>
              «Я думал о том, что квантовая механика существовала всегда сама по себе, теперь мы знаем и теорию относительности,
              и теорию суперструн, можем рассчитать 9 измерений и попытаться уложить в крошечный мозг бесконечность – но парадокс в том, что появились на самом деле мы, а не знания. Из нашего мира мало что видно, но я верю, что квантовые частицы – это наши души, которые перемещаются между
              параллельными вселенными и дают нам возможность постичь то, что недоступно нашей физике»,
            </i> - считает Хаджиме.
            Его душу не постичь из-за трудностей перевода, но музыка – как всегда тот универсальный язык, который дает нам шанс узнать что-то сокровенное, тайком узнанное художником, про вселенную и вечность, не уместившиеся в наших мясных скафандрах.
          </p>
        </div>
        <div class="description text-white mb-5">
          <p>
            Hajime Kojiro's case would be hard for anyone to emulate. Having lived in the picturesque Hyogo Prefecture for 18 years, and another 13 years in Tokyo,
            he came to the following conclusion: a change of locations (or «mestnost» in Russian) was vital, because apparently in the body of a modest Japanese samurai was hiding a torn shirt of a Russian genius.
          </p>
          <p>
            He loves Russia and now lives here. He is also very fond of “beer, cognac and drums.» He affectionately calls the latter his children,
            of which he has countless numbers - so far Hajime has only transported part of his collection to Russia.  He wears skinny jeans, his color is always solid black,
            he derives inspiration from noises, big and small, he is taking part in the “Cherniye Boyare” collaboration and mixes death metal with Japanese koto as tenderly as only an Asian aristocrat of the kuge level can.
          </p>
          <p>
            «Mestnost» residency gave Hajime the chance to speak constructively  in his new transnational role for the very first time.
            The album SHINRA-BANSHOU (in Japanese the name looks like 森羅万象) consists of 9 extremely fascinating works that are so much more than “just tracks”.
            The author encoded an image of the universe from its birth to the present and future into these masterpieces, arranging events in chronological order,
            to be precise from 13.8 billion years in the past to 10 billion years sometime in the future.  Hajime's music is reminiscent of differential equations that our computer brain converts into musical images, very intriguing.
            Burzum plays in the kabuki theater, Akira Kurosawa dances in a Sailor Moon costume, and an intrinsically Russian choir gently sings J-pop.
          </p>
          <p>
            <i>
              "I was thinking that quantum mechanics has always existed as a separate entity, but now that we know both the theory of relativity and the theory of superstrings,
              we can calculate 9 dimensions and try to shove infinity into a tiny brain - but the paradox lies in the fact that it was us that came into existence,  not our knowledge.
              Little can be trully seen in our world, but I believe that quantum particles are our souls that move between parallel universes and give us the opportunity to comprehend what lies beyond and is inaccessible to our physical selves,"
            </i>
            says Hajime. His soul cannot be understood due to the difficulties of translation, but music, as it always does,
            acts as a universal language that gives us a chance to learn something sacred, something that the artist had to use stealth to learn, about the universe and eternity, which are too formidable for our meat spacesuits.
          </p>
        </div>
        <div class="row mb-5">
          <div class="col-md-4 mt-5">
            <NuxtImg
              src="/static/shinra_banshou_cassette_1.webp"
              alt="shinra banshou cassette 1"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
             format="webp" :quality="85" loading="lazy" />
          </div>
          <div class="col-md-4 mt-5">
            <NuxtImg
              src="/static/shinra_banshou_cassette_2.webp"
              alt="shinra banshou cassette 2"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
             format="webp" :quality="85" loading="lazy" />
          </div>
          <div class="col-md-4 mt-5">
            <NuxtImg
              src="/static/shinra_banshou_cassette_3.webp"
              alt="shinra banshou  cassette 3"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
             format="webp" :quality="85" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShinraBanshou',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/shinra-banshou',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/shinra-banshou/1749140760'
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/1OPobs04BGiCpnzcJHINeZ',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/31469612',
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000989014_20989014_e53aa0f44646eca520?act=album',
        },
      ],
    }
  },
}
</script>

<style scoped>
.shinra-banshou {
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
