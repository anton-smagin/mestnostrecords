
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
  faSoundcloud,
  faMixcloud
} from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faTicket, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
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
  faSoundcloud,
  faMixcloud,
  faLocationDot,
  faTicket,
  faBars,
  faXmark
)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
