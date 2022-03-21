<template>
  <div class="containerAlertItemAdded">
      <p class="alertText"><i @click.prevent="closeAlert" class="fas fa-times mr-2"></i> Item adicionado ao carrinho. <router-link class="ml-2" to="/cart">Ver</router-link></p>
      <div class="line"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: 'AlertItemAddedInCart',
data() {
    return {
        timeout: null
    }
},
methods: {
    closeAlert() {
        clearTimeout(this.timeout)
        this.$store.commit("SET_ITEM_ADDED",false)
    }
},
created() {
    this.timeout =  setTimeout(() => {
        clearTimeout(this.timeout)
        this.$store.commit("SET_ITEM_ADDED",false)
    }, 8000);
},
computed: {
    ...mapState(['itemAdded'])
}
}
</script>

<style lang="scss" scoped>
    .containerAlertItemAdded {
        position: fixed;
        z-index: 1000;
        bottom: 25px;
        right: 20px;
        background: #8e36b7;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
        border-radius: 5px;
        animation: zoomIn .5s;

        @include d(xs) {
            bottom: 15px;
            right: 15px;
        }
        .line {
            background: #da85ff;
            height: 3px;
            width: 100%;
            animation: widthGone 8s;
        }
        .alertText {
            padding: 10px 15px 0 15px;
            font-size: 1rem;
            color: #fff;
            font-family: 'source-sans-reg';
            margin-bottom: 5px;
            a {
                color: #e7afff;
            }
            i {
                cursor: pointer;
            }
        }
    }

    @keyframes zoomIn {
        0% {transform: translateX(500px)}
        100% {transform: translateX(0)}
    }

    @keyframes widthGone {
        0% {width: 100%;}
        100% {width: 0;}
    }
</style>