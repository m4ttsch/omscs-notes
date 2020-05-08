<template lang="html">
  <div class="PDFDiscount">
    <notifications
      v-if="!hideForever"
      group="pdf-discount"
      :duration="-1"
      :speed="1000"
    >
      <template slot="body" slot-scope="props">
        <div
          class="bg-teal-100 border border-teal-200 text-teal-700 rounded relative mx-2 my-3"
          role="alert"
        >
          <div
            class="text-xs px-1 pt-1 border-teal-200 border-b flex justify-between text-teal-300"
          >
            <a href="#" @click="logAndClose(props)">
              close
            </a>
            <a href="#" @click="logAndCloseForever">
              close forever
            </a>
          </div>
          <div class="px-3 py-2">
            <strong class="font-bold">This week only!</strong>
            <p class="block">
              Take 10% off all PDF content with discount code <b>spring2020</b>.
            </p>
            <div class="flex justify-around my-4 text-teal-600">
              <a
                class="pdf-link hover:shadow"
                href="/information-security/download-pdf"
                @click="logEvent('discount-click', { target: 'IIS' })"
              >
                Browse IIS
              </a>
              <a
                class="pdf-link hover:shadow"
                href="/computer-networks/download-pdf"
                @click="logEvent('discount-click', { target: 'CN' })"
              >
                Browse CN
              </a>
              <a
                class="pdf-link hover:shadow"
                href="/operating-systems/download-pdf"
                @click="logEvent('discount-click', { target: 'GIOS' })"
              >
                Browse GIOS
              </a>
            </div>
          </div>
        </div>
      </template>
    </notifications>
  </div>
</template>

<script>
import Analytics from '~/mixins/analytics'
export default {
  name: 'PDFDiscount',
  mixins: [Analytics],

  data: function () {
    return {
      hideForever: false,
    }
  },

  mounted() {
    if (localStorage.getItem('pdf-discount-hide-forever')) {
      this.hideForever = true
    }
  },

  methods: {
    logAndClose({ close }) {
      this.logEvent('discount-click', { target: 'close' })
      close()
    },

    logAndCloseForever() {
      this.logEvent('discount-click', { target: 'close-forever' })
      localStorage.setItem('pdf-discount-hide-forever', true)
      this.hideForever = true
    },
  },
}
</script>

<style media="screen">
.pdf-link {
  @apply text-xs bg-teal-500 text-teal-100 py-1 px-2 rounded shadow-xl;
}
</style>
