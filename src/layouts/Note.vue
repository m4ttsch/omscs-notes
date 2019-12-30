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

<style lang="scss">
.markdown-body {
  @apply font-sans;
  @apply text-gray-700;

  h1, h2, h3, h4, h5, h6 {
    @apply border-none;
  }

  a {
    @apply text-teal-600;
  }

  ul {
    @apply list-disc;
  }

  details {
    @apply my-10;
  }
}
</style>
