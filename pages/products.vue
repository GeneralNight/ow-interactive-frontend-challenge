<template>
    <div>
        <Header/>
        <SideBarMenu/>
        <Caroussel/>
        <FilterProducts/>
        <ProductsList/>
        <AlertItemAddedInCart v-if="itemAdded"/>
        <BackToTop class="d-md-none" v-if="!itemAdded"/>
        <Footer/>
    </div>
</template>

<script>
import {api} from '~/services.js'
import {mapState} from 'vuex'
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
    ...mapState(['itemAdded'])
}
}
</script>

<style>

</style>