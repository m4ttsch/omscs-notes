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
