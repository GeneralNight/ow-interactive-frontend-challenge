<template>
    <section id="containerProducts">
        <div class="container">
            <div class="row ">
               <ProductItem :itemData="productItem" v-for="(productItem,index) in filtredProducts" :key="index"/>
               <p class="itemsNotFound mb-0" v-if="filtredProducts.length==0 || products.length==0">
                   {{products.length==0 ? 'Nenhum produto para mostrar': 'Nenhum produto com este termo encontrado.'}}
               </p>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'ProductsList',
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        ...mapState(['products','filtredProducts'])
    }
}
</script>

<style lang="scss" scoped>
    #containerProducts {
        margin-top: 50px;
        min-height: 80vh;

        @include d(xs) {
            margin-top: 40px;
        }

        .itemsNotFound {
            font-size: 1.25rem;
            font-family: 'source-sans-bold';
            color: #fff;
            background: #8e36b7;
            border-radius: 5px;
            padding: 5px 10px;
        }
    }
</style>