<template>
  <NoteLayout>
    <template #expand-toggle>
      <a
        href="#"
        class="text-teal-600 text-xs block text-center bg-white border-gray-300 border-b py-1"
        @click.prevent="navExpanded = !navExpanded"
      >
        {{ navExpanded ? 'close' : 'navigate this note' }}
      </a>
    </template>
    <template #sidebar:sm>
      <div
        v-if="navExpanded"
        class="fixed z-10 h-full w-full bg-white"
      >
        <div class="relative h-full overflow-y-auto pb-20">
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
      <div :class="{'fixed': navExpanded}">
        <Content
          ref="content"
          :note="$page.currentNote"
        />
      </div>
    </template>
  </NoteLayout>
</template>

<page-query>
  query Note($id: ID!, $course: String!) {
    currentNote: note(id: $id) {
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

import Content from '~/components/note/Content'
import Sidebar from '~/components/note/Sidebar'

export default {
  name: 'Note',
  components: { Content, Sidebar },

  data() {
    return {
      navExpanded: false
    }
  },

  watch: {
    navExpanded() {
      const content = this.$refs.content.$el

      if (this.navExpanded) {
        this.notePosition = content.getBoundingClientRect().top
      } else {
        this.$nextTick(() => window.scrollTo({
          top: -this.notePosition + content.parentElement.getBoundingClientRect().top
        }))
      }
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
