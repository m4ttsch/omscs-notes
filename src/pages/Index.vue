<template>
  <Layout>
    <Hero @scrollIntoView="_scrollIntoView" />
    <Wave />
    <Testimonials ref="testimonials" />
    <ThankYou />
    <Notebooks ref="notebooks" />
  </Layout>
</template>


<script>
import Hero from '~/components/home/Hero'
import Wave from '~/components/home/GentleWave'
import Testimonials from '~/components/home/Testimonials'
import ThankYou from '~/components/home/ThankYou'
import Notebooks from '~/components/home/Notebooks'

export default {
  name: 'Home',
  components: { Hero, Wave, Testimonials, ThankYou, Notebooks },

  metaInfo: {
    title: 'Home',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Clear, organized, and forever free OMSCS lecture notes'
      }
    ]
  },

  methods: {
    _scrollIntoView(target) {
      window.scrollTo({
        top: this.$refs[target].$el.getBoundingClientRect().top - 50,
        behavior: 'smooth'
      })
    }
  }
}
</script>
