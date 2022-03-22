<template>
    <section id="containerCarList">
        <div class="container">
            <div class="row">
                <div class="col">
                    <CartListHeader/>
                    <div class="containerList" v-if="cart.length>0">
                        <CartListItem :itemAmmount.sync="cartItem.ammount" :index="index" :cartItem="cartItem" v-for="(cartItem,index) in cart" :key="index"/>
                    </div>
                    <ResumeCart/>
                    <CartListFooter/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: 'CartList',
computed: {
    ...mapState(['cart'])
}
}
</script>

<style lang="scss" scoped>
#containerCarList {
    margin-top: 60px;   
}
</style>