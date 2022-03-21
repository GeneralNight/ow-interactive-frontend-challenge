<template>
  <div @click.prevent="backToTop" class="containerBackToTop d-flex justify-content-center align-items-center">
    <i class="fas fa-angle-up"></i>
  </div>
</template>

<script>
export default {
name: 'BackToTop',
methods: {
    backToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}
}
</script>

<style lang="scss" scoped>
.containerBackToTop {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background: #8e36b7;
    border: 2px solid #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    font-size: 1.5rem;
    cursor: pointer;    
    animation: enter 1s;
}

@keyframes enter {
    0% {transform: translateY(500px);}
    50% {transform: translateY(-10px);}
    100% {transform: translateY(0px);}
}
</style>