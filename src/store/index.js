import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    loading: true,
    carts: [],
  },
  getters: {},
  mutations: {
    fetchProducts(state, payload) {
      state.products = payload;
      state.loading = false;
    },
    fetchProductDetail(state, data) {
      state.product = data;
      state.loading = false;
    },
    addToCart(state, data) {
      let carts = state.carts;
      let isInCart = carts.find((cart) => cart.id === state.product.id);
      if (isInCart) {
        isInCart.qty++;
      } else {
        state.carts.push(data);
      }
    },
    increaseQty(state, data) {
      if (data.qty != 1) return data.qty++;
    },
    decreaseQty(state, data) {
      if (data.qty != 1) return data.qty--;
    },
    deleteCart(state, id) {
      return state.carts.splice(id, 1);
    },
  },
  actions: {
    fetchProducts(context) {
      context.loading = true;
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          context.commit("fetchProducts", data);
        });
    },
    fetchProductDetail(context, id) {
      context.loading = true;
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          context.commit("fetchProductDetail", data);
        });
    },
    addToCart(context) {
      let carts = context.rootState.carts;
      let isInCart = carts.find(
        (cart) => cart.id === context.rootState.product.id
      );
      if (isInCart) {
        isInCart.qty++;
      } else {
        let newProduct = { qty: 1, ...context.rootState.product };
        context.commit("addToCart", newProduct);
      }
    },
    increaseQty(context, payload) {
      let cart = context.rootState.carts.find(
        (cart) => cart.title == payload.title
      );
      context.commit("increaseQty", cart);
    },
    decreaseQty(context, payload) {
      let cart = context.rootState.carts.find(
        (cart) => cart.title == payload.title
      );
      context.commit("decreaseQty", cart);
    },
  },
  modules: {},
});
