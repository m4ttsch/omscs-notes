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
  Vue.use(Notifications)
  Vue.component('Layout', DefaultLayout)
}
