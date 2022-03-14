<template>
  <v-row>
    <v-col cols="12" v-if="carts.length">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Name</th>
              <th class="text-left">Image</th>
              <th class="text-left">Orginal Price</th>
              <th class="text-left">Quantity Actions</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Price</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart, index) in carts" :key="cart.id">
              <td>{{ cart.id }}</td>
              <td>{{ cart.title }}</td>
              <td>
                <img :src="cart.image" width="100" height="100" />
              </td>
              <td>${{ cart.price }}</td>
              <td class="text-no-wrap">
                <v-btn class="purple mr-2" dark @click="increaseQty(cart)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn class="red" dark @click="decreaseQty(cart)">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </td>
              <td>{{ cart.qty }}</td>
              <td>${{ finalPrice(cart.qty, cart.price).toFixed(2) }}</td>
              <td>
                <v-btn class="pink" dark @click="deleteCart(index)">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </td>
            </tr>
            <tr v-show="carts.length">
              <td colspan="6">Total Price :</td>
              <td colspan="2">${{ totalPrice.toFixed(2) }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
    <v-col class="col-12" v-else>
      <v-banner two-line>
        <v-avatar slot="icon" color="deep-purple accent-4" size="40">
          <v-icon icon="mdi-cart" color="white"> mdi-cart </v-icon>
        </v-avatar>

        There has no Items

        <template v-slot:actions>
          <v-btn text color="deep-purple accent-4" to="/"> See Items </v-btn>
        </template>
      </v-banner>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CartView",
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    finalPrice(qty, price) {
      return qty * price;
    },
    increaseQty(cart) {
      this.$store.dispatch("increaseQty", cart);
    },
    decreaseQty(cart) {
      this.$store.dispatch("decreaseQty", cart);
    },
    deleteCart(index) {
      this.$store.commit("deleteCart", index);
    },
  },
  computed: {
    totalPrice() {
      return this.carts.reduce(
        (total, cart) => (total += cart.price * cart.qty),
        0
      );
    },
  },
  mounted() {
    this.carts = this.$store.state.carts;
  },
};
</script>

<style></style>
