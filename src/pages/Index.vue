<template>
  <Layout>
    <Hero />
    <Wave />
    <Testimonials />
    <ThankYou />
    <Notebooks />
  </Layout>
</template>


<script>
import Hero from '~/components/home/Hero'
import Wave from '~/components/util/GentleWave'
import Testimonials from '~/components/home/Testimonials'
import ThankYou from '~/components/home/ThankYou'
import Notebooks from '~/components/home/Notebooks'

export default {
  components: { Hero, Wave, Testimonials, ThankYou, Notebooks },
  metaInfo: {
    title: 'Home'
  }
}
</script>
