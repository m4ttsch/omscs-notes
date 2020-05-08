<template lang="html">
  <div class="testimonials">
    <div id="testimonials" class="text-center bg-white py-20 px-10 sm:px-20">
      <div class="w-100 max-w-5xl m-auto">
        <div class="text-indigo-800">
          <i class="fas fa-quote-left fa-3x" />
        </div>
        <div class="max-w-3xl m-auto mb-10">
          <ClientOnly>
            <carousel
              :per-page="1"
              :navigate-to="0"
              pagination-active-color="#434190"
            >
              <slide v-for="(testimonial, i) in testimonials" :key="i">
                <p class="mx-0 sm:mx-10 my-10 text-lg sm:text-2xl">
                  {{ testimonial.quote }}
                </p>
                <div class="flex justify-center text-lg text-left">
                  <img
                    class="rounded-full h-12"
                    :src="`/assets/images/testimonials/${testimonial.image}`"
                    width="48"
                    height="48"
                    :alt="`Portrait of ${testimonial.name}`"
                  />
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
          </ClientOnly>
        </div>
        <p class="text-sm text-gray-600">
          Want to say something nice?
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="`mailto:${$static.metadata.email}`"
            class="text-indigo-800"
          >
            Contact me!
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<static-query>
  query {
    metadata {
      email
    }
  }
</static-query>

<script>
import { testimonials } from '~/../data/testimonials.json'

export default {
  name: 'Testimonials',
  components: {
    Carousel: () =>
      import('vue-carousel')
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import('vue-carousel')
        .then((m) => m.Slide)
        .catch(),
  },

  data() {
    return { testimonials }
  },
}
</script>
