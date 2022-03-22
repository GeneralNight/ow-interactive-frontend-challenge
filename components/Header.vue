<template>
    <header id="containerHeader">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="d-flex justify-content-between align-items-center">
                        <img src="~/assets/img/logo.png" alt="Logo Mkt Place" class="logo">
                        <div class="containerLinks align-items-end d-none d-sm-flex">
                            <ul class="d-flex menuLinks">
                                <li>
                                    <router-link to="/products">Produtos</router-link>
                                </li>
                            </ul>
                            <div class="containerCartIcon d-flex align-items-end ml-5" @click.prevent="goTo('/cart')">
                                <img src="~/assets/img/cartIcon.png" alt="ícone carrinho de compras" class="cartIcon">
                                <div class="numOfProducts d-flex justify-content-center align-items-center">
                                    {{cartAmmount}}
                                </div>
                            </div>
                        </div>
                        <i class="fas fa-bars iconMenu d-sm-none" v-b-toggle.sidebarMenu></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: 'Header',
data() {
    return {
        cartAmmount : 0
    }
},
methods: {
    goTo(route) {
        this.$router.push(route)
    },
},
computed: {
    ...mapState(['cart','someItemAdded']),
},
created() {
    this.cartAmmount =  this.cart.reduce(function(prev, cur) {return prev + cur.ammount;}, 0)
},
watch: {
    someItemAdded() {
        this.cartAmmount =  this.cart.reduce(function(prev, cur) {return prev + cur.ammount;}, 0)
    },
}
}
</script>

<style lang="scss" scoped>
    #containerHeader {
        padding: 50px 0;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);

        @include d(xs) {
            padding: 30px 0;
        }

        .menuLinks {
            text-decoration: none;
            list-style: none;
            padding: 0;
            margin: 0;

            a {
                color: #909090;
                text-decoration: none;
                font-size: 1.25rem;
                font-family: 'source-sans-bold';
                transition: .2s;
                border-bottom: 2px solid transparent;

                &:hover {
                    color: #8e36b7;
                    border-bottom-color: #8e36b7;
                }
            }
        }

        .containerCartIcon {
            cursor: pointer;
            transition: .2s;
            padding-bottom: 5px;
            border-bottom: 2px solid transparent;
            &:hover {
                border-bottom: 2px solid #8e36b7;
                filter: brightness(.9);
            }
            .numOfProducts {
                
                background: #ed1c24;
                width: 20px;
                height: 20px;
                font-size: .7rem;
                border-radius: 50%;
                font-family: 'source-sans-bold';
                color: #fff;
            }
        }

        .iconMenu {
            font-size: 1.15rem;
            color: #909090;
            border-radius: 8px;
            padding: 10px;
            border: 2px solid #8e36b7;
            cursor: pointer;
            transition: .2s;
            &:hover {
                color: #fff;
                background: #8e36b7;
            }
        }
    }
</style>