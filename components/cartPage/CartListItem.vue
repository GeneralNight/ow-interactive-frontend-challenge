<template>
    <div class="row containerItemCart">
        <div class="col-6 col-sm-3 d-flex flex-column align-items-start justify-content-center">
            <div class="d-flex align-items-center justify-content-start">
                <i class="fas fa-trash-alt mr-3" @click.prevent="removeProductFromCart(index)"></i> 
                <div>
                    <p class="productCategory">{{cartItem.category}}</p>
                    <p class="mb-0">{{cartItem.name}}</p>                    
                </div>                
            </div>
        </div>
        <div class="col-6 col-sm-3 d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex containerAmountControl align-items-center justify-content-center mx-auto">
                <i class="fas fa-minus" @click.prevent="decreaseProductCart()"></i>
                <p class="mb-0 mx-2" @click.prevent="showInput=true" v-if="!showInput">{{itemAmmount}}</p>
                <input :id="`inputAmmount`" type="number" @focusout="showInput=false" min="1" v-else v-model="inputVal" @change="setNewAmmount">
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
                <b>{{formatVal(cartItem.price*itemAmmount)}}</b> à vista <br class="d-none d-md-block"/>
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
        showInput: false,
        inputVal: this.itemAmmount
    }
},
methods: {
    setNewAmmount() {
        var newCart = this.cart
        this.$store.commit('CLEAN_CART')

        // In case value typed in input is bigger than 1, new ammount is this value, otherwise new ammount is 1
        if(parseInt(this.inputVal)>=1) {
            newCart[this.index].ammount = parseInt(this.inputVal)
        }else {
            newCart[this.index].ammount = 1
        }
        // value updates all cart, updates the local storage and after input has show = false
        this.inputVal = newCart[this.index].ammount
        this.$store.commit('TOGGLE_CART_AMMOUNT',newCart)
        this.$store.dispatch('saveCartInLocalHost')
        this.showInput = false
    },
    formatVal(val) {
        // return a formatted curency value
        var numFormated = parseFloat(val).toFixed(2)
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numFormated)
    },
    removeProductFromCart(index) {
        // Product and its ammounts remove, cart's status changed (it allow ammount on header update) and loca storage updated
        this.$store.commit('REMOVE_CART',index)
        this.$store.commit("CART_CHANGED")
        this.$store.dispatch('saveCartInLocalHost')
    },
    async increaseProductCart() {
        var newCart = this.cart

        this.$store.commit('CLEAN_CART')

        newCart[this.index].ammount += 1
        this.inputVal = newCart[this.index].ammount

        // Cart is replaced by "newCart" variable and local storage is updated
        this.$store.commit('TOGGLE_CART_AMMOUNT',newCart)
        this.$store.commit("CART_CHANGED")
        this.$store.dispatch('saveCartInLocalHost')
    },
    async decreaseProductCart() {
        var newCart = this.cart

        this.$store.commit('CLEAN_CART')
        
        // In case item ammount is bigger than one, decrease it
        if(newCart[this.index].ammount>1) {
            newCart[this.index].ammount -= 1
        }

        // Cart is replaced by "newCart" variable and local storage is updated
        this.inputVal = newCart[this.index].ammount
        this.$store.commit('TOGGLE_CART_AMMOUNT',newCart)
        this.$store.commit("CART_CHANGED")  
        this.$store.dispatch('saveCartInLocalHost')
    }
},
computed: {
    ...mapState(['cart'])
},
watch: {
    showInput() {
        if(this.showInput) {
            setTimeout(() => {
                document.getElementById(`inputAmmount`).focus()
            }, 50);
        }
    }
}
}
</script>

<style lang="scss" scoped>
.containerItemCart {
    
    border-bottom: 1px solid #909090;
    padding-bottom: 30px;

    b {color: #434343;}

    .productCategory {
        color: #8e36b7;
        font-family: 'source-sans-bold';
        font-size: .9rem;
        margin-bottom: 5px;
    }

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
        input {
            border: none;
            outline: none;
            box-shadow: none;
            width: 150px;
        }
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