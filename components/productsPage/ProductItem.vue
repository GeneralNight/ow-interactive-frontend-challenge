<template>
    <div class="col-12 col-sm-6 col-lg-4 ">
        <div class="containerProductItem d-flex flex-column align-items-stretch">
            <div class="containerProdImg d-flex justify-content-center">
                <img class="img-fluid imgItem" :src="itemData.imageUrl" :alt="`imagem representativa de: ${itemData.name}`">
            </div>
            <div class="containerProdInfo">
                <p class="prodCategory ">{{itemData.category}}</p>
                <p class="prodName ">{{itemData.name}}</p>
                <p class="prodDescription ">{{itemData.description}}</p>
                <p class="prodPrice ">{{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(itemData.price)}}</p>
            </div>
            <button class="bAddCart d-flex w-100 justify-content-center" @click.prevent="addProductToCartOrIncrease(itemData)">
                Adicionar ao carrinho
            </button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: 'ProductItem',
props: ['itemData'],
methods: {
    addProductToCartOrIncrease(prod) {
        this.$store.commit("ADD_CART",prod)
        this.$store.commit("SET_ITEM_ADDED",true)  
        this.$store.commit("SOME_ITEM_ADDED")  
    }
},
computed: {
    ...mapState(['cart'])
}
}
</script>

<style lang="scss" scoped>
    .containerProductItem {
        padding-top: 15px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        margin-bottom: 60px;
        height: calc(100% - 60px);
        transition: .2s;

        @include d(xs) {
            margin-bottom: 40px;
            height: calc(100% - 40px);
        }

        &:hover {
            .imgItem {
                transform: scale(1.15);
            }
        }

        .containerProdImg {
            padding: 15px 30px;

            .imgItem {
                transition: .2s;
                
                @include d(xs) {
                    max-width: 250px;
                }
            }
        }

        .containerProdInfo {
            padding: 30px 30px 15px 30px;
            height: 100%;

            @include d(xs) {
                padding: 15px;
            }
            
            .prodCategory {
                color: #8e36b7;
                font-family: 'source-sans-bold';
                font-size: 1rem;
                margin-bottom: 5px;
            }

            .prodName {
                color: #434343;
                font-family: 'source-sans-bold';
                font-size: 1.25rem;
                margin-bottom: 5px;

                @include d(xs) {
                    font-size: 1.15rem;
                }
            }

            .prodDescription {
                color: #909090;
                font-family: 'source-sans-reg';
                font-size: 1rem;
                margin-bottom: 25px;

                @include d(xs) {
                    margin-bottom: 15px;
                }
            }

            .prodPrice {
                color: #434343;
                font-family: 'source-sans-bold';
                font-size: 1.5rem;
                margin-bottom: 15px;
                @include d(xs) {
                    font-size: 1.25rem;
                }
            }
        }

        .bAddCart {
            border: none;
            background: transparent;
            border-top: 1px solid #8e36b7;
            padding: 15px 0;
            text-transform: uppercase;
            font-family: 'source-sans-bold';
            color: #8e36b7;
            transition: .2s;

            &:hover {
                background: #8e36b7;
                color: #fff;
            }
        }

    }
</style>