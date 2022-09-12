import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faApple,
  faYandex,
  faBandcamp,
  faSpotify,
  faVk,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faApple)
library.add(faYandex)
library.add(faBandcamp)
library.add(faSpotify)
library.add(faVk)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
