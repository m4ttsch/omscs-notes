// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

let Notifications

if (process.isServer) {
  Notifications = require('vue-notification/dist/ssr.js')
} else {
  Notifications = require('vue-notification').default
}

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
  }

  Vue.use(Notifications)
  Vue.component('Layout', DefaultLayout)
}
