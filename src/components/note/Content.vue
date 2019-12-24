<template lang="html">
  <div class="Content">
    <div class="px-16 py-10 rounded shadow m-auto bg-white">
      <div class="mb-10">
        <h1 class="text-3xl font-bold">
          {{ note.title }}
        </h1>
        <p class="pb-8">
          Total Reading time: {{ note.timeToRead }} Minutes
        </p>
        <hr class="border-indigo-800">
      </div>
      <div class="text-gray-700 markdown-body" v-html="note.content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    note: {
      type: Object,
      required: true
    }
  }
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
