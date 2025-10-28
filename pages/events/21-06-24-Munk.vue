<template>
  <div class="munk-21-06-24 w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/21-06-24-munk.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Munk Bar 21-06-24</h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-12 col-lg-4 col-md-6 mt-5 text-nowrap"
            >
            <div v-if="link.emoji">
              {{ link.icon }}
            </div>
            <div v-else>
              <font-awesome-icon
                :icon="['fab', link.icon]"
                class="text-white"
              />
            </div>
              <a :href="link.link" target="_blank" class="text-white social">
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Вечеринка лейбла «Местность» - это пышное путешествие по ландшафтам музыкальным и географическим. В этот раз зазвучат не только российские долы и веси, но и японские тектонические изломы – перкуссионист и электронщик HAJIME KOJIRO представит материал с его нового альбома SHINRA-BANSHOU, который выйдет на Местности 14 июня.
          </p>
          <p>
            В музыкальных партитурах Хажиме заправляет живой бит – да, у него поистине выдающаяся коллекция барабанов – а над шумовой вертикалью парит японский кото в сопровождении духов скандинавского дет-метала верхом на тамагочи. Альбом автор посвятил квантовым частицам и возрасту вселенной – Стивен Хокинг непременно бы зачитал под него дифференциальный фристайл, но с завистью послушает нас с небес.
          </p>
          <p>
            Гостей ждет еще одна премьера. Лайв также отыграет MORAKH – совсем недавно «Местность» выпустила его свежий релиз <a href="/releases/Helix">HELIX</a>. В отличие от коллеги из Японии Валера – из тех художников, для которых музыкальность становится главным оружием, он разит благодарных слушателей в десяточку с первой попытки.
          </p>
          <p>
            Еще один лайв отыграет преданный адепт наследия лейбла WARP <a href="/releases/ChertaNova">Andrey Rasputin</a>.
          </p>
          <p>
            Завершится вечеринка диджей-сетом легендарного российского электронщика <a href="/releases/GroundedRectangle">Ambidextrous</a>, по совместительству журналиста и историка электронной музыки, которого недавно крепко занесло в краут-рок – но это уже совсем другая история, за которой, впрочем, тоже велкам на лейбл Местность.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MunkBar210624',
  data() {
    return {
      links: [
        {
          name: 'Facebook',
          icon: 'facebook',
          link: 'https://www.facebook.com/events/971010454733300'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/mestnostmunk24'
        },
        {
          name: 'Билеты',
          icon: '🎟️',
          link: 'https://moscow.qtickets.events/116238-vecherinka-leybla-mestnost',
          emoji: true
        }
      ],
    }
  },
}
</script>

<style scoped>
.munk-21-06-24 {
  background-color: black;
  background-image: none;
}

h1 {
  color: white;
}

.description {
  margin: 0 5%;
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
