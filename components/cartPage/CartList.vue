<template>
    <section id="containerCarList">
        <div class="container">
            <div class="row">
                <div class="col">
                    <CartListHeader/>
                    <div v-if="cart.length>0">
                        <div class="containerList">
                            <CartListItem :itemAmmount.sync="cartItem.ammount" :index="index" :cartItem="cartItem" v-for="(cartItem,index) in cart" :key="index"/>
                        </div>
                        <ResumeCart/>
                        <CartListFooter/>
                    </div>
                    <div class="d-flex containerCartEmpty align-items-center" v-else>
                        <p class="mb-0 cartEmptyText">
                            <i class="fas fa-shopping-cart mr-2"></i> Seu carrinho está vazio.
                        </p>
                        <router-link to="/products" class="bAddProds ml-4">Adicionar produtos</router-link>
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
computed: {
    ...mapState(['cart'])
}
}
</script>

<style lang="scss" scoped>
#containerCarList {
    margin-top: 60px;
    min-height: 70vh;

    .containerCartEmpty {
        margin-top: 40px;

        .cartEmptyText {
            font-size: 1.15rem;
            font-family: 'source-sans-bold';
            color: #434343;
        }

        .bAddProds {
            font-size: 1rem;
            font-family: 'source-sans-bold';
            border: none;
            background: #cfcfcf;
            color: #434343;
            border-radius: 5px;
            padding: 5px 15px;
            transition: .2s;
            text-decoration: none;
            &:hover {
                background: #8e36b7;
                color: #fff;
            }

        }
    }
}
</style>