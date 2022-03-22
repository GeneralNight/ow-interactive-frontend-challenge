<template>
    <b-sidebar id="sidebarMenu" no-header body-class="sideBarStyle" shadow backdrop>
        <div class="d-flex align-items-center justify-content-end containerIconClose">
            <i class="fas fa-times" v-b-toggle.sidebarMenu></i>
        </div>
        <ul class="menuSideBar">
            <li>
                <router-link class="d-flex align-items-center" to="/products"><i class="fas fa-shopping-bag mr-3"></i> Produtos</router-link>
            </li>
            <li>
                <router-link class="d-flex align-items-center" to="/cart">
                    <i class="fas fa-shopping-cart mr-3"></i> Carrinho 
                    <div class="numOfProducts d-flex justify-content-center align-items-center ml-2">{{cartAmmount}}</div>                
                </router-link>
            </li>
        </ul>
    </b-sidebar>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: 'sideBarMenu',
data() {
    return {
        cartAmmount : 0
    }
},
computed: {
    ...mapState(['cart','someItemAdded']),
},
created() {
    this.cartAmmount =  this.cart.reduce(function(prev, cur) {return prev + cur.ammount;}, 0) <= 99 ? 
    this.cart.reduce(function(prev, cur) {return prev + cur.ammount;}, 0) : '+99'
},
watch: {
    someItemAdded() {
        this.cartAmmount =  this.cart.reduce(function(prev, cur) {return prev + cur.ammount;}, 0) <= 99 ?
        this.cart.reduce(function(prev, cur) {return prev + cur.ammount;}, 0) : '+99'
    },
}
}
</script>

<style lang="scss">
    
    .sideBarStyle {
        background: #8e36b7;

        .containerIconClose {
            padding: 15px 20px;
            i {
                background: #fff;
                padding: 10px;
                border-radius: 8px;
                color: #8e36b7;
                cursor: pointer;
                transition: .2s;
                &:hover {
                    filter: brightness(.9);
                }
        }
        }

        .menuSideBar {
            padding: 0;
            margin: 0;
            list-style: none;
            li {
                padding: 15px 0 15px 25px;
                transition: .2s;
                &:hover {
                    background: #fff;
                    a {
                        color: #8e36b7;
                    }
                }
                a {
                    text-decoration: none;
                    color: #fff;
                    font-size: 1.15rem;
                }                
            }

            .numOfProducts {
                background: #ed1c24;
                width: 25px;
                height: 25px;
                font-size: .8rem;
                border-radius: 50%;
                font-family: 'source-sans-bold';
                color: #fff;
            }
        }
    }
</style>