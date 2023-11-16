<template>
  <div class="fields-of-domodevskaya w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/fields_of_domodevskaya.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Kisser</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Fields of Domodevskaya</span>
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
          src="~/static/kisser_face.jpg"
          alt="Kisser"
          width="50%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 offset-md-2">
        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1036482917/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
          <a href="https://mestnost.bandcamp.com/album/fields-of-domodedovskaya">Fields of Domodedovskaya by Kisser</a>
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Паша Kisser поселился на Домодедовской спустя 27 лет жизни на Цветном бульваре. Он принял этот район в состоянии меланхолии и отрешенности, и пейзажи с одинокими собаками, таинственными лесочками и спящими окнами многоэтажек вписались в его мировосприятие идеально. «Переезд на Домодедовскую был довольно травматичным опытом, но через несколько лет я полюбил этот район за его неприкрытую грусть, здесь можно чувствовать себя отчаянно одиноким без всякого стыда и вдохновляться непривычными образами», - рассказывает Павел.
          </p>
          <p>
            Оголенность депрессивных эмоций района ничуть не стесняет автора, наоборот он нашел эту атмосферу комфортной, принял ее и стал частью этого мира, красота которого – удовольствие из разряда утонченных. Чтобы получилась нужная музыкальная картина, для записи альбома был использован Korg MS-10 1978 года выпуска. Павел называет его звучание «сакральным», поскольку именно этот инструмент смог конвертировать нужные эмоции и образы в звук.
          </p>
          <p>
            Автор намеренно избегает жанровой характеристики своего творчества. Он вырос на записях Стинга, Мадонны, House of Pain и Squarepusher, танцевал брейкданс и изучал коллекцию кассет старшего брата, в которой было все: от панка, готического рока и первой экспериментальной электроники до джаза и хип-хопа. Звучание альбома Fields of Domodedovskaya Павел сравнивает с проектом Leftfield, который в 90-е положил начало одноименному направлению и сделал ломаный бит трендом, вдохновив на творчество Prodigy, Orbital и Underworld. «Я не старался воспроизвести этот жанр намеренно, честно говоря, хотелось записать босса-нову, а получился лефтфилд», - признается автор.
          </p>
        </div>
        <div class="description text-white mb-5">
          <p>
            Pasha Kisser came to dwell on Domodedovskaya after 27 years of living near Tsvetnoy Boulevard. He accepted this region, being in the state of melancholy and detachment, and landscapes with lonely dogs, mysterious small forests and sleeping windows of multi-story buildings fitted into his worldview perfectly. «Moving to Domodedovskaya was a somewhat traumatic experience, but in several years I came to love this area for its uncovered sadness. Here one can feel himself desperately alone without any shame and be inspired by unusual images», - tells Pavel.
            The nakedness of depressive emotions of this area does not constrain the author at all. Just the other way about: he has found this atmosphere comforting, he has accepted it and became the part of this world, whose beauty may be called refined.
            To achieve a necessary musical picture Korg MS-10 made in 1978 was used for making this album. Pavel calls its sound «sacral», for just this instrument could convert required emotions into sounds.
          </p>
          <p>
            The author purposefully avoids genre characteristics of his art. He was bred on music of Sting, Madonna, House of Pain and Squarepusher, he performed break-dance and studied his elder brother’s tape collection, which included everything: from punk, gothic rock and first experimental electronics to jazz and hip-hop. Pavel compares the sound of his album The Fields of Domodedovskaya with the Leftfield project, which during the 90-s has made a start of the homonymous genre, made a broken beat a trend and inspired Prodigy, Orbital and Underworld. «I had no purpose to reproduce this genre as it is, - says Pavel. – Frankly speaking, I wanted to play bossa-nova, but obtained leftfield instead».
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <img
          src="~/static/fields_of_domodedovskaya_cassette_1.jpg"
          alt="fields of domodedovskaya cassette 1"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="~/static/fields_of_domodedovskaya_cassette_2.jpg"
          alt="fields of domodedovskaya cassette 2"
          width="90%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="~/static/fields_of_domodedovskaya_cassette_3.jpg"
          alt="fields of domodedovskaya cassette 3"
          width="90%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldsOfDomodevskaya',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/fields-of-domodedovskaya',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/fields-of-domodedovskaya/1701201651'
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/6GlGxhSTyfObV3YBI2Y5r3?si=dtHYHH8sQu2t4u-fw1Mpmw'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.com/album/26857323'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000577762_18577762'
        },
      ],
    }
  },
}
</script>

<style scoped>
.fields-of-domodevskaya {
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
