<template lang="html">
  <div class="layout text-gray-700 font-sans bg-gray-100 min-h-screen">
    <Header />
    <div class="pt-20">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
  name: 'Layout',
  components: { Header, Footer }
}
</script>
