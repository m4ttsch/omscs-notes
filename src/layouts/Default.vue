<template lang="html">
  <div class="layout bg-gray-100">
    <Header />
    <div class="pt-24">
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
