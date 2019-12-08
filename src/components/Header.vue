<template lang="html">
  <div class="Header fixed w-full z-10 bg-white">
    <hr class="gradient-border h-1 border-0">
    <header class="header border-gray-300 border text-gray-600">
      <nav class="flex justify-between">
        <div class="flex px-8 pt-4 content-center">
          <g-link to="/" class="p-2 mr-4">
            <g-image src="~/assets/images/favicon.png" width="30" height="30"/>
          </g-link>
          <g-link to="/" class="p-2 border-b-2 border-transparent hover:text-indigo-800 hover:border-indigo-800">
            GIOS
          </g-link>
          <g-link to="/" class="p-2 border-b-2 border-transparent hover:text-indigo-800 hover:border-indigo-800">
            CN
          </g-link>
          <g-link to="/" class="p-2 border-b-2 border-transparent hover:text-indigo-800 hover:border-indigo-800">
            IIS
          </g-link>
        </div>
        <div class="flex flex-1 justify-end px-4 py-4">
          <div class="max-w-xs w-full flex justify-between">
            <AlgoliaSearch />
          </div>
          <div class="flex items-center ml-4 text-gray-400 justify-center">
            <a target="_blank" rel="noopener noreferrer" :href="$static.metadata.github" class="mx-4 hover:text-teal-300">
              <font-awesome-icon :icon="['fab', 'github']" size="lg" />
            </a>
            <a target="_blank" rel="noopener noreferrer" :href="$static.metadata.linkedin" class="mx-4 hover:text-teal-300">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" />
            </a>
            <a target="_blank" rel="noopener noreferrer" :href="`mailto:${$static.metadata.email}`" class=" mx-4 hover:text-teal-300">
              <font-awesome-icon :icon="['far', 'envelope']" size="lg" />
            </a>
          </div>
        </div>
      </nav>
    </header>
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
  import AlgoliaSearch from './AlgoliaSearch'

  export default {
    name: 'Header',
    components: { AlgoliaSearch }
  }
</script>

<style scoped>
  .gradient-border {
    /* Teal-200, Teal-600, Indigo-900 */
    background: linear-gradient(45deg, #B2F5EA, #3C366B);
  }
</style>
