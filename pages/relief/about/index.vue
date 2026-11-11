<template>
  <div class="about">
    <div class="row">
      <div class="col-md-12 mt-3">
        <h1 class="about-logo-wrap">
          <img
            src="/static/relief/relief_logo.webp"
            alt="РЕЛЬЕФ"
            class="about-logo"
            width="816"
            height="159"
          />
        </h1>
      </div>
      <div class="col-md-12">
        <div class="description" lang="ru">
          <p class="mb-3">
            Лейбл «Местность» за время своего существования успел собрать крепкое сообщество, где канонический IDM легко уживается с монастырским эмбиентом и генетическим язычеством нашей музыкальной природы. Основатели лейбла Антон Смагин aka Ne Tvoy Drug и Костя Колычев aka Kokokei решили, что дозрели. Пришло время узаконить буйство этой самой природы и дать жизнь звучанию куда более угловатому и неформатному.
          </p>
          <p class="mb-3">
            Так родилась идея запуска подлейбла «Местности» под названием «Рельеф». Там будет выходить музыка, энцефалограмма которой еще способна качнуть наши усталые детекторы. Это работы музыкантов в жанрах нойз, конкрит, лефтфилд и в других, может быть, пока еще даже не получивших название направлениях.
          </p>
          <p class="mb-3">
            Куратором подлейбла выступит давний друг «Местности» — диджей и коллекционер музыкальных редкостей Саша Куринский.
          </p>
        </div>
      </div>
      <p class="contact mt-5 mb-5">
        для демо и сотрудничества <a href="mailto:mestnostishere@gmail.com">mestnostishere@gmail.com</a>
      </p>
    </div>
  </div>
</template>

<script setup>
const title = 'О рельефе — Relief'
useSeoMeta({
  title,
  ogTitle: title,
  description: 'Рельеф — другая сторона «Местности». Куратор — Саша Куринский.',
})
</script>

<style scoped>
h1 {
  color: #111;
}

.about-logo-wrap {
  margin: 2rem 0 1rem;
}

.about-logo {
  width: 60%;
  max-width: 420px;
  height: auto;
}

.description {
  margin: 3% 10%;
  color: #111;
  text-align: justify;
  font-family: var(--relief-font);
  @media only screen and (max-width: 768px) {
    margin: 4% 10%;
    font-size: 1em;
  }
}

.contact {
  color: #111;
}

.contact a {
  color: #111;
}
</style>
