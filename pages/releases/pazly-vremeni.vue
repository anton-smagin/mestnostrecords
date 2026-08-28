<template>
  <div class="pazly-vremeni w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/pazly_vremeni.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">tih i radosten</h5>
          <h5 class="text-white"><span>Пазлы времени</span></h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-12 col-lg-4 col-md-6 mt-5 text-nowrap"
            >
              <ClientOnly>
                <font-awesome-icon
                  :icon="['fab', link.icon]"
                  class="text-white"
                />
              </ClientOnly>
              <a :href="link.link" target="_blank" class="text-white social">
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mb-5">
        <NuxtImg
          src="/static/tih_i_radosten_face.webp"
          alt="tih i radosten"
          style="max-width: 50%; height: auto;"
          format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-6 offset-md-2 bandcamp-player">
        <iframe
          style="border: 0; width: 100%; height: 120px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=2676283500/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
          seamless
          title="Пазлы времени by tih i radosten"
        ></iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            tih i radosten — свежий альбом Миши Климова, электронного музыканта из Москвы, мультиинструменталиста и участника около 15 групп. Однако, самое важное для него — пение в хоре. Именно амплуа хориста привело его к идее релиза, который по сути стал целым проектом.
          </p>
          <p>
            Уже 10 лет Миша поет в хоре Андроникова монастыря, это одно из немногих мест, где вместо привычного партесного пения в богослужении используется знаменный распев — каноничное древнерусское песнопение тысячелетней давности. Как признается Миша, знаменное пение несет очень мощную энергетику и красиво именно своей суровостью и отстраненностью. К сожалению его почти никто не слышит, большинство даже не знает о существовании знаменного пения. Альбом tih i radosten стал для автора способом вынести распев «в народ», в основе всех треков так или иначе лежат аутентичные мелодии, записанные еще крюками — да, в те времена на Руси не существовало нотной грамоты, как и четырехголосной структуры хоровых партитур.
          </p>
          <p>
            Благодаря Борису Павловичу Кутузову, идейному вдохновителю и регенту хора Андроникова монастыря, и его ученикам в 90-е годы была проделана титаническая работа по расшифровке древнерусских рукописей и переводу крюков в ноты. Отчасти альбом посвящен этому человеку, который для многих открыл красоту знаменных песнопений.
          </p>
          <p>
            Есть и два других посвящения. Первое — русскому композитору Сергею Рахманинову, большому знатоку и пропагандисту древнерусской музыкальной мелодики. Второе посвящение — Терри Райли, американскому музыканту и композитору-минималисту, нашедшему современный язык для использования в творчестве древней духовной музыки.
          </p>
          <p>
            В альбоме tih i radosten Миша во многом следует традициям Райли, используя необычные сочетания инструментов — духовых, ударных, струнных, и осторожно преображая звук цифрой. Получилось девять медитативных, мелодичных и при этом минималистичных треков, где все выразительные средства направлены на то, чтобы развернуть перед слушателем основу — мелодику распева. Автор подарил нам способ перекинуть мостик между тысячелетиями и услышать музыку до эпохи «украшательства», не просто пройти по касательной, а погрузиться в самую суть, где запечатана культура духа.
          </p>
        </div>
        <div class="row mb-5">
          <div class="col-12 text-center mb-5">
            <NuxtImg
              src="/static/pazly_vremeni_cassette_2.webp"
              alt="tih i radosten Пазлы времени cassette"
              style="max-width: 70%; height: auto; display: block; margin: 0 auto;"
              format="webp" :quality="85" loading="lazy" />
          </div>
        </div>
        <div class="description text-white mb-5">
          <p>
            tih i radosten is the fresh album by Misha Klimov — an electronic musician from Moscow, a multi-instrumentalist, and a member of around 15 bands. Yet the most important thing for him is singing in a choir. It was precisely this role as a chorister that led him to the idea for the release, which essentially grew into an entire project.
          </p>
          <p>
            For 10 years now, Misha has sung in the choir of the Andronikov Monastery — one of the few places where, instead of the customary part-singing, the liturgy uses znamenny chant, the canonical Old Russian sacred singing that is a thousand years old. As Misha admits, znamenny chant carries a very powerful energy and is beautiful precisely in its severity and detachment. Sadly, almost no one hears it; most people don't even know that znamenny chant exists. The album tih i radosten became the author's way of bringing the chant "to the people": at the heart of every track lie, in one way or another, authentic melodies once notated with kryuki (hook notation) — yes, in those days there was no musical notation in Rus', nor any four-part structure of choral scores.
          </p>
          <p>
            Thanks to Boris Pavlovich Kutuzov — the ideological inspiration and precentor of the Andronikov Monastery choir — and his students, a titanic effort was carried out in the 1990s to decipher Old Russian manuscripts and transcribe the kryuki into modern notation. In part, the album is dedicated to this man, who opened up the beauty of znamenny chant for so many.
          </p>
          <p>
            There are two other dedications as well. The first is to the Russian composer Sergei Rachmaninoff, a great connoisseur and champion of Old Russian musical melody. The second is to Terry Riley, the American musician and minimalist composer who found a contemporary language for using ancient sacred music in his work.
          </p>
          <p>
            On tih i radosten, Misha largely follows Riley's traditions, using unusual combinations of instruments — winds, percussion, strings — and carefully transforming the sound with digital means. The result is nine meditative, melodic, yet minimalist tracks, where every expressive device is aimed at unfolding the foundation before the listener: the melody of the chant. The author has given us a way to build a bridge across the millennia and hear music from before the era of "embellishment" — not merely to pass by on a tangent, but to plunge into the very essence, where the culture of the spirit is sealed.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useReleaseSeo } from '~/composables/useReleaseSeo'

export default {
  name: 'PazlyVremeni',
  setup() {
    useReleaseSeo()
  },
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/--7',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/%D0%BF%D0%B0%D0%B7%D0%BB%D1%8B-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8/6800113627',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/3E5GETaI0DoXC0PG8pY2ZZ',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/43486829',
        },
        {
          name: 'vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000837505_28837505_74e46ba8cdd2ae4641',
        },
      ],
    }
  },
}
</script>

<style scoped>
.pazly-vremeni {
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
