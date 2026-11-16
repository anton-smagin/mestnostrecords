<template>
  <div class="relief-presentation-20-11-26 w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/20-11-26-avtomoyka.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">АВТОМОЙКА 20-11-26</h5>
        </div>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            20 ноября | Автомойка
          </p>
          <p>
            В пятницу на Автомойке состоится презентация «Рельефа» - нового подлейбла «Местности». Поводом станет совместный релиз XX22 Алексея Борисова и Anton Mobin.
          </p>
          <p>
            В программе вечера:
          </p>
          <p>
            Алексей Борисов представит лайв, построенный на импровизации и фрагментах нового альбома.
          </p>
          <p>
            H.Ruine выступит с лайвом на модульных синтезаторах.<br>
            Ломаные ритмы и экспериментальная танцевальная электроника.
          </p>
          <p>
            Саша Куринский подготовил специальный DJ-сет, посвящённый каталогу Nurse With Wound.
          </p>
          <p>
            Начало в 20:00. Вход свободный.
          </p>
          <p>
            <font-awesome-icon :icon="['fas', 'location-dot']" /> Автомойка by Veladora<br>
            Москва, Старосадский переулок, 3, стр. 2
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReliefPresentation201126'
}
</script>

<style scoped>
.relief-presentation-20-11-26 {
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
