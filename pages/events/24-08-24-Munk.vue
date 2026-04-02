<template>
  <div class="munk-24-08-24 w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/24-08-24-munk.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Munk Bar 24-08-24</h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-12 col-lg-4 col-md-6 mt-5 text-nowrap"
            >
            <font-awesome-icon
              :icon="[link.solid ? 'fas' : 'fab', link.icon]"
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
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Добро пожаловать на «Местность», лейбл, где звуковые ландшафты встречаются с географическими. От Электростали до Мурманска, от московского Беляево до японской префектуры Хёго, музыканты лейбла из разных локаций создают саунд, где нет шаблонов и масок.
          </p>
          <p>
            Кто-то вырос на панк-роке, а кто-то на WARP Records, кто-то поймал поэзию спальных районов, а кто-то леопардовый китч попсы 90-х. Авторы «Местности» умеют писать свою биографию языком звуков так, что у нашего счетчика эмоций приятно выбивает пробки.
          </p>
          <p>
            На вечеринке в баре «Мунк» пройдет презентация альбома DJ Headsick, новый материал представит <a href="/releases/dog-eat-dog">Anderdog</a>, <a href="/releases/kokokei-mimoza">Kokokei</a> и <a href="/releases/grounded-rectangle">Ambidextrous</a>, отыграют лайвы, где прозвучат свежие треки, вот-вот готовые выйти на «Местности». Вайб обещает быть светлым, как обещают участники, так что если вас одолела тьма - целебный ломаный бит качнет уровень дофамина до точки «норм».
          </p>
          <p>
            24 августа, 19:00, бар Мунк Нижняя Сыромятническая улица, 1/4с11
          </p>
          <p>
            <i>Дизайн афиши Morgoblin 🌸</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MunkBar2400824',
  data() {
    return {
      links: [
      {
          name: 'Facebook',
          icon: 'facebook',
          link: 'https://www.facebook.com/events/1734225457386546/'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/mestnostmunk2408'
        },
        {
          name: 'Билеты',
          icon: 'ticket',
          link: 'https://moscow.qtickets.events/123262-vecherinka-leybla-mestnost',
          solid: true
        }
      ],
    }
  },
}
</script>

<style scoped>
.munk-24-08-24 {
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
  font-family: NotoSans, sans-serif;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.08em;
  }
}

.social {
  font-size: 1em;
  text-decoration: none;
  margin-left: 0.5em;
}

.store-link {
  display: inline-block;
  margin-left: 0.5em;
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
