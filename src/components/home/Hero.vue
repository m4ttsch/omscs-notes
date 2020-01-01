<template lang="html">
  <div class="Hero bg-indigo-100 px-5 sm:px-10 md:px-0 py-16 sm:py-32">
    <div class="flex justify-center lg:justify-between max-w-5xl w-100 m-auto">
      <div class="mb-16">
        <h1 class="text-xl sm:text-3xl leading-snug sm:leading-none text-gray-600">
          Welcome to lecture notes that are
          <br>
          <span class="text-indigo-800">
            clear, organized, and forever free.
          </span>
        </h1>
        <p class="text-sm sm:text-base leading-relaxed sm:leading-snug my-8 mb-10 max-w-xs sm:max-w-md">
          I built OMSCS Notes to share my notes with other students in the
          GATech OMSCS program. My notes are searchable, navigable, and,
          most importantly, free. I hope they help you on your journey
          here. Happy studying!
        </p>
        <a
          href="#"
          class="bg-indigo-800 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-5 border-b-4 border-indigo-900 hover:border-indigo-800 rounded mr-4"
          @click.prevent="scrollIntoView('notebooks')"
        >
          Notebooks
        </a>
        <a
          href="#"
          class="bg-teal-200 hover:bg-teal-100 text-teal-900 text-lg font-semibold py-3 px-5 border-b-4 border-teal-300 hover:border-teal-200 rounded"
          @click.prevent="scrollIntoView('testimonials')"
        >
          Testimonials
        </a>
      </div>
      <div class="hidden lg:block">
        <g-image
          src="~/assets/images/dev_productivity.svg"
          width="400"
          alt="man-studying-on-computer"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    scrollIntoView(target) {
      this.$analytics.logEvent('hero_click', { target })
      this.$emit('scrollIntoView', target)
    }
  }
}
</script>
