<template lang="html">
  <div class="SidebarGroup">
    <div class="mb-5">
      <p class="text-indigo-800 text-xl mb-3">
        {{ section }}
      </p>
      <ul>
        <li v-for="(note, i) in notes" :key="i">
          <div class="mb-1 flex">
            <ActiveSidebarLink
              v-if="note.lecture === current.lecture"
              :note="current"
            />
            <a v-else-if="note.external" :href="note.path" target="_blank" class="display-flex">
              <span class="display-block mr-1">{{ note.title }}</span>
              <i class="fas fa-external-link-alt" />
            </a>
            <g-link v-else :to="note.path" class="text-gray-700 leading-tight">
              {{ note.title }}
            </g-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ActiveSidebarLink from './ActiveSidebarLink'

export default {
  name: 'SidebarGroup',
  components: { ActiveSidebarLink },
  props: {
    section: {
      type: String,
      required: true,
    },
    current: {
      type: Object,
      required: true,
    },
    notes: {
      type: Array,
      required: true,
    },
  },
}
</script>
