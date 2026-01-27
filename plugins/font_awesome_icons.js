
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faApple,
  faYandex,
  faBandcamp,
  faSpotify,
  faVk,
  faFacebook,
  faInstagram,
  faTelegram,
  faSoundcloud
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faApple,
  faYandex,
  faBandcamp,
  faSpotify,
  faVk,
  faFacebook,
  faInstagram,
  faTelegram,
  faSoundcloud
)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
