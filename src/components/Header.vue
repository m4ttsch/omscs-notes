<template lang="html">
  <div class="Header fixed w-full bg-white">
    <hr class="gradient-border border-0">
    <header class="header px-8 py-4 border-b border-gray-300">
      <nav class="flex justify-between">
        <div class="flex justify-between">
          <g-link to="/" class="p-2 hover:text-gray-300">GIOS</g-link>
          <g-link to="/" class="p-2">CN</g-link>
          <g-link to="/" class="p-2">IIS</g-link>
        </div>
        <div>
          <g-link to="/">
            <img src="/img/icons/020-elearning.png" width="40" height="40" />
          </g-link>
        </div>
        <div>
          <AlgoliaSearch />
        </div>
      </nav>
    </header>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import AlgoliaSearch from './AlgoliaSearch'

  export default {
    name: 'Header',
    components: { AlgoliaSearch }
  }
</script>

<style scoped>
.gradient-border {
  height: 5px;
  background: linear-gradient(45deg, #7befe4, #1c868e, #4a1453);
}
</style>
