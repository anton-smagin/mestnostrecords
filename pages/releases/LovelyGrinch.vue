<template>
  <div class="lovely-grinch w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <NuxtImg src="/static/lovely_grinch.webp" style="max-width: 80%; height: auto;" format="webp" :quality="85" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Lovely Grinch</h5>
          <h5 class="text-white"><span>KIKOK</span></h5>
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
      <div class="row mb-5 mt-5">
        <div class="col-md-12 mb-5 align-self-center text-center">
          <NuxtImg
            src="/static/kikok_face.webp"
            alt="kikok"
            style="max-width: 50%; height: auto;"
            class="mx-auto d-block"
           format="webp" :quality="85" loading="lazy" />
        </div>
        <div class="col-md-12">
          <div class="col-md-6 offset-md-2 bandcamp-player">
            <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2730815774/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
            </iframe>
          </div>
          <div class="description text-white mb-5 mt-5">
            <p>Представляем нового артиста нашего лейбла.<br>📍местность: Пермь</p>
            <p>KIKOK – сольный проект Паши Федосеева (ex-Gnoomes), под этим именем он создает изобретательную и мелодичную электронику, вдохновленную лучшими образцами как IDM-музыки, так и shoegaze и kraut сцен.</p>
            <p>Был резидентом лейбла Magnetron Music (NL), основателем которого является Fatima Yamaha.</p>
            <p>Второй альбом ‘SAUNA’, вышедший в начале 2019го был удостоен хорошей критики от профильных изданий UNCUT (UK), The Quietus (UK), XLR8R (US), GROOVE (DE). Был признан альбомом месяца в Dj MAG (UK), заглавный трек Ekta I был замечен в Big Tunes (Mixmag, UK) среди Orbital, Red Axes и Peggy Gou.</p>
            <p>За его плечами множество концертов, а также небольшой тур и выступления на фестивале Dutch Design Week, TESTFM и Red Light Radio.</p>
            <p>25 апреля выйдет альбом, а в эту пятницу можно будет услышать первый сингл. 🐬</p>
          </div> 
          <div class="description text-white mb-5">
            <p><i>Written and produced by Pavel Fedoseev aka KIKOK</i></p>
            <p><i>Mixing and mastering by Konstantin Kolychev aka Kokokei</i></p>
            <p><i>Design and artwork by Vlad Vasenin aka vladh8vas</i></p>
            <p><i>Photo by Margarita Tentyukova</i></p>
          </div>
          <div class="description text-white mb-5">
            <p>We present a new artist at our label!</p>
            <p>KIKOK is the solo project of Pasha Fedoseev (ex-Gnoomes). Under this alias, he creates inventive and melodic electronic music inspired by the best of IDM, shoegaze, and kraut scenes.</p>
            <p>He was a resident artist on the Magnetron Music (NL) label, founded by Fatima Yamaha. His second album, SAUNA, released in early 2019, received critical acclaim from publications like UNCUT (UK), The Quietus (UK), XLR8R (US), and GROOVE (DE). It was named Album of the Month in DJ Mag (UK), and the lead single Ekta I was featured in Big Tunes (Mixmag, UK) alongside artists like Orbital, Red Axes, and Peggy Gou.</p>
            <p>With numerous live performances under his belt, including a small tour and appearances at Dutch Design Week, TESTFM, and Red Light Radio.</p>
            <p>KIKOK is set to release a new album on April 25th, with the first single dropping this Friday.</p>
          </div>

        </div> 
      </div>  
    </div>  
  </div>
</template>

<script>
export default {
  name: 'LovelyGrinch',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/lovely-grinch',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/lovely-grinch-single/1805650296',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/6XLfWT5azMRGTqtYFlLAK2?si=yGTVBcdOSgSTQgocZV04nA'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/36111778',
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000731920_23731920_d6219fd0ff0badcb46',
        },
      ],
    }
  },
}
</script>

<style scoped>
.lovely-grinch {
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
