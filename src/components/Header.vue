<template lang="html">
  <div class="Header font-sans fixed w-full bg-white">
    <hr class="gradient-border border-0">
    <header class="header px-8 py-4 border-b border-gray-300 text-gray-900">
      <nav class="flex justify-between">
        <div class="flex flex-start">
          <g-link to="/" class="p-2 pr-4">
            <img src="/img/icons/020-elearning.png" width="24" height="24" />
          </g-link>
          <g-link to="/" class="p-2">GIOS</g-link>
          <g-link to="/" class="p-2">CN</g-link>
          <g-link to="/" class="p-2">IIS</g-link>
        </div>
        <div class="flex-1">
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
