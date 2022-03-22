<template>
  <div class="containerResumeCart d-flex flex-column align-items-end justify-content-end">
      <div class="d-flex containerOnDemand align-items-center">
          <p class="totalOnDemandText mb-0 mr-3">Total à vista</p>
          <p class="totalOnDemandVal mb-0">{{totalInCart}}</p>
      </div>
      <div class="d-flex containerOnTimes align-items-center">
          <p class="totalOnTimesText mb-0 mr-3">Total Parcelado</p>
          <p class="totalOnTimesVal mb-0 text-center">em até <b>10x {{totalInCartInTen}}</b><br/>(total de {{totalInCart}})</p>
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
        margin-top: 40px;

        .containerOnDemand, .containerOnTimes {
            .totalOnDemandText, .totalOnDemandVal, .totalOnTimesText {
                font-size: 1.5rem;
                font-family: 'source-sans-bold';
                text-transform: uppercase;
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
    }
</style>