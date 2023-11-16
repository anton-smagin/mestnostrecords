<template>
  <div class="vvedenskaya-attempts w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/vvvedenskaya.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Vvvedenskaya</h5>
          <h5 class="text-white"><span>Attempts</span></h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-lg-4 col-md-6 mt-5 text-nowrap"
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
        <img
          src="~/static/vvvedenskaya_face.jpg"
          alt="vvvedenskaya"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="col-md-6 offset-md-2">
          <iframe
            style="border: 0; width: 100%; height: 120px"
            src="https://bandcamp.com/EmbeddedPlayer/album=1330787950/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://mestnost.bandcamp.com/album/attempts"
              >Attempts by Vvvedenskaya</a
            >
          </iframe>
        </div>
        <div class="description text-white mb-5">
          <p>
            Название attempts означает попытки по созданию музыкальных форм.
            Даже усилия, поскольку релиз давался трудно. Я считаю его в каком-то
            смысле вымученным, поскольку вокруг каждого трека было много
            сомнений – достойно ли это, чтобы считаться треком? Релиз окружает
            облако из преодолений, усилий и сомнений, именно поэтому он мне
            нравится, кажется мощным и бескомпромиссным.
          </p>
          <p>
            Трек Kabul появился после новостей о захвате власти талибаном в
            Афганистане. Я увидела в новостях, как люди бегут за последним
            самолетом, вылетающим из Кабула, чтобы сбежать из страны, и их не
            пускают на борт, они буквально цеплялись за крылья самолета. Это
            очень страшно, будто кошмарный сон. Я хотела выразить солидарность с
            этими людьми и записала этот трек.
          </p>
          <p>
            В целом в альбоме много эмбиента и жесткого бита. Своим дискомфортом
            это вызывает сопереживание. Альбом нельзя не заметить или поставить
            фоном, его надо слушать и переживать.
          </p>
          <p><i>Vvvedenskaya</i></p>
          <div class="shadowed">
            <p><i>all tracks by Vvvedenskaya</i></p>
            <p>
              <i>
                mixed & mastered by
                <a href="https://infrasurge.bandcamp.com" target="_blank"
                  >INFRASURGE</a
                >
              </i>
            </p>
          </div>
        </div>
        <div class="description text-white mb-5">
          <p>
            The name Attempts symbolizes the effort to create musical forms. On second thought,
            I think the word struggle fits better since I truly gave my all to this release.
            It was hard won, because I was constantly plagued with doubts and had many misgiving about each track
            with questions like: does it even deserve to be called a track?
            The release stirs up powerful and almost palpable feelings of overcoming difficulties,
            exerting effort and dealing with doubts, which is why I like it so much. It comes across as unflinching and uncompromising.
          </p>
          <p>
            I came up with the Kabul track after the news broke out that the Taliban took over Afghanistan.
            On the news, I saw people running after the last plane leaving Kabul.
            They wanted to escape the country, but since they weren’t allowed to board, they literally clung to the wings of the plane.
            It was so very terrifying, like a nightmare come to life.
            I wanted to express solidarity with these people the only way I knew how, and that was how this track was born.
          </p>
          <p>
            All things considered, the album is mostly ambient and it has a lot of hard beats.
            With the discomfort that you feel listening to it also comes empathy.
            The album is not something that you can easily put aside or turn on as a background noise.
            This is the kind of experience that you need to hear and experience for yourself.
          </p>
          <p><i>Vvvedenskaya</i></p>
          <div class="shadowed">
            <p><i>all tracks by Vvvedenskaya</i></p>
            <p>
              <i>
                mixed & mastered by
                <a href="https://infrasurge.bandcamp.com" target="_blank"
                  >INFRASURGE</a
                >
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <img
          src="~/static/vvvedenskaya_cassette_1.jpg"
          alt="vvedenskaya"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="~/static/vvvedenskaya_cassette_2.jpg"
          alt="vvedenskaya"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="~/static/vvvedenskaya_cassette_3.jpg"
          alt="vvedenskaya"
          width="90%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VvedenskayaAttempts',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/attempts',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/album/attempts-ep/1620433720',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/1aucx2r8GR8n6vCH5XEb0I',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/22535403',
        },
      ],
    }
  },
}
</script>

<style scoped>
.vvedenskaya-attempts {
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
  text-align: left;
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.08em;
  }
}

.social {
  font-size: 1em;
}

.store-link {
  display: inline-block;
  margin-left: 0.1em;
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
