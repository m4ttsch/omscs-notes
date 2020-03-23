<template lang="html">
  <div class="CoronaMessage">
    <notifications
      v-if="!hideForever"
      group="pdf-discount"
      :duration="-1"
      :speed="1000"
    >
      <template
        slot="body"
        slot-scope="props"
      >
        <div
          class="bg-red-100 border border-red-200 text-red-700 rounded relative mx-2 my-3"
          role="alert"
        >
          <div class="text-xs px-1 pt-1 border-red-200 border-b flex justify-between text-red-300">
            <a
              href="#"
              @click="logAndClose(props)"
            >
              close
            </a>
            <a
              href="#"
              @click="logAndCloseForever"
            >
              close forever
            </a>
          </div>
          <div class="px-3 py-3">
            <strong class="font-bold">COVID-19 Update.</strong>
            <p class="block text-sm my-3 pb-3">
              If money is tight right now, please use code <b>staysafe</b> to
              take 100% off all PDF content for the rest of the semester. 
              Stay safe, friends.
            </p>
            <div class="flex justify-around my-3 text-red-600">
              <a
                class="pdf-link hover:shadow"
                href="/information-security/download-pdf"
                @click="logEvent('discount-click', { target: 'IIS'})"
              >
                Browse IIS
              </a>
              <a
                class="pdf-link hover:shadow"
                href="/computer-networks/download-pdf"
                @click="logEvent('discount-click', { target: 'CN'})"
              >
                Browse CN
              </a>
              <a
                class="pdf-link hover:shadow"
                href="/operating-systems/download-pdf"
                @click="logEvent('discount-click', { target: 'GIOS'})"
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

<static-query>
  query {
    metadata {
      email
    }
  }
</static-query>

<script>
import Analytics from '~/mixins/analytics'
export default {
  name: 'CoronaMessage',
  mixins: [Analytics],

  data: function() {
    return {
        hideForever: false
      }
    },

  mounted() {
    if(localStorage.getItem('corona-discount-hide-forever')) {
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
      localStorage.setItem('corona-discount-hide-forever', true)
      this.hideForever = true
    }
  }
}
</script>

<style media="screen">
  .pdf-link {
    @apply text-xs bg-red-500 text-red-100 py-1 px-2 rounded shadow-xl;
  }
</style>
