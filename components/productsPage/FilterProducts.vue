<template>
    <section id="containerFilterProducts">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="boxSearch row">
                        <div class="col-12 col-sm-5 col-md-4 col-lg-3 d-flex flex-column align-items-start align-items-sm-center justify-content-center">
                            <p class="mb-1 mb-sm-0 searchText">
                                Encontre seu produto
                            </p>
                        </div>
                        <div class="col-12 col-sm-7 col-md-8 col-lg-9 d-flex flex-column align-items-center justify-content-center">
                            <form class="w-100" @submit.prevent="filterProducts">
                                <b-input-group class="inputSearchGroup">
                                    <b-form-input class="inputSearch" v-model="filterParam" placeholder="Pesquisar..."></b-form-input>
                                    <b-input-group-append>
                                        <b-button class="bClearIcon" @click.prevent="clearFilter" v-if="isFiltred"><i class="fas fa-times"></i></b-button>
                                        <b-button class="bSearchIcon" @click.prevent="filterProducts"><i class="fas fa-search"></i></b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </form>
                        </div>
                    </div>
                    <p class="searchError mb-0" v-if="someError.status">
                        <i class="fas fa-times closeAlert mr-2" @click="someError.status=false"></i> {{someError.text}}
                    </p>
                    <p class="searchResume mb-0" v-if="isFiltred">
                        Filtrando produtos que sejam ou contenham o termo: "{{filterParam}}"
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: 'filterProducts',
data() {
    return {
        filterParam: '',
        isFiltred: false,
        someError: {
            status: false,
            text: ''
        }
    }
},
methods: {
    verifyFilter() {
        if(this.filterParam=='') {
            this.someError.text = 'Digite ao menos um termo na pesquisa.'
            this.someError.status = true
            return true
        }
    },
    filterProducts() {
        
        if(this.verifyFilter()) {
            return
        }
        
        this.isFiltred = false
        this.someError.status = false
        var filtredProds = this.products.filter(prod => {
            if(prod.name.toLowerCase().indexOf(this.filterParam.toLowerCase()) > - 1) {
                return prod
            }
        })
        this.$store.commit('SET_FILTRED_PRODUCTS',filtredProds)
        this.isFiltred = true        
    },
    clearFilter() {
        this.filterParam = ''
        this.$store.commit('SET_FILTRED_PRODUCTS',this.products)
        this.isFiltred = false
        this.someError.status = false
    }
},
computed: {
    ...mapState(['products','filtredProducts'])
},
}
</script>

<style lang="scss" scoped>
#containerFilterProducts {
    margin-top: 50px;
    @include d(xs) {
        padding: 0 15px;
    }
    .boxSearch {
        box-shadow: 0 0 10px rgba(0,0,0,0.15);
        padding: 15px 0;
        margin: 0;
        @include d(xs) {
            margin: 0 -15px;
        }

        @include d(xs) {
            padding: 10px 0;
        }

        .searchText {
            font-size: 1.25rem;
            font-family: 'source-sans-bold';
            color: #909090;

            @include d(md) {
                font-size: 1.15rem;
            }

            @include d(xs) {
                font-size: 1rem;
            }
        }

        .inputSearchGroup {
            .inputSearch {
                border-right: none;
                border-color: #909090;
                &:focus {
                    outline: 0 !important;
                    box-shadow: none !important;
                }
            }

            button {
                outline: 0 !important;
                box-shadow: none !important;
                color: #fff;
                border: none;
                transition: .2s;
            }

            .bSearchIcon {
                background: #8e36b7;           

                &:hover {
                    filter: brightness(1.2);
                }
            }    

            .bClearIcon {
                background: transparent;                
                color: #909090;
                border: 1px solid #909090;
                border-left: none;

                &:hover {
                    color: #ed1c24;
                }
            }
        }
    }

    .searchResume, .searchError {
        font-size: 1rem;
        font-family: 'source-sans-bold';
        margin-top: 15px;
    }

    .searchResume {
        color: #909090;
    }

    .searchError {
        color: #ed1c24;
    }

    .closeAlert {
        cursor: pointer;
        transition: .2s;
        &:hover {
            filter: brightness(1.2);
        }
    }
}
</style>