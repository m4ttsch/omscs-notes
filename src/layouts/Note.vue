<template lang="html">
  <Layout>
    <div class="bg-gray-200">
      <div class="block lg:flex lg:justify-center">
        <slot />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'NoteLayout'
}
</script>
