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
                    <div class="containerList" v-if="cart.length>0">
                        <CartListItem :itemAmmount.sync="cartItem.ammount" :itemUpdated.sync="itemUpdated" :index="index" :cartItem="cartItem" v-for="(cartItem,index) in cart" :key="index"/>
                    </div>
                    <ResumeCart/>
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
},
watch: {
    itemUpdated() {
        // if(this.itemUpdated) {
        //     setTimeout(() => {
        //         this.itemUpdated = false
        //     },  10);
        // }
    }
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
        color: #434343;
    }

    .updateText {
        font-size: 1rem;
        font-family: 'source-sans-bold';
        color: #909090;
    }
}
</style>