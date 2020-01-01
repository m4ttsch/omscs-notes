// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

import * as firebase from 'firebase/app'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyBzNAg7AxZEYNtZ_9hhZmGmcfIL_kDy7RU',
  authDomain: 'omscs-notes.firebaseapp.com',
  databaseURL: 'https://omscs-notes.firebaseio.com',
  projectId: 'omscs-notes',
  storageBucket: 'omscs-notes.appspot.com',
  messagingSenderId: '683442766043',
  appId: '1:683442766043:web:e2181ea79439a135b54cfe',
  measurementId: 'G-P5B166Q4PP'
}

firebase.initializeApp(firebaseConfig)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas)
library.add(fab)
library.add(far)

export default function (Vue) {
  Vue.prototype.$analytics = firebase.analytics()

  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}
