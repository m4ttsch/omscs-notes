<template lang="html">
  <div class="Sidebar">
    <div class="w-full p-5 md:mr-10 text-gray-600 h-full">
      <div
        v-for="({ section, notes }) in sidebarSections"
        :key="section"
      >
        <div class="mb-5">
          <p class="text-indigo-800 text-xl mb-3">
            {{ section }}
          </p>
          <div
            v-for="({ node: { lecture, title, path }}) in notes"
            :key="lecture"
          >
            <div class="mb-1">
              <p
                v-if="title === current.title"
                class="text-gray-700 font-bold"
              >
                {{ title }}
              </p>
              <g-link
                v-else
                :to="path"
              >
                {{ title }}
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebars from '~/../data/sidebars.json'

export default {
  name: 'Sidebar',
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
          return this.others.find(({ node: { lecture } }) => note === lecture)
        })

        return { section, notes }
      })
    }
  }
}

</script>

<style lang="scss">
  @screen lg {
    .Sidebar > div {
      @apply sticky;
      max-height: 48rem;
      top: 8rem;
    }
  }
</style>
