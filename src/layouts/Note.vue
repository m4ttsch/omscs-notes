<template lang="html">
  <Layout class="bg-gray-200">
    <template #header-slot>
      <div class="block lg:hidden">
        <slot name="expand-toggle" />
      </div>
      <div class="h-1 bg-teal-600" :style="{ width: `${scrollPercentage}%` }" />
    </template>
    <div class="h-full">
      <div class="lg:hidden w-full">
        <slot name="sidebar:sm" />
      </div>
      <div class="flex justify-center">
        <div
          class="sticky-sidebar hidden lg:sticky lg:block overflow-y-auto max-w-xs"
        >
          <slot name="sidebar:lg" />
        </div>
        <div class="w-full lg:w-auto min-h-screen">
          <slot name="content" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'NoteLayout',
  data() {
    return {
      scrollPercentage: 0,
    }
  },

  mounted() {
    this.$notify({ group: 'pdf-discount', position: 'top center' })
    this.$root.$on('scroll', (ratio) => (this.scrollPercentage = ratio * 100))
  },
}
</script>

<style lang="scss" scoped>
.sticky-sidebar {
  top: 8.125rem;
  height: calc(100vh - 200px);
}
</style>
