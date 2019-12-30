<template lang="html">
  <div class="Sidebar">
    <div class="w-full p-5 md:mr-10 text-gray-600 h-full md:overflow-y-auto">
      <SidebarContent
        :notes="notes"
        :current="current"
      />
    </div>
  </div>
</template>

<script>
import SidebarContent from './SidebarContent'

export default {
  name: 'Sidebar',
  components: { SidebarContent },
  props: {
    notes: {
      type: Array,
      required: true
    },

    current: {
      type: Object,
      required: true
    }
  }
}
</script>
