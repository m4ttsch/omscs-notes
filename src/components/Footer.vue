<template lang="html">
  <div class="bg-indigo-800 text-gray-300">
    <div class="w-100 max-w-5xl m-auto text-center py-4">
      <div class="text-xs">
        <p>
          OMSCS Notes is made with
          <font-awesome-icon
            class="text-red-600"
            :icon="['fas', 'heart']"
          />
          in NYC by Matt Schlenker.
        </p>
        <p>
          Copyright &copy; 2019-{{ new Date().getFullYear() }}. All rights reserved.
        </p>
        <g-link
          to="/privacy"
          class="block text-gray-500"
        >
          privacy policy
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
