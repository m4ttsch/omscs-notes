<template lang="html">
  <div class="Content">
    <div class="p-2 pb-4 lg:p-12">
      <div class="w-full max-w-2xl px-8 lg:px-16 py-5 lg:py-10 rounded shadow m-auto bg-white">
        <div
          class="markdown-body"
          v-html="note.content"
        />
      </div>
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

  // This is ugly and hacky, but it will have to do for now
  h2, h3 {
    padding-top: 110px;
    margin-top: -110px;

    @screen lg {
      padding-top: 90px;
      margin-top: -90px;
    }
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
