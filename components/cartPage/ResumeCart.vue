<template>
    <div class="row containerResumeCart d-flex flex-column align-items-end justify-content-end">
        <div class="col">
            <div class="row containerOnDemand">
                <div class="col-12 col-sm-6 col-md-8 col-lg-9 d-flex flex-column align-items-sm-end mb-1 mb-sm-0">
                    <p class="totalOnDemandText mb-0 mr-3">Total à vista</p>
                </div>
                <div class="col d-flex flex-column align-items-sm-end">
                    <p class="totalOnDemandVal mb-0">{{totalInCart}}</p>
                </div>
            </div>
            <div class="row containerOnTimes">
                <div class="col-12 col-sm-6 col-md-8 col-lg-9 d-flex flex-column align-items-sm-end mb-1 mb-sm-0">
                    <p class="totalOnTimesText mb-0 mr-3">Total Parcelado</p>
                </div>
                <div class="col d-flex flex-column align-items-sm-end">
                    <p class="totalOnTimesVal mb-0 text-sm-center">em até <b>10x {{totalInCartInTen}}</b><br/>(total de {{totalInCart}})</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: 'ResumeCart',
data() {
    return {
        totalInCart: 0,
        totalInCartInTen: 0
    }
},
methods: {
    calcTotalInCart() {
        this.totalInCart = this.cart.reduce(function(prev, cur) {
            return prev + (cur.ammount*cur.price);
        }, 0)

        this.totalInCartInTen = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.totalInCart/10)
        this.totalInCart = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.totalInCart)
    }
},
created() {
    this.calcTotalInCart()
},
computed: {
    ...mapState(['cart'])
},
watch: {
    cart() {
        this.calcTotalInCart()
    }
}
}
</script>

<style lang="scss" scoped>
    .containerResumeCart {
        padding: 40px 0;
        border-bottom: #434343 solid 1px;

        @include d(xs) {
            padding: 20px 0;
        }

        .containerOnDemand, .containerOnTimes {
            .totalOnDemandText, .totalOnDemandVal, .totalOnTimesText {
                font-size: 1.5rem;
                font-family: 'source-sans-bold';
                text-transform: uppercase;

                @include d(md) {
                    font-size: 1.25rem;
                }
            }

            .totalOnDemandText, .totalOnTimesText {
                color: #434343;
            }

            .totalOnDemandVal {                
                color: #8e36b7;
            }

            .totalOnTimesVal {
                color: #434343;
            }
        }

        .containerOnTimes {
            margin-top: 30px;

            @include d(xs) {
                margin-top: 20px;
            }
        }
    }
</style>