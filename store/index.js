export const state = () => ({
    cart: [],
    products: [],
    filtredProducts: [],
    itemAdded: false,
    someItemAdded: false
})

export const mutations = {
    SET_CART(state,payload) {
        state.cart = payload
    },
    SOME_ITEM_ADDED(state) {
        state.someItemAdded = !state.someItemAdded
    },
    SET_ITEM_ADDED(state,paylaod) {
        state.itemAdded = paylaod
    },
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
    CLEAN_CART(state) {
        state.cart = []
    },
    ADD_CART(state,payload) {
        if(state.cart.filter(prodInCart=>prodInCart.name==payload.name).length == 0) {
            payload.ammount = 1
            state.cart.push(payload)
        }else {
            state.cart.filter(prodInCart=>prodInCart.name==payload.name)[0].ammount += 1
        }
    },
    REMOVE_CART(state,payload) {
        state.cart.splice(payload,1)
    },
    TOGGLE_CART_AMMOUNT(state,payload) {
        state.cart = payload
    }
}   

export const actions = {
    saveCartInLocalHost() {
        window.localStorage.cart = JSON.stringify(this.state.cart)
        console.log()
    },
}