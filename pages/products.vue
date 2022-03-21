<template>
    <div>
        <Header/>
        <SideBarMenu/>
        <FilterProducts/>
        <ProductsList/>
    </div>
</template>

<script>
import {api} from '~/services.js'
export default {
name: 'productsPage',
data() {
    return {
        loaded: false
    }
},
methods: {
    async loadProducts() {
        await api.getProducts().then(async res=> {
            this.$store.commit('SET_PRODUCTS',res.data)
            this.$store.commit('SET_FILTRED_PRODUCTS',res.data)
        })
        this.loaded = true
    }
},
created() {
    this.loadProducts()
},
computed: {

}
}
</script>

<style>

</style>