<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn text :to="{ name: 'home' }">
        <v-icon>mdi-home</v-icon>
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn text :to="{ name: 'cart' }">
        <v-badge :content="carts.length" :value="carts.length" color="green">
          <v-icon>mdi-cart</v-icon>
          <span class="mr-2">Cart</span>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style></style>

<script>
export default {
  name: "App",
  computed: {
    carts() {
      return this.$store.state.carts;
    },
  },
};
</script>
