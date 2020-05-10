<template>
  <Layout>
    <div class="flex justify-center items-center py-5">
      <a @click.prevent="doIt">Do it</a>
    </div>
  </Layout>
</template>

<script>
export default {
  methods: {
    doIt() {
      Payhip.Checkout.open({
            product: "9UGM",
            message: "A custom message to add to the checkout",
            method: "overlay"
        });
    }
  }
}
</script>

<style>

</style>
