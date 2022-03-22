<template>
    <div class="row containerCartListFooter">
        <div class="col">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-12 col-md-3 col-xl-2 d-flex flex-column align-items-end align-items-md-start">
                    <div class="containerClearCart" @click.prevent="cleanCart">
                        <i class="fas fa-trash-alt mr-2"></i> Limpar carrinho
                    </div>
                </div>
                <div class="w-100 d-md-none my-3"></div>
                <div class="col-12 col-md-9 col-xl-10 d-flex flex-column justify-content-end">
                    <div class="containerFooterButtons row justify-content-end">
                        <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-3 mb-sm-0">
                            <router-link to="/products" class="bFooterAction d-flex justify-content-center bKeepShopping mr-sm-3">Continuar comprando</router-link>
                        </div>
                        <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                            <router-link to="/checkout" class="bFooterAction d-flex justify-content-center bCheckout">Concluir compra</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'CartListFooter',
methods: {
    cleanCart() {
        this.$store.commit('CLEAN_CART')
        if (process.client) {
            if(window.localStorage.cart && window.localStorage.cart.length>0) {
                window.localStorage.clear()
            }
        }
        this.$store.commit('SOME_ITEM_ADDED')
    }
}
}
</script>

<style lang="scss" scoped>
.containerCartListFooter {
    padding: 40px 0;

    @include d(xs) {
        padding: 20px 0;
    }
    .containerClearCart {
        color: #434343;
        font-family: 'source-sans-reg';
        font-size: 1rem;
        cursor: pointer;
        transition: .2s;

        i {
            color: #909090;
        }

        &:hover {
            color: #8e36b7;
        }
    }

    .containerFooterButtons {
        .bFooterAction {
            border: none;
            border-radius: 5px;
            font-size: 1.15rem;
            font-family: 'source-sans-reg';
            padding: 10px 0px;
            text-decoration: none;
            width: 100%;
        }

        .bKeepShopping {
            background: #cfcfcf;
            color: #434343;
        }

        .bCheckout {
            background: #8e36b7;
            color: #fff;
        }
    }
}
</style>