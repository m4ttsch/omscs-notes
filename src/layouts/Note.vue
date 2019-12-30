<template lang="html">
  <Layout class="bg-gray-200">
    <template #header-slot>
      <div class="block lg:hidden">
        <slot name="expand-toggle" />
      </div>
    </template>
    <div class="h-full">
      <div class="lg:hidden w-full">
        <slot name="sidebar:sm" />
      </div>
      <div class="flex justify-center">
        <div class="sticky-sidebar hidden lg:sticky lg:block overflow-y-auto">
          <slot name="sidebar:lg" />
        </div>
        <div>
          <slot name="content" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'NoteLayout',
}
</script>

<style lang="scss" scoped>
  .sticky-sidebar {
    top: 8rem;
    height: calc(100vh - 200px);
  }
</style>
