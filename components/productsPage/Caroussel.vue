<template>
    <section id="containerCarroussel">
      <div>
        <img v-if="actualSlide==1"  src="~/assets/img/banner1.jpg" alt="banner 1" class="enterImg imgCaroussel img-fluid" >
        <img v-if="actualSlide==2"  src="~/assets/img/banner2.jpg" alt="banner 2" class="enterImg imgCaroussel img-fluid">
      </div>

      <div class="containerBullets d-flex justify-content-center">
          <div class="bullet d-flex justify-content-center align-items-center" v-for="(bullet,index) in totalSlides" :key="index" @click="goToSlide(index+1)">
              <div class="active" v-if="actualSlide==index+1"></div>
          </div>
      </div>
    </section>
</template>

<script>
export default {
name: 'Caroussel',
data() {
    return {
        actualSlide: 1,
        totalSlides: 2,
        togglingSlide: false,
        mousePos: {
            start: null,
            end: null
        },
        touchPos: {
            start: null,
            end: null
        }
    }
},
methods: {
    goToSlide(slide) {
        this.actualSlide = slide
    }
}

}
</script>

<style lang="scss" scoped>
    #containerCarroussel {
        width: 100%;

        img {
            // pointer-events: none;
            opacity: 0;
        }

        .enterImg {
            animation: enterImg 2s forwards;
        }

        .containerBullets {
            margin-top: 30px;
            .bullet {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                border: 1px solid #909090;
                cursor: pointer;

                & + .bullet {
                    margin-left: 15px;
                }

                .active {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #8e36b7;
                }
            }
        }

        @keyframes enterImg {
            0% {opacity: 0;}
            100% {opacity: 1;}
        }
    }
</style>