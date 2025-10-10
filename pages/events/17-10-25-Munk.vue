<template>
  <div class="dubree-17-10-25 w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img src="/static/17-10-25-munk.jpg" width="80%" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">МУНК 17-10-25</h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-12 col-lg-4 col-md-6 mt-5 text-nowrap"
            >
            <div v-if="link.emoji">
              {{ link.icon }}
            </div>
            <div v-else>
              <font-awesome-icon
                :icon="['fab', link.icon]"
                class="text-white"
              />
            </div>
              <a :href="link.link" target="_blank" class="text-white social">
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            На тревел-карте лейбла «Местность» появилась еще одна точка — наукоград Черноголовка в Московской области. Там живет и работает Виталий aka Dubree, который в этот вечер представит свою новую работу: альбом Ratio et Caritas. Кроме того виниловые околодабовые сеты отыграют Ник Завриев, музыкальный журналист и автор легендарного проекта Ambidextrous, и Илья Рассказов, энтузиаст электронного джаза и основатель просветительского проекта о музыке HEADZ.FM. Еще один музыкант с лейбла «Местность» Anderdog, недавно выпустивший альбом The Way of the Dog, выступит с лайвом, где можно будет услышать новые треки, подготовленные к следующему релизу.
          </p>
          <p>
            Dubree выбрал для релиза латинское название Ratio et Caritas, что означает «разум и милосердие» и отражает оба взгляда на мироздание — научный и эмоциональный. Виталий работает в жанре даба и выпускается на лейпцигском лейбле Insectorama, однако звучание нового альбома приближено к IDM. В каждом треке автором зашиты семплы, отсылающие к тому или иному советскому фильму в жанре научной фантастики, поэтому релиз получился не только эмоциональным, но и лампово ностальгическим.
          </p>
          <p>
            17 октября, 20:00, бар Мунк
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dubree171025',
  data() {
    return {
      links: [
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/mestnost_dubree'
        },
        {
          name: 'Билеты',
          icon: '🎟️',
          link: 'https://moscow.qtickets.events/191669-mestnost',
          emoji: true
        }
      ],
    }
  },
}
</script>

<style scoped>
.dubree-17-10-25 {
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
  text-align: justify;
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.08em;
  }
}

.social {
  font-size: 1em;
  text-decoration: none;
  margin-left: 0.1em;
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
