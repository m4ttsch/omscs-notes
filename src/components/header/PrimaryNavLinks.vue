<template lang="html">
  <div class="PrimaryNavLinks">
    <g-link
      to="/operating-systems/welcome"
      class="nav-link"  
      @click.native="$emit('click')"
    >
      GIOS
    </g-link>
    <g-link
      to="/computer-networks/welcome"
      class="nav-link"
      @click.native="$emit('click')"
    >
      CN
    </g-link>
    <g-link
      to="/information-security/welcome"
      class="nav-link"
      @click.native="$emit('click')"
    >
      IIS
    </g-link>
  </div>
</template>

<script>
export default {
  name: 'PrimaryNavLinks'
}
</script>

<style lang="scss" scoped>
  .nav-link {
    @apply mr-4;

    &:hover {
      @apply text-indigo-800;
    }
  }
</style>
