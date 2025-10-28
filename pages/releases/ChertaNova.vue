<template>
  <div class="rasputin-cherta-nova w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/cherta-nova.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Andrey Rasputin</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Cherta-nova</span>
          </h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-12 col-lg-4 col-md-6 mt-5 text-nowrap"
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
    <div class="row">
      <div class="col-md-12 mb-5">
        <NuxtImg
          src="/static/rasputin_face.webp"
          alt="rasputin"
          style="max-width: 70%; height: auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3762552334/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Свежий краеведческий релиз лейбла «Местность» от (имена) посвящен округу Чертаново, который теперь можно чувственно изучить на уровне
            звуковых ландшафтов. Чертаново – это затейливая архитектура, вдохновленная работами Ле Корбюзье, вакуумный мусоропровод,
            пруды с зелеными зонами, Битцевский парк с мифическими зайцами, породистыми полевками и легендарным маньяком и много чего еще – у каждого жителя
            найдется свой тайный чертановский алтарь. Все это районное великолепие давно просило озвучки, ведь кино с его фантазийной визуализацией давно уже
            облюбовало чертановские пейзажи – от Рязанова до Бондарчука.
          </p>
          <p>
            Можно поглубже воткнуть в уши айрподсы, нажать play, и отправиться по местным достопримечательностям.
            Трек Chertona расскажет об одноименной речке, которая является притоком реки Городни – сейчас она превращена в Верхний и Малый Чертановские пруды.
            А77 переместит вас в ОПЖР, то есть – образцово-показательный жилой район, коим является «американский городок» с его культовым домом-лабиринтом.
             Medvezhka предложит прокатиться с легендарной одноименной горки, она же «лысая гора», а трек BITZA с его мрачными и рваными сэмплами
             напомнит о битцевском маньяке – он ведь тоже история, как ни крути. Каждая композиция – полноценный рассказ, сокровенное и очень личное переживание
             хроник чертановской «нарнии», конвертированное в затейливую звуковую архитектуру на сваях ломаных битов.
          </p>
          <p>
            А есть ли в Чертаново черти? Наверняка, куда же без глубинной русской хтони с ее местечковой феноменальностью и эпической тайной,
            которую можно передать только невербальными средствами – и они вдруг нашлись.
          </p>
          <p class="mt-5">
            The latest release of Andrey Rasputin in collaboration with the Mestnost label was inspired by the regional natural history and
            is dedicated to the Chertanovo district, which can now be sensually explored at the level of soundscapes. Chertanovo is the embodiment of
            intricate architecture inspired by the works of Le Corbusier, a vacuum garbage chute, ponds with green spaces, Bitsevsky Park with mythical hares,
            thoroughbred voles, an infamous serial killer and so much more - each resident is sure to find their own mystical Chertanovo altar.
            All this regional splendor has long been begging for a soundtrack. After all, cinematography with its whimsical and fictional visualization has
            long taken up residence on the Chertanovo block - from Ryazanov to Bondarchuk.
          </p>
          <p>
          You can slide the air pods deeper into your ears, press play, and go sightseeing. The Chertona track tells a story about the river of the same name,
          which is a tributary of the Gorodnya River and has now been turned into the Upper and Small Chertanovsky Ponds.
          A77 will transport you to OPZhR, that is, an exemplary promising residential district, which is basically an “American town” in a nutshell
          with its iconic maze house. Medvezhka is going to take you on a ride down the legendary hill of the same name, aka the “bald mountain”,
          while the BITZA track with its dark, gloomy and ragged samples will be reminiscent of the Bitsevsky serial killer – any way you look at it,
          he is still part of the district’s history. Each song is a full-fledged story, an intimate and extremely personal reliving of the chronicles of Chertanovo “Narnia”,
          converted into an elaborate sound architecture that stands on the piles of broken beats.
          </p>
          <p>
          Are there any cherti (Russian word for demons) in Chertanovo? Surely, there must be some. Where would we be without innate, at times backward Russian
          idiosyncrasies with their small-town phenomenality and epic mystery, which can only be conveyed by non-verbal means - and voila, here they are.
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/cherta_nova_cassette_1.webp"
          alt="rasputin cherta-nova cassette 1"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/cherta_nova_cassette_2.webp"
          alt="rasputin cherta-nova cassette 2"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
      <div class="col-md-4 mt-5">
        <NuxtImg
          src="/static/cherta_nova_cassette_3.webp"
          alt="rasputin cherta-nova cassette 3"
          style="display: block; width: 90%; height: auto; margin: 0 auto;"
         format="webp" :quality="85" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RasputinChertaNova',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/cherta-nova',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/album/cherta-nova/1668490930',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/3r8cQyACl6tZdgVt1WKyh9?si=j9zKpBzDSciYp3A9wNITfw'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/24918948'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000347337_17347337_07c10ed3b80d043ea5'
        },
      ],
    }
  },
}
</script>

<style scoped>
.rasputin-cherta-nova {
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
</style>
