<template>
  <Layout>
    <div class="w-100 pt-12 pb-20 max-w-xl m-auto markdown-body">
      <h1>
        {{ $page.note.title }}
      </h1>
      <p>Total Reading time: <span class="text-indigo-800">{{ $page.note.timeToRead }} Minutes</span></p>
      <div class="content" v-html="$page.note.content" />
    </div>
  </Layout>
</template>

<page-query>
query Note ($path: String!) {
  note: note (path: $path) {
    title
    path
    timeToRead
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.note.title,
      meta: [
        { key: 'description', name: 'description', content: this.$page.note.title }
      ]
    }
  }
}
</script>

<style lang="scss">
.markdown-body {
  h1, h2, h3, h4, h5, h6 {
    @apply border-none;
  }

  a {
    @apply text-teal-600;
  }
}
</style>
