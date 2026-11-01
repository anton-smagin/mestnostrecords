<template>
  <div class="tih-i-radosten-24-10-26 w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/24-10-26-avtomoyka.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">АВТОМОЙКА 24-10-26</h5>
        </div>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            24 октября | Автомойка
          </p>
          <p>
            tih i radosten впервые на Автомойке с большим двухчасовым концертом.<br>
            Прозвучат треки с альбома «Пазлы времени» и других релизов Михаила.
          </p>
          <p>
            Музыкальную программу вечера откроет и завершит Ник Завриев с виниловыми сетами.<br>
            Приходите вместе послушать музыку и отметить выход альбома.
          </p>
          <p>
            Начало в 20:00. Вход свободный.
          </p>
          <p>
            📍 Автомойка by Veladora | Москва, Старосадский переулок, 3, стр. 2
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TihIRadosten241026'
}
</script>

<style scoped>
.tih-i-radosten-24-10-26 {
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

.release-name {
  font-weight: bold;
}

.fill {
  min-height: 90vh;
  height: 100%;
}
</style>
