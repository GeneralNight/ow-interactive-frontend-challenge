<template>
  
</template>

<script>
export default {
name: 'indexPage',
middleware: [
    function({ redirect }) {
      redirect('/products');
    },
],
}
</script>

<style>

</style>