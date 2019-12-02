<template lang="html">
  <div class="layout text-gray-700 font-sans bg-gray-200">
    <Header />
    <div class="pt-20">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header';

export default {
  name: 'Layout',
  components: { Header }
}
</script>
