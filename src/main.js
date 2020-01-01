// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas)
library.add(fab)
library.add(far)

import 'autotrack/lib/plugins/outbound-link-tracker';
import 'autotrack/lib/plugins/max-scroll-tracker';

ga('require', 'outboundLinkTracker')
ga('require', 'maxScrollTracker')

require('github-markdown-css/github-markdown.css')
require('typeface-lato')

import DefaultLayout from '~/layouts/Default.vue'
import NoteLayout from '~/layouts/Note.vue'

import VTooltip from 'v-tooltip'

export default function (Vue, { router, head, isClient }) {
  Vue.use(VTooltip)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
  Vue.component('NoteLayout', NoteLayout)
}
