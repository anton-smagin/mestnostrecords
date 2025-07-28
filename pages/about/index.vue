<template>
  <div class="about">
    <div class="row">
      <div class="col-md-12 mt-3">
        <h1>МЕСТНОСТЬ</h1>
      </div>
      <div class="col-md-12">
        <div class="description text-white">
          <p class="mb-3">
            Московский лейбл «Местность» объединяет артистов, для которых
            создание музыки – не просто творчество, но и миссия. От
            эксперименталки, в лучших традициях WARP, до урбанистического техно
            – с уникальным почерком русскости и всеми феноменами, с которыми мы
            выросли «на нашей местности». Районы, глубинки, лесопарки,
            инфернальная логика, мистика и полная самобытность, где находится
            место цифровой красоте и хтоническому вайбу.
          </p>
          <p class="mb-3">
            Резиденты лейбла – Антон Смагин, Костя Коюкей, Анка Медведева —
            истинные локалы, любящие свою среду. Мы были организаторами
            вечеринок Svora, куда подтянули много интересных артистов и решили,
            что пора. Позже к нам присоединились Соня Шпильберг и Александр
            Куринский. Так появилась «Местность» со своей электронной парадигмой
            и особой философией.
          </p>
          <p class="mb-3">
            Лейбл призван заниматься продвижением и организацией ивентов,
            открывая миру местечковых и очень крутых в своей уникальности
            музыкантов. Прописку на «Местности» и возможность к коллабам на
            стыке клубной культуры и искусства будут получать все больше
            артистов локальной сцены. Аминь.
          </p>
        </div>
      </div>
      <div class="col-12 mt-3 mb-6">
        <h1>Контакты</h1>
      </div>
      <div class="row">
      <div class="col-md-3 col-sm-6 col-12">
        <a
          class="btn text-white"
          href="https://t.me/mestnost_label"
          target="_blank"
        >
          telegram
        </a>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <a
          class="btn text-white"
          href="https://www.instagram.com/mestnostrecords"
          target="_blank"
        >
          instagram
        </a>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <a
          class="btn text-white"
          href="https://vk.com/mestnostrecords"
          target="_blank"
        >
          вк
        </a>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <a
          class="btn text-white"
          href="https://mestnost.bandcamp.com"
          target="_blank"
        >
          bandcamp
        </a>
      </div>
    </div>
    <p class="text-white mt-5 mb-5">
      для демо и сотрудничества <a href="mailto:mestnostishere@gmail.com">mestnostishere@gmail.com</a>
    </p>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style scoped>
.about {
  background: url('/static/background.jpg') no-repeat center center fixed !important;
  background-size: cover;
}

h1 {
  color: white;
}

.description {
  margin: 3% 10%;
  letter-spacing: 0.2em;
  line-height: 2em;
  text-align: justify;
  font-family: Acrom, sans-serif;
  @media only screen and (max-width: 768px) {
    margin: 4% 10%;
    font-size: 1em;
    letter-spacing: 0.1em;
  }
}
</style>
