<template>
  <div class="dryoma w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/dryoma.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Дрёма</h5>
          <h5 class="text-white"><span>ВСЕСЛАВЪ</span></h5>
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
    <!-- <div class="row">
      <div class="col-md-12 mb-5">
        <img
          src="~/static/hajime_kojiro_face.jpg"
          alt="hajime kojiro"
          width="70%"
          height="auto"
        />
      </div>
    </div> -->
    <div class="row mb-5 mt-5">
        <div class="col-md-6 offset-md-2">
          <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=932831690/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
            <a href="https://mestnost.bandcamp.com/album/--4">Дрёма by Всеславъ</a>
          </iframe>
        </div>
      </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Станислав Севостьянихин известен в музыкальном мире как Dissident, автор экспериментальных drum’n’bass треков, 
            выходивших на легендарном лейбле Renegade Hardware. Всеславь – новый проект музыканта в жанре эмбиента, 
            где автор исследует музыку как состояние. Вкрадчивые, но наполненные вибрацией треки, 
            отсылают к лучшим традициям адептов советского синтезатора АНС. «Хоровод светил», «59-й уровень плотности» или 
            «Хрусталики растворяются» могли быть написаны только тем, кто родился в СССР, с чистыми мечтами о космосе, 
            теплой ностальгией и изменившим наши ДНК «Солярисом» Тарковского. В альбоме проглядывает тот самый «мамлеевский» Петербург, 
            где за отреставрированными фасадами таится мистическая, пыльная сепия дворов-колодцев, коммуналок. 
            «В альбоме я постарался подчеркнуть звуком текстурность подобной атмосферы, ее «сырость», 
            и именно даб-эмбиент подходит для передачи такого ощущения как никакой другой стиль», - рассказывает автор.
          </p>
          <p>
            На самом деле Стас – представитель того поколения электронных музыкантов, которое в России называют и ветеранами, и пионерами одновременно. 
            Он взрослел в 90-е в Петербурге. 
            Время отчаянной идентификации, уличных драк, клубов и разгула свободы. 
            На школьный выпускной он не пошел – играл диджей-сет в клубе. Выпускной в Институте кино и телевидения, где учился на звукорежиссера, тоже пропустил – играл диджей-сет в клубе. 
            На районе ребята, слушавшие на кассетнике Onyx, вопросительно провожали взглядом Стаса, который спешил на очередную вечеринку в привычном образе «рейвера» или «кислотника», как тогда называли «клубных».
          </p>
          <p>
            Он упивался пиратскими релизами Warp, а в душе нежно любил Коррозию Металла. 
            Когда в руки к нему попал секвенсор Roland, сделал первый сингл, он назывался незамысловато – «Петтинг», и вышел на кассете. 
            Признание настигло Диссидента в 2003 году на Drum'n'Bass Awards, где он был отмечен как продюсер и автор лучшего альбома. 
            Кроме того Стас пишет техно и idm в рамках проекта Kontext и успешно развивает собственный лейбл Opposide. 
            Кстати, работает Стас каскадером в кино, его часто можно увидеть в ментовских сериалах. 
            Пожалуй, его скилл – жить во всех слоях реальности – можно считать движущей силой творчества. 
            Стас умеет делать «нормально» и при этом всегда оставаться независимым художником.
          </p>
        </div>
        <div class="description text-white mb-5">
          <p>
            Stanislav Sevostyanikhin is known in the music world as Dissident, the author of experimental drum’n’bass tracks released on the legendary label Renegade Hardware. 
            Vseslav is the musician’s new ambient project, where he explores music as a state of being. 
            Subtle yet vibration-filled tracks evoke the best traditions of the Soviet ANS synthesizer pioneers. 
            Tracks like “Khorovod Svetil” (“Round Dance of Luminaries”), “59-y Uroven’ Plotnosti” (“59th Level of Density”), 
            or “Khrustaliki Rastvoryayutsya” (“Crystals Dissolve”) could only have been created by someone born in the USSR, with pure dreams of space, warm nostalgia, and the DNA-altering influence of Tarkovsky’s “Solaris.” The album subtly reflects the “Mamleev-esque” St. 
            Petersburg, where behind restored facades lies the mystical, dusty sepia of courtyard wells and communal apartments. 
            “In the album, I tried to emphasize the textural atmosphere, its ‘rawness,’ and dub ambient is the perfect style to convey such a feeling,” the author explains.
          </p>
          <p>
            In fact, Stas is a representative of that generation of electronic musicians in Russia who are called both veterans and pioneers at the same time. 
            He came of age in the 90s in St. 
            Petersburg—a time of desperate self-identification, street fights, clubs, and rampant freedom. 
            He skipped his high school prom to play a DJ set at a club. 
            He also missed his graduation from the Institute of Film and Television, where he studied sound engineering, to play another DJ set. 
            In his neighborhood, guys listening to Onyx on their cassette players would glance questioningly at Stas as he rushed to another party in his usual “raver” or “acidhead” attire, as club-goers were called back then.
          </p>
          <p>
            He reveled in pirated Warp releases while secretly cherishing Korroziya Metalla (Corrosion of Metal). 
            When he got his hands on a Roland sequencer, he produced his first single, simply titled “Petting,” which was released on cassette. 
            Dissident gained recognition in 2003 at the Drum’n’Bass Awards, where he was honored as a producer and author of the best album. 
            Additionally, Stas writes techno and IDM under the project Kontext and successfully runs his own label, Opposide. 
            By the way, Stas also works as a stuntman in movies and can often be seen in cop series. 
            Perhaps his skill—living across all layers of reality—can be considered the driving force behind his creativity. 
            Stas knows how to do things “normally” while always remaining an independent artist.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VseslavDryoma',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/--4',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/%D0%B4%D1%80%D1%91%D0%BC%D0%B0/1794819236',
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/0oi4aLkKXIaN9Q4IffVP8u?si=Pw4xaAQvSrikYAqsDAXpIQ',
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/35312820'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000214022_23214022_f835632221ede3b9c7'
        },
      ],
    }
  },
}
</script>

<style scoped>
.dryoma {
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
