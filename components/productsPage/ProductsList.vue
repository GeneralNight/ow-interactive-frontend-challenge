<template>
    <section id="containerProducts">
        <div class="container">
            <div class="row ">
               <ProductItem :itemData="productItem" v-for="(productItem,index) in filtredProducts" :key="index"/>
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

        @include d(xs) {
            margin-top: 40px;
        }
    }
</style>