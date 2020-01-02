<template lang="html">
  <div class="Content">
    <div class="p-2 pb-4 lg:p-12">
      <div class="w-full max-w-2xl px-8 lg:px-16 py-5 lg:py-10 rounded shadow m-auto bg-white">
        <div class="py-5">
          <div class="mb-1">
            <p class="text-gray-500 leading-none text-sm mb-1">
              {{ note.course | pretty }}
            </p>
            <h1 class="text-4xl leading-none mb-8">
              {{ note.title }}
            </h1>
            <p class="text-indigo-800 uppercase text-sm">
              {{ note.timeToRead }} minute read
            </p>
          </div>
          <hr class="w-full border-gray-300">
        </div>
        <div
          class="markdown-body"
          v-html="note.content"
        />
      </div>
    </div>
  </div>
</template>

<script>
require('github-markdown-css/github-markdown.css')

export default {
  name: 'Content',

  filters: {
    pretty(course) {
      return course.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },

  mounted() {
    document.addEventListener('scroll', () => this.scrollSpy(), { passive: true })
  },

  methods: {
    scrollSpy(e) {
      const { scrollY, innerHeight } = window
      const { body: { scrollHeight } } = document

      this.$root.$emit(
        'scroll',
        (scrollY + innerHeight * scrollY / (scrollHeight - innerHeight)) / scrollHeight
      )
    }
  }
}
</script>

<style lang="scss">
.markdown-body {
  @apply font-sans;
  @apply text-gray-700;

  a {
    @apply text-teal-600;
  }

  ul {
    @apply list-disc;
  }

  details {
    @apply my-10;
  }

  h1 {
    @apply hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply border-none;

    a {
      &:hover {
        @apply cursor-default;
        @apply no-underline;
      }
    }
  }

  h1 {
    .icon.icon-link {
      @apply hidden;
    }
  }

  h2, h3 {
    a {
      &:before {
        content: '';
        display: block;
        position: relative;
        width: 0;
        height: 7rem;
        margin-top: -7rem;

        @screen lg {
          height: 6rem;
          margin-top: -6rem;
        }
      }
    }
  }

  .icon.icon-link {
    @apply inline-flex;
    @apply items-end;
    @apply mr-2;
    @apply cursor-pointer;
    @apply text-gray-300;

    &:hover {
      @apply text-gray-500;
    }

    &:before {
      font-family: 'octicons-link';
      content: '\f05c';
      @apply text-lg;
    }
  }

  .shiki {
    overflow-x: auto;
  }
}
</style>
