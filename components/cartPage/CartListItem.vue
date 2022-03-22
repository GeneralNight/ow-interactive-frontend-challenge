<template>
    <div class="row containerItemCart">
        <div class="col-6 col-sm-3 d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex align-items-center justify-content-start">
                <i class="fas fa-trash-alt mr-3" @click.prevent="removeProductFromCart(index)"></i> 
                <p class="mb-0">{{cartItem.name}}</p>
            </div>
        </div>
        <div class="col-6 col-sm-3 d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex containerAmountControl align-items-center justify-content-center mx-auto">
                <i class="fas fa-minus" @click.prevent="decreaseProductCart()"></i>
                <p class="mb-0 mx-2">{{itemAmmount}}</p>
                <i class="fas fa-plus" @click.prevent="increaseProductCart()"></i>
            </div>
        </div>
        <div class="w-100 d-sm-none my-2"></div>
        <div class="col-6 col-sm-3 d-flex flex-column align-items-center justify-content-center">
            <p class="mb-0">
                <b>{{formatVal(cartItem.price)}}</b> à vista <br class="d-none d-md-block"/>
                ou 10x de {{formatVal(itemUnInTen)}}
            </p>
        </div>
        <div class="col-6 col-sm-3 d-flex flex-column align-items-center justify-content-center">
            <p class="mb-0">
                <b>{{formatVal(cartItem.price*cartItem.ammount)}}</b> à vista <br class="d-none d-md-block"/>
                ou 10x de {{formatVal((cartItem.price*itemAmmount)/10)}}
            </p>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: 'CartListItem',
props: ['cartItem','index','itemAmmount'],
data() {
    return {
        itemUnInTen: this.cartItem.price/10,
        itemAllTen: (this.cartItem.price*this.itemAmmount)/10
    }
},
methods: {
    formatVal(val) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val)
    },
    removeProductFromCart(index) {
        this.$store.commit('REMOVE_CART',index)
        this.$store.commit("SOME_ITEM_ADDED")
    },
    async increaseProductCart() {
        var newCart = this.cart

        this.$store.commit('CLEAN_CART')

        newCart[this.index].ammount += 100

        this.$store.commit('INCREASE_CART_AMMOUNT',newCart)
        this.$store.commit("SOME_ITEM_ADDED")
    },
    async decreaseProductCart() {
        var newCart = this.cart

        this.$store.commit('CLEAN_CART')

        if(newCart[this.index].ammount>1) {
            newCart[this.index].ammount -= 100
        }

        this.$store.commit('INCREASE_CART_AMMOUNT',newCart)
        this.$store.commit("SOME_ITEM_ADDED")  
    }
},
computed: {
    ...mapState(['cart'])
},
watch: {
}
}
</script>

<style lang="scss" scoped>
.containerItemCart {
    
    border-bottom: 1px solid #909090;
    padding-bottom: 30px;

    b {color: #434343;}

    &:first-child {
        margin-top: 30px;
    }

    & + .containerItemCart {
        margin-top: 30px;
    }

    .fa-trash-alt {
        color: #909090;
        transition: .2s;
        cursor: pointer;
        &:hover {
            color: #8e36b7;
        }
    }

    .containerAmountControl {
        border: 1px solid #909090;
        width: fit-content;
        i {
            transition: .2s;
            font-size: .9rem;
            border-color: #909090;
            padding: 5px;
            color: #909090;
            cursor: pointer;
            &:hover {
                color: #8e36b7;
            }
        }

        .fa-minus {
            border-right: 1px solid #909090;
        }

        .fa-plus {
            border-left: 1px solid #909090;

        }
    }
}
</style>