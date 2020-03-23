<template lang="html">
  <div class="text-gray-700 font-sans min-h-screen flex flex-col">
    <Header>
      <slot name="header-slot" />
    </Header>
    <div class="flex-1">
      <slot />
    </div>
    <Footer />
    <CoronaMessage />
  </div>
</template>

<script>
require('typeface-lato')

import Header from '~/components/Header'
import Footer from '~/components/Footer'
import CoronaMessage from '~/components/notification/CoronaMessage'

export default {
  name: 'Layout',
  components: { Header, Footer, CoronaMessage }
}
</script>
