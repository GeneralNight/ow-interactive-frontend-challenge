<template>
  <div>
      <Header/>
      <FormCheckout/>
  </div>
</template>

<script>
export default {
name: 'Checkout',
created() {
    if (process.client) {
      if(window.localStorage.cart && window.localStorage.cart.length>0) {
        this.$store.commit('SET_CART',JSON.parse(window.localStorage.cart))
      }
    }
},
}
</script>

<style>

</style>