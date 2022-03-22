<template>
     <div class="row containerHeaderTable ">
        <div class="col-6 d-flex flex-column align-items-center text-center justify-content-center col-sm-3 font-weight-bold">Produtos</div>
        <div class="col-6 d-flex flex-column align-items-center text-center justify-content-center col-sm-3 font-weight-bold">Quantidade</div>
        <div class="w-100 d-sm-none my-2"></div>
        <div class="col-6 d-flex flex-column align-items-center text-center justify-content-center col-sm-3 font-weight-bold">Valor unitário</div>
        <div class="col-6 d-flex flex-column align-items-center text-center justify-content-center col-sm-3 font-weight-bold">Total</div>
    </div>
</template>

<script>
export default {
name: 'CartListHeader'
}
</script>

<style lang="scss" scoped>
.containerHeaderTable {
    padding-bottom: 15px;
    border-bottom: 1px solid #909090;
    text-transform: uppercase;
    color: #434343;
}
</style>