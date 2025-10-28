<template>
  <div class="the-way-of-the-dog w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg
          src="/static/the_way_of_the_dog.webp"
          class="release-hero"
          format="webp"
          :quality="85"
        />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">The Way of the Dog</h5>
          <h5 class="text-white"><span>Anderdog</span></h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-12 col-md-6 col-lg-4 mt-5 text-nowrap"
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
      <div class="col-md-12 mb-5 align-self-center text-center">
        <NuxtImg
          src="/static/the_way_of_the_dog_face.webp"
          alt="anderdog"
          class="mx-auto d-block release-portrait"
          format="webp"
          :quality="85"
          loading="lazy"
        />
      </div>
      <div class="col-md-12">
        <div class="col-md-6 offset-md-2">
          <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=447436924/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
            
          </iframe>
        </div>
        <div class="description text-white mb-5 mt-5">
          <p>Музыкант из Электростали Денис Рыжов aka Аnderdog знаменует 2025 год уже второй работой. Зимой вышел его совместный релиз с Dessin Bizarre, а сейчас готов сольник под названием THE WAY OF THE DOG - это четвертый альбом музыканта на лейбле «Местность» и десять свежайших треков в формате кассеты. Для ценителей аналогового звучания также выйдет релиз на виниле от лейбла <a href="https://sealt.su" target="_blank">SEALT</a>.</p>
          <p>The Way of the Dog - отсылка к культовым фильмам прошлого века об искусстве кунг-фу, поэтому в звуковых ландшафтах альбома нельзя не заметить гонконгского акцента. В последовательности треков заложено типичное для истории воина повествование: жил-был один Пёс из Шаолиня, от первой встречи с учителем (The Way of the Dog) до схватки с заклятым врагом (Tiger Style), от отчаяния главного героя до уверенности в том, что все будет хорошо, и настанет время для улыбки.</p>
          <p>Путь Пса по Андердогу - это непрерывный контраст силы и гибкости, напористого джангла с чистыми небесами финалов. Автор не изменяет своему кредо: по-прежнему пренебрегает симметрией, отчего каждый его трек непредсказуем, скрещивает ломаный бит с нежными инструментальными монологами и ловко оборачивает острые углы IDM-звучания в лирическую упаковку. Почему бы и нет? Как говорил великий мастер Ли: мягкость нельзя сломить.</p>
        </div>
        <div class="description text-white mb-5">
          <p><i>Recorded and mixed by Denis Ryzhov aka Anderdog</i></p>
          <p><i>Mastered by Konstantin Kolychev aka Kokokei</i></p>
          <p><i>Design by pi✟i✟sy</i></p>
          <p><i>Press-release by Sonya Spielberg</i></p>
        </div>
        <div class="description text-white mb-5">
          <p>Musician from Elektrostal Denis Ryzhov aka Anderdog Marks 2025 with His Second Release. Earlier this year, he dropped a collaborative release with Dessin Bizarre, and now he's back with a solo project titled THE WAY OF THE DOG. This marks the artist’s fourth album on the Mestnost label and features ten brand-new tracks in cassette format. For analog sound lovers, a vinyl release is also on the way via <a href="https://sealt.su" target="_blank">SEALT</a>.</p>
          <p>The Way of the Dog is a nod to iconic kung fu films of the past century, and the Hong Kong influence is clearly audible in the album's sonic landscapes. The track sequence follows a classic warrior narrative: once upon a time, there was a Dog from Shaolin—starting from his first meeting with the master (The Way of the Dog), through the showdown with his arch-nemesis (Tiger Style), from the hero's despair to the realization that everything will be fine, and the time will come to smile.</p>
          <p>The Dog’s path, according to Anderdog, is a continuous contrast of strength and fluidity—a pushy jungle sound balanced by the clear skies of the album’s finales. True to his creative principles, the artist still shuns symmetry, making every track unpredictable. He blends broken beats with tender instrumental monologues and skillfully wraps the sharp edges of IDM in lyrical textures. Why not? As the great Master Lee once said: "Softness cannot be broken."</p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/the_way_of_the_dog_cassette_1.webp"
          alt="the way of the dog cassette 1"
          class="cassette-img"
          format="webp"
          :quality="85"
          loading="lazy"
        />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/the_way_of_the_dog_cassette_2.webp"
          alt="the way of the dog cassette 2"
          class="cassette-img"
          format="webp"
          :quality="85"
          loading="lazy"
        />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/the_way_of_the_dog_cassette_3.webp"
          alt="the way of the dog cassette 3"
          class="cassette-img"
          format="webp"
          :quality="85"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheWayOfTheDog',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/the-way-of-the-dog',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/the-way-of-the-dog/1807854467',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/6X6PJQuKb4JoQktgXqRYMZ?si=aJYttg15QZaAbeif8zVEAw'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/36253523',
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000850869_23850869_d63ff88a8ef335f068'
        },
      ],
    }
  },
}
</script>

<style scoped>
.the-way-of-the-dog {
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

.release-hero {
  display: block;
  width: 80%;
  max-width: 80%;
  height: auto;
  margin: 0 auto;
}

.release-portrait {
  max-width: 50%;
  height: auto;
}

.cassette-img {
  display: block;
  width: 80%;
  max-width: 80%;
  height: auto;
  margin: 0 auto;
}
</style>
