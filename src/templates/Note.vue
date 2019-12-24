<template>
  <Layout>
    <div class="bg-gray-200 p-12">
      <div class="flex justify-center">
        <Sidebar :notes="$page.notes.edges" :current="$page.note"/>
        <div class="w-full max-w-2xl">
          <Content :note="$page.note" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Note ($id: ID!, $course: String!) {
  note: note (id: $id) {
    course
    title
    path
    timeToRead
    content
  }

  notes: allNote(filter: { course: { eq: $course }}) {
    edges {
      node {
        lecture
        title
        path
      }
    }
  }
}
</page-query>

<script>
import Content from '~/components/note/Content'
import Sidebar from '~/components/note/Sidebar'

export default {
  name: 'Note',
  components: { Content, Sidebar },

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
