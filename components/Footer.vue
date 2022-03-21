<template>
  <footer id="containerFooter">
      <div class="d-flex justify-content-center align-items-center">
          <img src="~/assets/img/logoFooter.png" alt="Logo Mkt Place " class="logoFooter img-fluid">
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #containerFooter {
        padding: 30px 0;
        margin-top: 20px;
        background: #bbbbbb;

        @include d(xs) {
            margin-top: 0;
        }
    }
</style>