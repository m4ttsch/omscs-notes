// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'github-markdown-css/github-markdown.css'
import VueSVGIcon from 'vue-svgicon'
require('typeface-source-sans-pro')


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(VueSVGIcon)
  Vue.component('Layout', DefaultLayout)
}
