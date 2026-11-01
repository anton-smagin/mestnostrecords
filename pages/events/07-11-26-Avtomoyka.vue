<template>
  <div class="anderdog-live-band-07-11-26 w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/07-11-26-avtomoyka.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">АВТОМОЙКА 07-11-26</h5>
        </div>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            7 ноября | Автомойка
          </p>
          <p>
            Большая премьера на Автомойке: Anderdog впервые представит свой проект в формате лайв-бэнда.<br>
            В программе живые версии треков Андердога с разных альбомов.
          </p>
          <p>
            На сцене вместе с Денисом выступят:<br>
            Михаил Климов (tih i radosten) труба, контрабас<br>
            Виктор Тихонов (ДетиЕти, Kshettra) барабаны<br>
            Александр Рябыкин (Sayok) бас-гитара
          </p>
          <p>
            Поддержат вечер диджей-сетами Kokokei и Саша Куринский.
          </p>
          <p>
            Приходите, будет феерично 🔥
          </p>
          <p>
            Начало в 20:00. Вход свободный.
          </p>
          <p>
            📍 Автомойка by Veladora<br>
            Москва, Старосадский переулок, 3, стр. 2
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnderdogLiveBand071126'
}
</script>

<style scoped>
.anderdog-live-band-07-11-26 {
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
