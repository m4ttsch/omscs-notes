<template lang="html">
  <div class="ActiveSidebarLink">
    <a href="#" @click.prevent="expanded = !expanded">
      <div class="flex text-gray-700">
        <div class="mr-1 flex items-center">
          <i v-if="expanded" class="fas fa-minus fa-xs" />
          <i v-else class="fas fa-plus fa-xs" />
        </div>
        <p class="font-bold leading-tight">
          {{ note.title }}
        </p>
      </div>
    </a>
    <ul v-if="expanded">
      <li v-for="({ value, depth, anchor }, i) in headings" :key="i">
        <a
          :href="anchor"
          class="block text-gray-600 text-sm"
          :style="{ paddingLeft: `${(depth - 1) * 16}px` }"
          @click="logEvent('sidebar_click', { target: anchor })"
          >{{ value }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Analytics from '~/mixins/analytics'

export default {
  name: 'ActiveSidebarLink',
  mixins: [Analytics],

  props: {
    note: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      expanded: false,
    }
  },

  computed: {
    headings() {
      return this.note.headings.filter(
        (heading) => heading.depth === 2 || heading.depth === 3
      )
    },
  },
}
</script>
