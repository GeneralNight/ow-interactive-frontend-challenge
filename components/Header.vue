<template>
    <header id="containerHeader">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="d-flex justify-content-between align-items-center">
                        <img src="~/assets/img/logo.png" alt="Logo Mkt Place" class="logo">
                        <div class="containerLinks d-flex align-items-center">
                            <ul class="d-flex menuLinks">
                                <li>
                                    <router-link to="/products">Produtos</router-link>
                                </li>
                            </ul>
                            <div class="containerCartIcon d-flex align-items-end">
                                <img src="~/assets/img/cartIcon.png" alt="ícone carrinho de compras" class="cartIcon ml-5">
                                <div class="numOfProducts d-flex justify-content-center align-items-center">0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
name: 'Header'
}
</script>

<style lang="scss" scoped>
    #containerHeader {
        padding: 50px 0;

        .menuLinks {
            text-decoration: none;
            list-style: none;
            padding: 0;
            margin: 0;

            a {
                color: #909090;
                text-decoration: none;
                font-size: 1.25rem;
                font-family: 'source-sans-bold';
                transition: .2s;
                border-bottom: 2px solid transparent;

                &:hover {
                    color: #8e36b7;
                    border-bottom-color: #8e36b7;
                }
            }
        }

        .containerCartIcon {
            .numOfProducts {
                background: #ed1c24;
                width: 20px;
                height: 20px;
                font-size: .7rem;
                border-radius: 50%;
                font-family: 'source-sans-bold';
                color: #fff;
            }
        }
    }
</style>