<template>
  <div class="imagined-awakenings w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/imagined_awakenings.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Imagined / Awakenings</h5>
          <h5 class="text-white"><span>H. Ruine / MIKHAIL KIREEV</span></h5>
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
    <div class="row mb-5 mt-5">
        <div class="col-md-6 offset-md-2">
          <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1734430025/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
          </iframe>
        </div>
      </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Сплит-релиз Imagined / Awakenings поделили два российских музыканта
            H. Ruine & Mikhail Kireev, исследующих мир с помощью звуковых вибраций. Они создают композиции, которые можно назвать шумовыми, ритмическими, минималистичными и даже мрачными, но всегда удивительными. 
          </p>
          <p>
            Под никнеймом H. Ruine работает москвич Влад Лисицкий, художник и мультиинструменталист, для которого создание музыкального произведения сродни научной работе по стохастическому анализу. Каждый извлеченный звук и сама тишина между ними в его работах не случайны, осмысленны, просчитаны и являются частью какой-то сакральной формулы. 
            Получаются ландшафты, где нет места антропоморфизму, но много информации о том, каков же мир вне нашей головы. 
            Влад уделяет много времени не только музыкальным, но и фото-проектам, и инсталляциям, исследующим природу человеческого. 
            В этом альбоме он затрагивает тему хуманизации электронного ландшафта в противовес искусственности нейротехнологий.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mb-5">
        <NuxtImg
          src="/static/h_ruine_face.webp"
          alt="h. ruine"
          style="max-width: 50%; height: auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Петербуржец Михаил Киреев является саунд-художником, продюсером, одним из основателей лейбла Birth of Sound и одноименной звуковой лаборатории, его можно назвать исследователем алгоритмического начала в музыке. Ключевым элементом композиции для Михаила является импровизация, генерируемая алгоритмами с использованием модульного синтеза.
            Сам себя он называет представителем «тембрального ренессанса», и его подход к творчеству можно вполне назвать академическим: композиции полны логики, математической полифонии ритмов, красоты числа и богатством замысла. Михаил мыслит так, будто романтизма в музыке и не было, очищает звуки от привычного эмоционального наполнения и раздвигает область субъективного, чтобы хакнуть суть материального.
          </p>
        </div>  
      </div>  
    </div>
    <!-- <div class="row">
      <div class="col-md-12 mb-5">
        <NuxtImg
          src="/static/mikhail_kireev_face.webp"
          alt="mikhail kireev"
          style="max-width: 50%; height: auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div> -->
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            «Работы, вошедшие в релиз, созданы под влиянием глубокого осознания ценности жизни и парадоксальной природы страха, порожденного постоянный контролем. - рассказывает Михаил. - Мои звуковые патчи – попытка выразить этот процесс: освобождение от контроля, принятие неизвестного и обретение внутренней свободы».
          </p>
          <p>
            Продюсированием и мастерингом релиза занимался Фёдор Веткалов, музыкант, композитор, один из главных специалистов по модульным синтезаторам в России. Часть работ создана в рамках его курса по модулям.
          </p>
          <p><i>H. Ruine</i></p>
          <p><i>запись: H. Ruine (Влад Лисовский)</i></p>
          <p><i>сведение и мастеринг: Фёдор Веткалов</i></p>
          <p><i>Mikhail Kireev</i></p>
          <p><i>запись, сведение: Mikhail Kireev (Михаил Киреев)</i></p>
          <p><i>мастеринг: Фёдор Веткалов</i></p>
          <p><i>Обложка и дизайн кассеты: Karner Red</i></p>
          <p><i>Исполнительный продюсер: Фёдор Веткалов, Kokokei (Константин Колычев)</i></p>
          <p><i>Пресс-релиз: Соня Шпильберг</i></p>
        </div>  
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
      <div class="description text-white mb-5">
        <p>
        The split release Imagined / Awakenings is shared by two Russian musicians, H. Ruine and Mikhail Kireev, who explore the world through sound vibrations. They create compositions that can be described as noisy, rhythmic, minimalist, and even dark, yet always astonishing.
        The cover art was generated by code in a mathematical program, with the artists' music serving as the source material for the image. It was created by digital artist Karner Red.
        </p>
        <p>
          Under the alias H. Ruine works Moscow-based Vlad Lisitsky, an artist and multi-instrumentalist for whom creating music is akin to scientific work in stochastic analysis. Every sound and the silence between them in his works is deliberate, calculated, and part of a sacred formula. His compositions create landscapes devoid of anthropomorphism, yet rich with information about the world outside our minds. Vlad dedicates significant time not only to music but also to photography projects and installations that explore human nature. In this album, he touches on the theme of humanizing electronic landscapes in contrast to the artificiality of neurotechnologies.
        </p>
        <p>
          Mikhail Kireev, based in St. Petersburg, is a sound artist, producer, and one of the founders of the Birth of Sound label and its associated sound laboratory. He can be described as an explorer of algorithmic origins in music. For Mikhail, the key element of composition is improvisation, generated by algorithms using modular synthesis. He refers to himself as a representative of the "timbre renaissance," and his approach to creativity can be considered academic: his compositions are full of logic, mathematical polyphony of rhythms, the beauty of numbers, and rich in concept. Mikhail thinks as if romanticism in music never existed, stripping sounds of their familiar emotional content and expanding the realm of the subjective to hack the essence of the material.
        </p>
        <p>
          "The works included in this release were created under the influence of a deep awareness of the value of life and the paradoxical nature of fear born from constant control," says Mikhail. "My sound patches are an attempt to express this process: liberation from control, acceptance of the unknown, and the attainment of inner freedom."
        </p>
        <p>
          The production and mastering of the release were handled by Fedor Vetkalov, a musician, composer, and one of Russia's leading experts in modular synthesizers. Some of the works were created as part of his modular synthesis course.
        </p> 
        <p><i>H. Ruine: Recording by H. Ruine (Vlad Lisitsky)</i></p> 
        <p><i>Mixing and mastering by Fedor Vetkalov.</i></p>
        <p><i>Mikhail Kireev: Recording and mixing by Mikhail Kireev </i></p>
        <p><i>Mastering by Fedor Vetkalov.</i></p>
        <p><i>Cover art and cassette design by Karner Red</i></p>
        <p><i>Executive producers: Fedor Vetkalov, Kokokei (Konstantin Kolychev)</i></p>
        <p><i>Press release: Sonya Spielberg</i></p>
        </div>  
      </div>
      <div class="row mb-5">
          <div class="col-md-6 mt-5">
            <NuxtImg
              src="/static/imagined_awakenings_cassette_1.webp"
              alt="imagined awakenings cassette 1"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
             format="webp" :quality="85" loading="lazy" />
          </div>
          <div class="col-md-6 mt-5">
            <NuxtImg
              src="/static/imagined_awakenings_cassette_2.webp"
              alt="imagined awakenings cassette 2"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
             format="webp" :quality="85" loading="lazy" />
          </div>
        </div> 
    </div>    
  </div>
</template>

<script>
export default {
  name: 'ImaginedAwakenings',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/imagined-awakenings',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/imagined-awakenings/1800304691',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/0OPUXSrqpqexNwMAn1Lkl2?si=9WKS9oThQMayIXSAjjORBw',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/35728897',
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000457673_23457673_bac6a8208acb7be180?act=album',
        },
      ],
    }
  },
}
</script>

<style scoped>
.imagined-awakenings {
  background-color: black;
  background-image: none;
}

h1 {
  color: white;
}

.description {
  margin: 0 10%;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  font-family: Acrom, sans-serif;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    margin: 0 5%;
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
