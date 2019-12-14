<template lang="html">
  <div class="testimonials">
    <div class="text-center bg-white p-20" id="testimonials">
      <div class="w-100 max-w-5xl m-auto">
        <div class="text-indigo-800">
          <font-awesome-icon :icon="['fas', 'quote-left']" size="3x" />
        </div>
        <div class="max-w-3xl m-auto mb-10">
          <carousel :per-page="1" :navigate-to="0" paginationActiveColor="#434190">
            <slide v-for="(testimonial, i) in testimonials" :key="i">
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
import { Carousel, Slide } from 'vue-carousel/src/index';
import { testimonials } from '~/../data/testimonials.json';

export default {
  name: 'Testimonials',
  components: { Carousel, Slide },
  data() {
    return {
      testimonials
    }
  }
}
</script>
