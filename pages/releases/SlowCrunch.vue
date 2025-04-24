<template>
  <div class="slow-crunch w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img src="~/static/slow_crunch.jpg" width="80%" />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Slow Crunch</h5>
          <h5 class="text-white"><span>KIKOK</span></h5>
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
      <div class="row mb-5 mt-5">
        <div class="col-md-12 mb-5 align-self-center text-center">
          <img
            src="~/static/kikok_face_2.jpg"
            alt="kikok"
            width="50%"
            height="auto"
            class="mx-auto d-block"
          />
        </div>
        <div class="col-md-12">
          <div class="col-md-6 offset-md-2">
            <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3802341230/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
              <a href="https://mestnost.bandcamp.com/album/slow-crunch">Slow Crunch by KIKOK</a>
            </iframe>
          </div>
          <div class="description text-white mb-5 mt-5">
            <p>
              Под ником KIKOK работает музыкант из Перми Павел Федосеев. До того, как
              заняться сольным творчеством, Павел барабанил в группе Gnoomes, играл
              шугейз и колесил с турами по Европе. Сейчас Gnoomes живут и работают в
              Словении - к ним пришло европейское признание, а Павел сосредоточился
              на студийной работе. Причина тому - болезнь, которая не позволяет
              музыканту перемещаться на большие расстояния. Однако, хоть он и скучает
              по шумной фестивальной жизни, все же находит в ситуации свои плюсы:
              можно заниматься любимым делом, потому что «уже можно все, что хочешь»,
              и двигать сольный проект KIKOK.
            </p>
            <p>
              В 2017 году на голландском лейбле Magnetron Music вышел одноименный
              альбом «KIKOK», а в 2019 на Магнетроне вышел следующий релиз SAUNA.
              Павел признается, что материал был сырым, да и обложку он кое-как
              смастерил в Paint, Такая непосредственность и свежесть звучания подкупила
              маститых продюсеров. Сам же артист посчитал этот успех не достаточным,
              его творчество не рассчитано на широкую аудиторию, но работа с
              крупнейшим лейблом - опыт полезный.
            </p>
            <p>
              Характерное звучание своих первых работ KIKOK определяет как
              шугейз-итало-диско. Действительно, такой бленд не для всех. Однако свежий
              релиз на Местности - Slow Crunch - звучит совсем по-иному. Мерный бит и
              синтетические структуры сменила гибкая драматургия с выразительными
              паузами и ритмическими перебивками.
              Стало больше эмоций, чувственности, мелодичности.
            </p>
            <p>
              Мастеринг и миксинг для альбома сделал сооснователь и идеолог Местности Костя Kokokei.
              Кстати, никнейм артиста - сочетание двух слов на его родном
              коми-пермяцком. Ки - рука, Кок - нога. Павел очень любит играть лайвы и
              считает живое выступление особым видом общения с публикой. Он не часто
              выступает в родной Перми, но это всегда событие. Когда Павел за пультом,
              сразу понятно, почему он KIKOK: его пальцы, наши ноги - вот так работает
              коми-пермяцкая магия, пропущенная через волокно проводов.
              В альбом вошли ремиксы от Ambidextrous, Gnoomes, Alina Valentina (NL),
              Anderdog, Lyudmila Severtseva, DJ HeadSick и Overalone.
            </p>
          </div> 
          <div class="description text-white mb-5">
            <p>Credits:</p>
            <p>Written and produced by Pavel Fedoseev aka KIKOK</p>
            <p>Mixing and mastering by Konstantin Kolychev aka Kokokei</p>
            <p>Design and artwork by Vlad Vasenin aka vladh8vas</p>
            <p>Scanography by Nastya Moskvitina by 444rer9</p>
            <p>Press-release by Sonya Spielberg</p>
          </div>
          <div class="description text-white mb-5">
            <p>
              Under the alias KIKOK works musician Pavel Fedoseev from Perm. Before
              pursuing his solo career, Pavel drummed for the band Gnoomes, playing
              shoegaze and touring across Europe. Now, Gnoomes are based in
              Slovenia—where they’ve gained European recognition—while Pavel has focused
              on studio work. The reason for this shift is an illness that prevents him from
              traveling long distances. Though he misses the lively festival scene, he still finds
              positives in his situation: he can dedicate himself to his passion, because now he
              can do "whatever he wants" and push forward his solo project, KIKOK.
            </p>
            <p>
              In 2017, his self-titled album "KIKOK" was released on the Dutch label Magnetron
              Music, and in 2019, the label put out his next album "SAUNA". 
              Pavel admits the material was raw, and he even cobbled together the cover art in Paint. 
              This spontaneity and fresh sound won over seasoned producers. However, the artist
              himself considered this success insufficient—his work isn’t meant for a broad
              audience, but collaborating with a major label was a valuable experience.
            </p>
            <p>
              KIKOK describes the distinctive sound of his early works as shoegaze-Italo-disco.
              Admittedly, this blend isn’t for everyone. However, his latest release on Mestnost — "Slow Crunch" — sounds completely different. The steady beat and synthetic
              structures have been replaced by fluid dynamics, expressive pauses, and rhythmic
              shifts. There’s more emotion, sensuality, and melody. The album was mixed and
              mastered by Kostya Kokokei, co-founder and creative force behind Mestnost.
            </p>
            <p>
              By the way, the artist’s alias comes from two words in his native Komi-Permyak
              language: "Ki" (hand) and "Kok" (foot). Pavel loves playing live and considers
              performances a special form of communication with the audience. He doesn’t
              often perform in his hometown of Perm, but when he does, it’s always an event.
              When Pavel is behind the console, it’s immediately clear why he’s KIKOK: his
              fingers, our feet—that’s how Komi-Permyak magic works, channeled through a tangle of cables.
              The album includes remixes by Ambidextrous, Gnoomes, Alina Valentina (NL),
              Anderdog, Lyudmila Severtseva, DJ HeadSick, and Overalone.
            </p>
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
          link: 'https://mestnost.bandcamp.com/album/slow-crunch',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/ge/album/slow-crunch/1807854354'
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/17b1CfEht9CQbURUIN1llc?si=up-2QLmrR2iIBuTnyz9Osg'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/36253526',
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000850873_23850873_8c68534ae4cf71c129'
        },
      ],
    }
  },
}
</script>

<style scoped>
.slow-crunch {
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
