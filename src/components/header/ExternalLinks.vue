<template lang="html">
  <div class="ExternalLinks">
    <div class="flex justify-center">
      <div class="icon-link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="$static.metadata.mainGithub"
          aria-label="github"
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
        >
          <i class="fab fa-paypal fa-lg" />
        </a>
      </div>
      <div class="icon-link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="$static.metadata.buyMeACoffee"
          aria-label="buy me a beer"
        >
          <span class="text-lg leading-tight">🍺</span>
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
      buyMeACoffee
    }
  }
</static-query>

<script>
export default {
  name: 'ExternalLinks',
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
