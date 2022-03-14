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
    <div>
      <div class="text-center" v-if="!loading">
        <v-pagination
          v-model="page"
          :length="paginationLength"
          circle
        ></v-pagination>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    products() {
      let start = 0;
      let perPage = 6;
      if (this.page > 1) {
        start = (this.page - 1) * perPage;
      }
      return this.$store.state.products.slice(start, perPage * this.page);
    },
    loading() {
      return this.$store.state.loading;
    },
    paginationLength() {
      return Math.ceil(this.$store.state.products.length / 6);
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    moreDetail(product) {
      this.$router.push("/detail/" + product);
    },
  },
};
</script>
