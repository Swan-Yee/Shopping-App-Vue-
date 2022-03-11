<template>
  <v-row>
    <v-col cols="4">
      <v-card>
        <v-img
          src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
        ></v-img>
        <v-card-title> Product 1 </v-card-title>
        <v-card-text>
          <div class="d-flex">
            <v-card-subtitle>Price - $100</v-card-subtitle>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn color="primary"> Details </v-btn>
            </v-card-actions>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
