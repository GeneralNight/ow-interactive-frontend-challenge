<template>
    <section id="containerCarList">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="row containerHeaderTable">
                        <div class="col-3 text-center font-weight-bold">Produtos</div>
                        <div class="col-3 text-center font-weight-bold">Quantidade</div>
                        <div class="col-3 text-center font-weight-bold">Valor unitário</div>
                        <div class="col-3 text-center font-weight-bold">Total</div>
                    </div>
                    <div class="containerList">
                        <CartListItem :index="index" :cartItem="cartItem" v-for="(cartItem,index) in cart" :key="index"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: 'CartList',
data() {
    return {

    }
},
computed: {
    ...mapState(['cart'])
}
}
</script>

<style lang="scss" scoped>
#containerCarList {
    margin-top: 60px;

    .containerHeaderTable {
        padding-bottom: 15px;
        border-bottom: 1px solid #909090;
        text-transform: uppercase;
    }
}
</style>