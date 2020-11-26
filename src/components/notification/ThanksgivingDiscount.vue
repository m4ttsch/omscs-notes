<template lang="html">
  <div class="ThanksgivingDiscount">
    <notifications
      v-if="!hideForever"
      group="pdf-discount"
      :duration="-1"
      :speed="1000"
    >
      <template slot="body" slot-scope="props">
        <div
          class="bg-teal-300 border border-teal-400 rounded relative mx-2 my-3 text-gray-800"
          role="alert"
        >
          <div
            class="text-xs px-1 pt-1 border-teal-400 border-b flex justify-between"
          >
            <a href="#" @click="logAndClose(props)">
              close
            </a>
            <a href="#" @click="logAndCloseForever">
              close forever
            </a>
          </div>
          <div class="px-3 py-2">
            <strong class="font-bold">Happy Thanksgiving!</strong>
            <p class="pt-2 block">
              Take 25% off all PDF content until Monday with code <b>TURKEY</b>.
            </p>
            <div class="flex justify-around my-4">
              <a
                class="pdf-link hover:shadow"
                href="/download"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </template>
    </notifications>
  </div>
</template>

<script>
export default {
  name: 'ThanksgivingDiscount',
  data: function () {
    return {
      hideForever: false,
    }
  },
  mounted() {
    if (localStorage.getItem('pdf-thanksgiving-discount-hide-forever')) {
      this.hideForever = true
    }
  },
  methods: {
    logAndClose({ close }) {
      close()
    },
    logAndCloseForever() {
      localStorage.setItem('pdf-thanksgiving-discount-hide-forever', true)
      this.hideForever = true
    },
  },
}
</script>

<style media="screen">
.pdf-link {
  @apply text-xs bg-teal-500 text-teal-100 py-2 px-4 rounded shadow-xl;
}
</style>