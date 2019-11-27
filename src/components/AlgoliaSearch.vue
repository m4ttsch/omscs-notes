<template lang="html">
  <div class="font-sans text-indigo-900 flex justify-end">
    <label class="relative max-w-xs w-full">
      <svgicon class="m-3 fill-current absolute inset-0" icon="icon-search" width="18" height="18" />
      <input placeholder="Search..." class="w-full shadow-inner bg-gray-200 py-1 px-4 pl-10 rounded-lg h-10 outline-none border-2 focus:border-indigo-900" />
    </label>
  </div>
</template>

<script>
import '~/compiled-icons/icon-search';

export default {
}
</script>
