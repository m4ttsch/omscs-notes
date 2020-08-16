<template lang="html">
  <div class="Hero bg-indigo-100 px-5 sm:px-10 md:px-0 py-16 sm:py-32">
    <div class="flex justify-center lg:justify-between max-w-5xl w-100 m-auto">
      <div class="mb-16">
        <h1
          class="text-xl sm:text-3xl leading-snug sm:leading-none text-gray-600"
        >
          Welcome to lecture notes that are
          <br />
          <span class="text-indigo-800">
            clear, organized, and forever free.
          </span>
        </h1>
        <p
          class="text-sm sm:text-base leading-relaxed sm:leading-snug mt-8 max-w-xs sm:max-w-md"
        >
          I built OMSCS Notes to share my notes with other students in the
          GATech OMSCS program. My notes are searchable, navigable, and, most
          importantly, free. I hope they help you on your journey here.
        </p>
        <p class="my-8 text-sm max-w-xs sm:max-w-md">
          <i class="far fa-bell mr-1 text-indigo-800" />
          Take 10% off any downloadable content by
          <a
            href="#"
            class="border-b-2 border-teal-200"
            @click.prevent="openMailchimp"
          >
            signing up
          </a>
          by August 31<sup>st</sup>.
        </p>
        <div class="flex">
          <a
            href="#"
            class="bg-indigo-800 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-5 border-b-4 border-indigo-900 hover:border-indigo-800 rounded mr-4"
            @click.prevent="$emit('scrollIntoView', 'notebooks')"
          >
            Notebooks
          </a>
          <a
            href="#"
            class="bg-teal-200 hover:bg-teal-100 text-teal-900 text-lg font-semibold py-3 px-5 border-b-4 border-teal-300 hover:border-teal-200 rounded"
            @click.prevent="$emit('scrollIntoView', 'testimonials')"
          >
            Testimonials
          </a>
        </div>
      </div>
      <div class="hidden lg:block">
        <HeroImage />
      </div>
    </div>
  </div>
</template>

<script>
import HeroImage from './HeroImage.vue'
import MailChimp from '~/mixins/mailchimp'
export default {
  name: 'Hero',
  mixins: [MailChimp],
  components: { HeroImage },
}
</script>
