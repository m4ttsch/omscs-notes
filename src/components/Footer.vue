<template lang="html">
  <div class="bg-indigo-800 text-gray-300">
    <div class="w-100 max-w-5xl m-auto text-center py-6">
      <div class="text-sm">
        <p>OMSCS Notes is made with
          <font-awesome-icon class="text-red-600" :icon="['fas', 'heart']" size="md" />
          in NYC by Matt Schlenker.
        </p>
        <p>
          Copyright &copy; 2019-{{ new Date().getFullYear() }}. All rights reserved.
        </p>
        <a href="#" class="mt-2 block text-gray-500">privacy policy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
