<template>
  <Layout>
    <Hero />
    <Testimonials />
    <ThankYou />
    <Courses />
  </Layout>
</template>


<script>
import Hero from '~/components/home/Hero'
import Testimonials from '~/components/home/Testimonials'
import ThankYou from '~/components/home/ThankYou'
import Courses from '~/components/home/Courses'

export default {
  components: { Hero, Testimonials, ThankYou, Courses },
  metaInfo: {
    title: 'Home'
  }
}
</script>
