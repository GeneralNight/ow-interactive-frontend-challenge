export const state = () => ({
    cart: [],
    products: [],
    filtredProducts: []
})

export const mutations = {
    SET_PRODUCTS(state,paylaod) {
        state.products = paylaod
    },
    SET_FILTRED_PRODUCTS(state,paylaod) {
        state.filtredProducts = paylaod
    },
    CLEAN_PRODUCTS(state,paylaod) {
        state.products = []
    },
    CLEAN_FILTRED_PRODUCTS(state,paylaod) {
        state.filtredProducts = []
    },
    CLEAN_CART(state,paylaod) {
        state.cart = []
    },
    SET_CART(state,payload) {
        state.cart = payload
    }    
}

export const actions = {}