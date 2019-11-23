<template lang="html">
  <div class="layout">
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
