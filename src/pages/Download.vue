<template>
  <Layout>
    <div class="Download">
      <div class="bg-gray-200 pb-10">
        <div class="max-w-2xl m-auto py-10">
          <h1 class="text-4xl text-center">Download Notes</h1>
          <div class="max-w-md m-auto px-5">
            <p>
              <span class="block text-md my-3">
                Sometimes you don't need a big fancy website just to study. If
                you are looking for a simpler, more portable study experience,
                the following PDFs are available for download.
              </span>
              <i class="block text-sm text-center">
                Many students have found these to be <b>very</b> helpful.
              </i>
            </p>
          </div>
        </div>
        <div class="max-w-3xl bg-white rounded pb-5 mx-5 md:mx-auto">
          <div class="pt-8 pb-3 px-10 block sm:flex justify-center">
            <a
              class="block text-center hidden text-indigo-800 hover:underline cursor-pointer"
              href="#"
              @click.prevent="openMailchimp"
              >Want 10% off?</a
            >
            <div class="flex justify-center items-center">
              <span class="block mr-4 text-gray-600 uppercase text-sm"
                >Filter:</span
              >
              <div class="flex items-center">
                <div
                  v-for="(id, i) in filters"
                  :key="i"
                  class="block text-sm mr-2"
                >
                  <a
                    href="#"
                    @click.prevent="filter = id"
                    v-if="filter != id"
                    class="hover:text-indigo-600 hover:underline"
                  >
                    {{ id }}
                  </a>
                  <span
                    @click.prevent="filter = null"
                    v-else
                    class="text-indigo-600 cursor-pointer"
                  >
                    {{ id }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center flex-wrap">
            <div v-for="(pdf, i) in filtered" :key="i">
              <div class="p-5">
                <a :href="pdf.productUrl" target="_blank">
                  <img
                    :alt="pdf.name"
                    :src="pdf.imageUrl"
                    width="200"
                    class="rounded mb-2 cursor-pointer"
                  />
                </a>
                <div class="flex justify-between">
                  <div class="flex items-center">
                    <a
                      :href="pdf.productUrl"
                      class="text-sm leading-none mr-1 hover:underline"
                      target="_blank"
                    >
                      {{ pdf.course }}: {{ pdf | subtitle }}
                    </a>
                    <VPopover
                      placement="top-center"
                      class="inline-block"
                      trigger="hover click"
                      boundaries-element="body"
                      :hideOnTargetClick="true"
                    >
                      <sup class="hover:text-indigo-600 cursor-pointer">
                        <i class="far fa-question-circle fa-sm" />
                      </sup>
                      <span
                        slot="popover"
                        class="block bg-gray-700 text-gray-100 leading-tight rounded px-4 py-3 text-sm w-64"
                      >
                        {{ pdf.description }}
                      </span>
                    </VPopover>
                  </div>
                  <span class="font-bold">${{ pdf.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { courses } from '~/../data/courses.json'
import { VPopover } from 'v-tooltip'
import MailChimp from '~/mixins/mailchimp.js'

export default {
  name: 'Download',
  components: { VPopover },
  mixins: [MailChimp],
  data() {
    return {
      courses,
      filter: null,
    }
  },

  computed: {
    filters() {
      return this.courses
        .filter(({ completed }) => completed)
        .map(({ abbrev }) => abbrev)
    },

    pdfs() {
      return this.courses
        .reduce((res, { abbrev, pdfs }) => {
          return [...res, ...pdfs.map((pdf) => ({ ...pdf, course: abbrev }))]
        }, [])
        .sort((a, b) => b.price - a.price)
    },

    filtered() {
      return this.pdfs.filter(({ course }) =>
        this.filter ? course === this.filter : course
      )
    },
  },

  filters: {
    subtitle({ name }) {
      return name.split(' - ')[1]
    },
  }
}
</script>
