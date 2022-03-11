<template>
  <v-row>
    <v-col cols="4" v-for="product of products" :key="product.id">
      <v-card v-if="!loading">
        <div class="text-center">
          <img :src="product.image" height="200" width="200" />
        </div>
        <v-card-title>{{ product.title }}</v-card-title>
        <v-card-text>
          <div class="d-flex">
            <v-card-subtitle>Price - $ {{ product.price }}</v-card-subtitle>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn color="primary" @click="moreDetail(product.id)">
                Details
              </v-btn>
            </v-card-actions>
          </div>
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
  name: "HomeView",
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  created() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => ((this.products = json), (this.loading = false)));
  },
  methods: {
    moreDetail(product) {
      this.$router.push("/detail/" + product);
    },
  },
};
</script>
