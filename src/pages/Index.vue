<template>
  <Layout>
    <div class="relative pt-20 py-32">
      <div class="flex justify-between max-w-5xl w-100 m-auto">
        <div>
          <div>
            <h1 class="text-6xl leading-none">
              OMSCS Notes
            </h1>
            <h2 class="text-2xl">
              Clear, organized, and free lecture summaries.
            </h2>
            <p class="mt-8 mb-10 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
            </p>
            <button class="bg-teal-200 hover:bg-teal-100 text-teal-900 text-lg font-semibold py-3 px-5 border-b-4 border-teal-300 hover:border-teal-200 rounded mr-4">
              See Courses
            </button>
            <a href="#testimonials" class="bg-indigo-800 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-5 border-b-4 border-indigo-900 hover:border-indigo-800 rounded">
              Testimonials
            </a>
          </div>
        </div>
        <div>
          <g-image src="~/assets/images/dev_productivity.svg" width="400" />
        </div>
      </div>
      <Wave />
    </div>
    <div class="text-center bg-white p-20" id="testimonials">
      <div class="w-100 max-w-5xl m-auto">
        <div class="text-indigo-800">
          <font-awesome-icon :icon="['fas', 'quote-left']" size="3x" />
        </div>
        <div class="max-w-3xl m-auto mb-10">
          <carousel :per-page="1" :navigate-to="0" paginationActiveColor="#434190">
            <slide v-for="(testimonial, i) in $static.metadata.testimonials" :key="i">
              <p class="m-10 text-2xl">
                {{ testimonial.quote }}
              </p>
              <div class="flex justify-center text-lg text-left">
                <img class="rounded-full" :src="`/assets/images/testimonials/${testimonial.image}`" width="48" height="48"/>
                <div class="ml-5 flex flex-col justify-center">
                  <p class="text-xl leading-none">
                    {{ testimonial.name }}
                  </p>
                  <p class="text-gray-500 uppercase text-sm">
                    {{ testimonial.semester }}
                  </p>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
        <p class="text-sm text-gray-600">
          Want to say something nice?
          <a target="_blank" rel="noopener noreferrer" :href="`mailto:${$static.metadata.email}`" class="text-indigo-800">
            Contact me!
          </a>
        </p>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    email
    testimonials {
      name
      image
      semester
      quote
    }
  }
}
</static-query>

<script>
import Wave from '~/components/util/GentleWave'
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: { Wave, Carousel, Slide },
  metaInfo: {
    title: 'Home'
  }
}
</script>
