<template>
  <v-row>
    <v-col cols="12">
      <v-btn class="secondary" to="/">
        <v-icon> mdi-chevron-left </v-icon>
        back
      </v-btn>
      <v-card v-if="!loading">
        <div class="text-center"><img :src="product.image" width="300" /></div>
        <v-card-title> {{ product.title }} </v-card-title>
        <v-card-subtitle>{{ product.description }} </v-card-subtitle>
        <v-card-text>
          <v-chip class="primary">{{ product.category }}</v-chip> Pirce - $
          {{ product.price }}
          <v-divider class="my-5"></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="addCart"> Add Cart </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
      <div class="loading" v-else>
        <v-progress-circular
          :size="70"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "DetailView",
  data() {
    return {
      product: [],
      loading: true,
    };
  },
  props: ["id"],
  created() {
    fetch(`https://fakestoreapi.com/products/${this.id}`)
      .then((res) => res.json())
      .then((json) => ((this.product = json), (this.loading = false)));
  },
  methods: {
    addCart() {
      let carts = this.$root.carts;
      let isInCart = carts.find((cart) => cart.id === this.product.id);
      if (isInCart) {
        isInCart.qty++;
      } else {
        let newProduct = { qty: 1, ...this.product };
        carts.push(newProduct);
      }
    },
  },
};
</script>

<style>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
