<template lang="html">
  <div class="Content">
    <div class="p-2 lg:p-12">
      <div class="w-full max-w-2xl px-16 py-10 rounded shadow m-auto bg-white">
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
