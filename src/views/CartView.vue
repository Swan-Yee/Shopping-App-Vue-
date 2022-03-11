<template>
  <v-row>
    <v-col cols="12">
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
            <tr>
              <td>1</td>
              <td>Name 1</td>
              <td>
                <v-img
                  src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
                  max-width="100"
                  max-height="100"
                ></v-img>
              </td>
              <td>$99</td>
              <td>
                <v-btn class="purple mr-2" dark>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn class="red" dark>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </td>
              <td>1</td>
              <td>$99</td>
              <td>
                <v-btn class="pink" dark>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Name 1</td>
              <td>
                <v-img
                  src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
                  max-width="100"
                  max-height="100"
                ></v-img>
              </td>
              <td>$99</td>
              <td>
                <v-btn class="purple mr-2" dark>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn class="red" dark>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </td>
              <td>1</td>
              <td>$99</td>
              <td>
                <v-btn class="pink" dark>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </td>
            </tr>
            <tr>
              <td colspan="6">Total Price :</td>
              <td colspan="2">$198</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CartView",
};
</script>

<style></style>
