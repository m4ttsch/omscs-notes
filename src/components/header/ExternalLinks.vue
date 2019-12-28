<template lang="html">
  <div class="ExternalLinks">
    <div class="flex">
      <div class="icon-link">
        <a target="_blank" rel="noopener noreferrer" :href="$static.metadata.github">
          <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
        </a>
      </div>
      <div class="icon-link">
        <a target="_blank" rel="noopener noreferrer" :href="$static.metadata.linkedin">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" />
        </a>
      </div>
      <div class="icon-link">
        <a target="_blank" rel="noopener noreferrer" :href="`mailto:${$static.metadata.email}`">
          <font-awesome-icon :icon="['far', 'envelope']" size="lg" />
        </a>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    github
    linkedin
    email
  }
}
</static-query>

<script>
export default {
  name: 'ExternalLinks'
}
</script>

<style lang="scss" scoped>
  .icon-link {
    @apply mr-4;

    &:last-child {
      @apply mr-0;
    }

    &:hover {
      @apply text-teal-200;
    }
  }
</style>
