<template>
  <div class="Ad w-full" />
</template>

<script>
export default {
  name: 'Ad',
  watch: {
    $route() {
      this.$el.innerHTML = ''
      this.createAdScript()
    },
  },

  mounted() {
    this.createAdScript()
  },

  methods: {
    createAdScript() {
      let carbonScript = document.createElement('script')

      carbonScript.id = '_carbonads_js'
      carbonScript.setAttribute(
        'src',
        '//cdn.carbonads.com/carbon.js?serve=CE7DE23Y&placement=wwwomscs-notescom'
      )

      this.$el.appendChild(carbonScript)
    },
  },
}
</script>

<style>
#carbonads {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
}

#carbonads {
  display: block;
  overflow: hidden;
  position: relative;
  background-color: hsl(0, 0%, 99%);
  border: solid 1px #eee;
  font-size: 14px;
  box-sizing: content-box;
}

#carbonads > span {
  display: block;
}

#carbonads a {
  color: inherit;
  text-decoration: none;
}

#carbonads a:hover {
  color: inherit;
}

.carbon-wrap {
  display: flex;
  align-items: center;
}

.carbon-img {
  display: block;
  margin: 0;
  line-height: 1;
}

.carbon-img img {
  display: block;
  height: 90px;
  width: auto;
}

.carbon-text {
  display: block;
  padding: 0 1em;
  line-height: 1.35;
  text-align: left;
}

.carbon-poweredby {
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 6px 10px;
  background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 5px,
      hsla(0, 0%, 0%, 0.025) 5px,
      hsla(0, 0%, 0%, 0.025) 10px
    )
    hsla(203, 11%, 95%, 0.8);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 8px;
  border-top-left-radius: 4px;
  line-height: 1;
}
</style>
