<template>
  <NoteLayout>
    <Sidebar :notes="$page.notes.edges" :current="$page.note"/>
    <Content :note="$page.note" />
  </NoteLayout>
</template>

<page-query>
query Note ($id: ID!, $course: String!) {
  note: note (id: $id) {
    course
    title
    path
    timeToRead
    content
    headings {
      value
      depth
      anchor
    }
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
