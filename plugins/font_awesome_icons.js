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

library.add(faApple)
library.add(faYandex)
library.add(faBandcamp)
library.add(faSpotify)
library.add(faVk)
library.add(faFacebook)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
