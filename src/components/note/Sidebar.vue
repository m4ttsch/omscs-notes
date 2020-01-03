<template lang="html">
  <div class="Sidebar">
    <div class="w-full p-5 md:mr-10 text-gray-600 h-full">
      <SidebarGroup
        v-for="({ section, notes }) in sidebarSections"
        :key="section"
        :section="section"
        :notes="notes"
        :current="current"
      />
    </div>
  </div>
</template>

<script>
import sidebars from '~/../data/sidebars.json'
import SidebarGroup from './Sidebar/SidebarGroup'

export default {
  name: 'Sidebar',
  components: { SidebarGroup },
  props: {
    current: {
      type: Object,
      required: true
    },

    others: {
      type: Array,
      required: true
    }
  },

  computed: {
    sidebarSections() {
      return sidebars[this.current.course].map(({ section, notes }) => {
        notes = notes.map(note => {
          return this.others.find(({ lecture }) => note === lecture)
        })

        return { section, notes }
      })
    }
  }
}

</script>
