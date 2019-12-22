<template>
  <Layout>
    <Hero />
    <Testimonials />
    <ThankYou />
    <Notebooks />
  </Layout>
</template>


<script>
import Hero from '~/components/home/Hero'
import Testimonials from '~/components/home/Testimonials'
import ThankYou from '~/components/home/ThankYou'
import Notebooks from '~/components/home/Notebooks'

export default {
  components: { Hero, Testimonials, ThankYou, Notebooks },
  metaInfo: {
    title: 'Home'
  }
}
</script>
