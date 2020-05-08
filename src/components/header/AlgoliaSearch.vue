<template lang="html">
  <div class="AlgoliaSearch">
    <div class="w-full font-sans text-indigo-800 flex justify-end">
      <label class="relative w-full">
        <i class="fa fa-search fa-md m-3 fill-current absolute inset-0 z-10" />
        <input
          id="algolia-search"
          placeholder="Search..."
          class="w-full shadow-inner bg-gray-200 py-1 px-4 pl-10 rounded-lg h-10 outline-none border focus:border-indigo-800"
          aria-label="Search notes"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlgoliaSearch',
  mounted() {
    docsearch({
      apiKey: '9d9ff52895877e8baeac290c95e89704',
      indexName: 'omscs-notes',
      inputSelector: '#algolia-search',
      handleSelected(_, __, { url }) {
        window.open(url, '_self')
      },
    })
  },
}
</script>

<style lang="scss">
.algolia-autocomplete {
  width: 100%;
}
</style>
