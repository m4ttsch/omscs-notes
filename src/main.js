// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas)
library.add(fab)
library.add(far)

export default function (Vue, { head }) {
  if (process.env.GRIDSOME_ENV === 'production') {
    head.script.push({
      src: 'https://omscs-notes.com/__/firebase/7.6.1/firebase-app.js',
      body: true
    })

    head.script.push({
      src: 'https://omscs-notes.com/__/firebase/7.6.1/firebase-analytics.js',
      body: true
    })

    head.script.push({
      src: 'https://omscs-notes.com/__/firebase/init.js',
      body: true
    })

    head.script.push({
      src: "https://gumroad.com/js/gumroad-embed.js",
      body: true
    })
  }

  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}
