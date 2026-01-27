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
            Основатели лейбла – Антон Смагин aka Ne Tvoy Drug и Костя Колычев aka Kokokei — истинные локалы, любящие свою среду. 
            Мы были организаторами закрытых опен-эйров, куда подтянули много интересных артистов и решили, что пора. 
            Позже к нам присоединились Соня Шпильберг, Александр Куринский, Марго Кобозева, Денис Anderdog и другие.
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
      <div class="col-12 mt-3 mb-4">
        <h1>Контакты</h1>
      </div>
      <div class="social-links">
        <a
          href="https://t.me/mestnost_label"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link text-white"
          title="Telegram"
        >
          <font-awesome-icon :icon="['fab', 'telegram']" class="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/mestnostrecords"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link text-white"
          title="Instagram"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" class="social-icon" />
        </a>
        <a
          href="https://vk.com/mestnostrecords"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link text-white"
          title="VKontakte"
        >
          <font-awesome-icon :icon="['fab', 'vk']" class="social-icon" />
        </a>
        <a
          href="https://mestnost.bandcamp.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link text-white"
          title="Bandcamp"
        >
          <font-awesome-icon :icon="['fab', 'bandcamp']" class="social-icon" />
        </a>
        <a
          href="https://soundcloud.com/mestnost-records"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link text-white"
          title="SoundCloud"
        >
          <font-awesome-icon :icon="['fab', 'soundcloud']" class="social-icon" />
        </a>
        <a
          href="https://www.mixcloud.com/Mestnost_Records/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link text-white"
          title="Mixcloud"
        >
          <font-awesome-icon :icon="['fab', 'mixcloud']" class="social-icon" />
        </a>
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
  background: url('/static/background.webp') no-repeat center center fixed !important;
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
  font-family: NotoSans, sans-serif;
  @media only screen and (max-width: 768px) {
    margin: 4% 10%;
    font-size: 1em;
    letter-spacing: 0.1em;
  }
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  border-color: #91a79d;
  background-color: rgba(145, 167, 157, 0.2);
}

.social-icon {
  font-size: 1.4rem;
}
</style>
