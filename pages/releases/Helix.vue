<template>
  <div class="morakh-helix w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/helix.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Morakh</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Helix</span>
          </h5>
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
          src="~/static/morakh_face_2.jpg"
          alt="Morakh"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3234059979/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
          <a href="https://mestnost.bandcamp.com/album/helix">Helix by Morakh</a>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Валера Morakh из Подольска выпускает на лейбле «Местность» второй альбом Helix – первый назывался Limes. Этот релиз, как для автора, так и для слушателей, является путешествием по точкам новых и очень сильных эмоциональных переживаний.
          </p>
          <p>
            Сам Morakh связывает выход альбома с географией, с вспышками эйфории на фоне невиданных мест, с загадочно прекрасной тенью Подольска, с которым автор неразрывно связан душой и жизненными событиями. «Этот альбом был бы хорошим музыкальным сопровождением для путешествий. Когда некоторые треки с альбома были еще на стадии записи, я прослушивал их, путешествуя по живописным местам Турции – например, трек Green Canyon как раз посвящен одной из впечатливших меня географических точек. Для меня это очень ностальгический альбом, сделанный с любовью и душой, это музыкальное воспоминание о светлых временах, в которые я с радостью бы вернулся», - рассказывает Morakh.
          </p>
          <p>
            Хоть бит и определяет сердечный ритм альбома, но душа здесь точно в мелодике. Кроме того, треки очень динамичны, как эмоционально, так и фактурно. Каждый новый квадрат таит в себе интригу, а богатство музыкального материала, использованного автором для записи треков, обеспечивает запасом новых инсайтов на десятки прослушиваний вперед. Благодаря музыке, как самому универсальному языку чувств, мы можем подключаться к переживаниям тех, кто способен раскачать их до невероятной амплитуды. Так, весь спектр эмоций автора становится доступным для считывания. Просто включай и улетай.
          </p>
          <p class="mt-5">
            Valera Morakh from Podolsk releases his second album Helix with the “Mestnost” label – his first one was titled Limes. This release, both for the author and for his listeners, is a journey through the points in time that are marked by newly made and very intense emotional turmoil.
          </p>
          <p>
            Morakh himself associates the release of the album with geography, with flashes of euphoria against the backdrop of wondrous and mysterious places, with the enigmatically beautiful shadow of Podolsk, which the author is inextricably linked with through his soul and life events. “This album would make a good travel companion. When some tracks from the album were still at the recording stage, I listened to them while traveling through the picturesque and scenic spots in Turkey - for example, the track Green Canyon is specifically dedicated to one of many geographical locations that left such a huge impression on me. This is a very nostalgic album for me. I poured my love and soul into it. It is a musical recollection of the good times that I would happily return to,” says Morakh.
          </p>
          <p>
            Even though, the beat does personify the heartbeat of the album, the soul of this piece lies definitely with the melody. What is more, the tracks are very dynamic, in terms of both emotion and the awe factor. Each new square is fraught with intrigue, and the wealth of musical material used by the author to record the tracks provides a plethora of new insights for dozens of plays to come.
          </p>
          <p>
            Music, as the most universal language of feelings, allows us to tap into the emotional experiences of those people who are capable of stirring them up to an unspeakable amplitude. That way, the entire spectrum of the author’s emotions is laid bare and the audience can pick up on it and relive it. All they need to do is simply turn on the music and unwind.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MorakhHelix',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/helix',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/helix/1743448045',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/269V9UXUSAb3XRcDcZ9Dgt'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/30933723'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000692147_20692147_f81c61d31c36c9c9b8'
        },
      ],
    }
  },
}
</script>

<style scoped>
.morakh-helix {
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
</style>
