<template>
    <b-modal id="modalCheckoutSuccess" hide-footer hide-header centered>
        <div class="containerModalClose d-flex justify-content-end">
            <i class="fas fa-times iconClose" @click.prevent="closeModal()"></i>
        </div>
        <div class="containerModalContent d-flex flex-column justify-content-center align-items-center">
            <img src="~/assets/img/checkIcon.png" alt="" class="iconCheck img-fluid">
            <p class="contentText mb-0">Seu cadastro foi solicitado com sucesso!</p>
            <router-link to="/products" class="contentLink mb-0"><i class="fas fa-long-arrow-alt-left mr-2"></i> Voltar para a home</router-link>
        </div>
    </b-modal>
</template>

<script>
export default {
name: 'ModalSuccess',
methods: {
    closeModal() {
        this.$router.push('/products')
    }
}
}
</script>

<style lang="scss" scoped>
.containerModalClose {
    .iconClose {
        font-size: 1.15rem;
        color: #909090;
        cursor: pointer;
        transition: .2s;

        &:hover {
            color: #8e36b7;
        }
    }
}
    .containerModalContent {
        padding: 50px 0;

        .contentText {
            color: #434343;
            font-family: 'source-sans-reg';
            font-size: 1.35rem;
            margin-top: 25px;
        }

        .contentLink {
            text-decoration: none;
            font-family: 'source-sans-reg';
            color: #8e36b7;
            font-size: 1.15rem;
            margin-top: 25px;
            transition: .2s;
            padding: 5px 15px;
            border-radius: 5px;
            &:hover {
                background: #8e36b7;
                color: #fff;
            }
        }
    }
</style>