<template lang="html">
  <div class="text-gray-700 font-sans min-h-screen flex flex-col">
    <Header>
      <slot name="header-slot" />
    </Header>
    <div class="flex-1">
      <slot />
    </div>
    <Footer />
    <ThanksgivingDiscount />
  </div>
</template>

<script>
import ThanksgivingDiscount from '~/components/notification/ThanksgivingDiscount'

import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'Layout',
  components: { Header, Footer, ThanksgivingDiscount },
}
</script>
