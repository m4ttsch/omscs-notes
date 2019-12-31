<template lang="html">
  <div class="w-full font-sans text-indigo-800 flex justify-end">
    <label class="relative w-full">
      <font-awesome-icon
        icon="search"
        class="m-3 fill-current absolute inset-0"
        width="18"
        height="18"
      />
      <input
        disabled
        placeholder="Search down while site is reindexed."
        class="w-full shadow-inner bg-gray-200 py-1 px-4 pl-10 rounded-lg h-10 outline-none border focus:border-indigo-800"
        aria-label="Search notes"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: 'AlgoliaSearch'
}
</script>
