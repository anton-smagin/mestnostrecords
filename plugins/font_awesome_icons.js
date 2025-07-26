
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faApple,
  faYandex,
  faBandcamp,
  faSpotify,
  faVk,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faApple,
  faYandex,
  faBandcamp,
  faSpotify,
  faVk,
  faFacebook
)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
