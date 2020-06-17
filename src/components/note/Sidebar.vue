<template lang="html">
  <div class="Sidebar">
    <div class="w-full px-5 md:mr-10 text-gray-600 h-full">
      <div class="bg-white text-gray-800 shadow-lg p-5 mb-5 text-sm">
        <p>
          <b>Happy studying!</b> Did you find my notes useful this semester?
          Please consider
          <a
            class="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
            :href="$static.metadata.paypal"
            aria-label="paypal"
            @click="logEvent('nav_click', { target: 'paypal' })"
          >
            giving me a few bucks
          </a>
          (<i>no more than $20, please</i>). Contributions like yours help me
          keep these notes forever free.
        </p>
      </div>
      <SidebarGroup
        v-for="{ section, notes } in sidebarSections"
        :key="section"
        :section="section"
        :notes="notes"
        :current="current"
      />
    </div>
  </div>
</template>

<static-query>
  query {
    metadata {
      paypal
    }
  }
</static-query>

<script>
import sidebars from '~/../data/sidebars.json'
import SidebarGroup from './Sidebar/SidebarGroup'

export default {
  name: 'Sidebar',
  components: { SidebarGroup },
  props: {
    current: {
      type: Object,
      required: true,
    },

    others: {
      type: Array,
      required: true,
    },
  },

  computed: {
    sidebarSections() {
      return sidebars[this.current.course].map(({ section, notes }) => {
        notes = notes.map((note) => {
          return this.others.find(({ lecture }) => note === lecture)
        })

        return { section, notes }
      })
    },
  },
}
</script>
