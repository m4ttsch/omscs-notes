<template lang="html">
  <div class="ExternalLinks">
    <div class="flex">
      <div class="icon-link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="$static.metadata.mainGithub"
          aria-label="github"
          @click="logEvent('nav_click', { target: 'github' })"
        >
          <i class="fab fa-github fa-lg" />
        </a>
      </div>
      <div class="icon-link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="$static.metadata.linkedin"
          aria-label="linkedin"
          @click="logEvent('nav_click', { target: 'linkedin' })"
        >
          <i class="fab fa-linkedin-in fa-lg" />
        </a>
      </div>
      <div class="icon-link border-gray-300 border-r-2 pr-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="`mailto:${$static.metadata.email}`"
          aria-label="email"
          @click="logEvent('nav_click', { target: 'email' })"
        >
          <i class="far fa-envelope fa-lg" />
        </a>
      </div>
      <div class="icon-link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="$static.metadata.amazon"
          aria-label="amazon"
          @click="logEvent('nav_click', { target: 'amazon' })"
        >
          <i class="fab fa-amazon fa-lg" />
        </a>
      </div>
      <div class="icon-link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="$static.metadata.paypal"
          aria-label="paypal"
          @click="logEvent('nav_click', { target: 'paypal' })"
        >
          <i class="fab fa-paypal fa-lg" />
        </a>
      </div>
    </div>
  </div>
</template>

<static-query>
  query {
    metadata {
      mainGithub
      linkedin
      email
      paypal
      amazon
    }
  }
</static-query>

<script>
import Analytics from '~/mixins/analytics'
export default {
  name: 'ExternalLinks',
  mixins: [Analytics],
}
</script>

<style lang="scss" scoped>
.icon-link {
  @apply mr-4;

  &:last-child {
    @apply mr-0;
  }

  a:hover {
    @apply text-teal-200;
  }
}
</style>
