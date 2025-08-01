<template>
  <div class="andrey-rasputin-relikt1 w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img src="/static/relikt_1.jpg" width="80%" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Andrey Rasputin</h5>
          <h5 class="text-white"><span>RELIKT-1</span></h5>
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
          src="/static/rasputin_face_relikt_1.jpg"
          alt="Andrey Rasputin"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="col-md-6 offset-md-2">
          <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1418889592/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
          </iframe>
        </div>
        <div class="description text-white mb-5">
          <p>
            Кибернетика, позитронный двигатель, аннигиляция и космическая дача в паре парсеков от Марса. Взгляд на космос из ХХ века — коллекционная диковина, 
            сплавленная из научной фантастики и инженерных прорывов. Новый альбом «Реликт-1» от Андрея Распутина посвящен этому 
            «винтажному» феномену: ускользающей мечте о выходе человека за пределы земных проблем, в реальность цифр и бесконечность возможностей. 
          </p>
          <p>
            Название релиза — отсылка к первому эксперименту по изучению реликтового излучения, проведенному в 1980-х годах в СССР. 
            Тогда были созданы уникальные спутники серии «Прогноз», способные передавать данные в режиме реального времени в течение длительного периода. 
            С их помощью начались исследования взаимодействия между Солнцем и Землей — например, уровня радиации и влияния солнечного ветра на атмосферу планеты. 
            Теорию о существовании реликтового излучения предложил в 1948 году советский ученый Георгий Гамов, а сам термин придумал астрофизик Иосиф Шкловский. 
            Реликтовое излучение, заполняющее всю вселенную, считают одним из главных подтверждений гипотезы о Большом взрыве — именно реликтовый спектр содержит важные сведения о физических процессах сущего.
          </p>
          <p>
            Вселенский барион равен 10⁹ реликтовых фотонов, анизотропия обладает дипольностью, 
            абсолютно черное тело имеет температуру 2,725 К — каждый трек релиза связан с тем или иным фактом из истории реликтового излучения. 
            В космическом вакууме звук не распространяется, как и привычные земные эмоции — только электромагнитные помехи, волновые реверберации, функциональная интервалика. 
            Все это зашито автором в звуковой палитре альбома и встроено в четкую сетку организующего пространство бита. 
          </p>
          <p>
            «Реликт—1» — это пространство логики. Но — мы все еще на Земле и можем себе позволить сменить режим рацио на приятную ностальгию. 
            По романам Азимова и Лема, по саундтрекам Алексея Рыбникова, по уютной гордости за советских ученых и по соседу дяде Косте — скромному инженеру, собравшему твой первый радиоприемник.
          </p>
        </div>
        <div class="col-md-6 offset-md-3 mb-5">
          <img src="/static/relikt_1_cassette.jpg" width="100%" />
        </div>
        <div class="description text-white mb-5">
          <p>
            Cybernetics, positron engines, annihilation, and a cosmic summer cottage a couple parsecs from Mars. 
            The 20th century’s vision of space – a collector’s curiosity, forged from science fiction and engineering breakthroughs. 
            Andrey Raspustin’s new album RELIKT-1 is dedicated to this "vintage" phenomenon: the fading dream of humanity transcending Earthly problems into a reality of pure numbers and infinite possibilities.
          </p>
          <p>
            The title pays homage to the first experiment studying cosmic microwave background radiation, conducted in the 1980s in the USSR. 
            Back then, the Prognoz satellite series was created – unique spacecraft capable of transmitting real-time data over extended periods. 
            They helped pioneer research into Sun-Earth interactions, such as radiation levels and solar wind’s impact on our atmosphere. 
            The theory of this background radiation was first proposed in 1948 by Soviet physicist George Gamow, while the term itself was coined by astrophysicist Iosif Shklovsky. 
            This omnipresent radiation, permeating the entire universe, is considered one of the key confirmations of the Big Bang theory – its spectral signature holds crucial data about the physical nature of existence.
          </p>
          <p>
            The universal baryon density equals 10⁹ relic photons, anisotropy exhibits dipole characteristics, 
            a perfect black body glows at 2.725 Kelvin – each track on the album connects to a specific fact from the history of cosmic microwave background research. 
            Sound doesn’t travel through the vacuum of space, nor do familiar Earthly emotions – only electromagnetic interference, wave reverberations, and functional intervals remais. 
            All of this is encoded into the album’s sonic palette, woven into the precise rhythmic grids that structure its spatial dimension.
          </p>
          <p>
            RELIKT-1 is a realm of pure logic. But we’re still on Earth, and we can allow ourselves to switch from rational analysis to pleasant nostalgia. 
            For the novels of Asimov and Lem, for Alexey Rybnikov’s soundtracks, for the quiet pride in Soviet scientists, and for neighbor Uncle Kostya – the humble engineer who assembled your first radio receiver.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AndreyRasputinRelikt1',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/relikt-1',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/relikt-1/1824755422',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/4NmbP36iy1YUOUdy4hNMUB',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/37314576',
        },
        {
          name: 'VK',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000613982_24613982_956e04751a492c7a42',
        }
      ],
    }
  },
}
</script>

<style scoped>
.andrey-rasputin-relikt1 {
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
