<template>
  <NoteLayout>
    <template #expand-toggle>
      <a
        href="#"
        class="text-teal-600 text-xs block text-center bg-white border-gray-300 border-b py-1"
        @click.prevent="navExpanded = !navExpanded"
      >
        {{ navExpanded ? 'close' : 'navigate this notebook' }}
      </a>
    </template>
    <template #sidebar:sm>
      <div
        v-show="navExpanded"
        class="fixed z-10 h-full w-full bg-white"
      >
        <div class="relative h-full overflow-y-auto pb-20 pl-10">
          <Sidebar
            :current="$page.currentNote"
            :others="$page.otherNotesInCourse.edges"
          />
        </div>
      </div>
    </template>
    <template #sidebar:lg>
      <Sidebar
        :current="$page.currentNote"
        :others="$page.otherNotesInCourse.edges"
      />
    </template>
    <template #content>
      <Content
        ref="content"
        :note="$page.currentNote"
      />
    </template>
  </NoteLayout>
</template>

<page-query>
  query Note($id: ID!, $course: String!) {
    currentNote: note(id: $id) {
      course
      lecture
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
    otherNotesInCourse: allNote(filter: { course: { eq: $course } }) {
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

import NoteLayout from '~/layouts/Note'
import Content from '~/components/note/Content'
import Sidebar from '~/components/note/Sidebar'

export default {
  name: 'Note',
  components: { Content, Sidebar, NoteLayout },

  data() {
    return {
      navExpanded: false
    }
  },

  watch: {
    $route() {
      this.navExpanded = false
    },

    navExpanded() {
      document.body.classList.toggle('overflow-hidden')
    }
  },

  metaInfo() {
    return {
      title: this.$page.currentNote.title,
      meta: [
        { key: 'description', name: 'description', content: this.$page.currentNote.title }
      ]
    }
  }
}
</script>
