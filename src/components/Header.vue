<template lang="html">
  <div class="Header sticky top-0 z-10">
    <header class="w-full bg-white border-gray-300 border-b relative">
      <nav class="py-4 px-4 sm:px-8 flex items-center">
        <div class="mr-4 sm:mr-8">
          <IconHomeLink />
        </div>
        <div class="text-gray-600 hidden md:block">
          <PrimaryNavLinks />
        </div>
        <div class="flex flex-row-reverse flex-1">
          <div class="w-full lg:max-w-xs">
            <AlgoliaSearch />
          </div>
        </div>
        <div class="ml-8 text-gray-400 hidden lg:block">
          <ExternalLinks />
        </div>
        <div
          class="ml-4 sm:ml-8 block lg:hidden text-indigo-800 cursor-pointer"
        >
          <div v-if="!expanded" class="w-5">
            <a href="#" @click.prevent="expanded = true">
              <i class="fas fa-bars fa-lg" />
            </a>
          </div>
          <div v-else class="w-5">
            <a href="#" @click.prevent="expanded = false">
              <i class="fas fa-times fa-lg" />
            </a>
          </div>
        </div>
      </nav>
    </header>
    <div
      v-show="expanded"
      class="sm:flex lg:hidden items-center justify-between md:justify-center py-4 sm:px-8 border-gray-300 border-b bg-white w-full"
    >
      <div class="text-gray-600 mb-3 md:hidden sm:mb-0">
        <PrimaryNavLinks @click="expanded = false" />
      </div>
      <div class="text-gray-400">
        <ExternalLinks />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import IconHomeLink from './header/IconHomeLink'
import AlgoliaSearch from './header/AlgoliaSearch'
import PrimaryNavLinks from './header/PrimaryNavLinks'
import ExternalLinks from './header/ExternalLinks'

export default {
  name: 'Header',
  components: { AlgoliaSearch, IconHomeLink, PrimaryNavLinks, ExternalLinks },

  data() {
    return {
      expanded: false,
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  &::before {
    content: '';
    height: 4px;
    width: 100%;
    display: block;
    background: linear-gradient(45deg, #b2f5ea, #3c366b);
  }
}
</style>
