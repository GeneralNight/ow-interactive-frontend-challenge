<template>
    <div class="row containerItemCart">
        <div class="col-3">
            <div class="d-flex align-items-center">
                <i class="fas fa-trash-alt mr-3" @click.prevent="removeProductFromCart(index)"></i> 
                <p class="mb-0">{{cartItem.name}}</p>
            </div>
        </div>
        <div class="col-3">
            <div class="d-flex containerAmountControl align-items-center justify-content-center mx-auto">
                <i class="fas fa-minus"></i>
                <p class="mb-0 mx-2">{{cartItem.ammount}}</p>
                <i class="fas fa-plus" @click.prevent="increaseProductCart(index)"></i>
            </div>
        </div>
        <div class="col-3">
            <p class="mb-0">
                <b>{{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartItem.price)}}</b> à vista <br/>
                ou 10x de {{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartItem.price/10)}}
            </p>
        </div>
        <div class="col-3">
            <p class="mb-0">
                <b>{{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartItem.price*cartItem.ammount)}}</b> à vista <br/>
                ou 10x de {{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((cartItem.price*cartItem.ammount)/10)}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
name: 'CartListItem',
props: ['cartItem','index'],
methods: {
    removeProductFromCart(index) {
        this.$store.commit('REMOVE_CART',index)
    },
    increaseProductCart(index) {
        this.$store.commit('INCREASE_CART_AMMOUNT',index)
    }
}
}
</script>

<style lang="scss" scoped>
.containerItemCart {
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