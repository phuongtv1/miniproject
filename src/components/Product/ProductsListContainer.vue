<template>
  <div class="columns is-centered is-multiline">
    <div
      class="card column is-one-quarter"
      v-for="product in getProducts"
      :key="product.id"
    >
      <Products :product="product" />
    </div>
    <div class="section" v-if="products.length === 0">
      {{ noProductLabel }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getByTitle } from "@/mixins/filters.js";
import Products from "@/components/Product/Products.vue";

export default {
  name: "ProducstList",
  data() {
    return {
      id: "",
      noProductLable: "No product found",
      productsFiltered: [],
    };
  },

  computed: {
    ...mapState(['products', 'userInfo']),

    getProducts() {
      if (this.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.products;
      }
    },
  },

  methods: {
    getProductByTitle() {
      let listOfProducts = this.products,
          titleSearched = this.userInfo.productTitleSearched;

      return (this.productsFiltered = getByTitle(
        listOfProducts,
        titleSearched
      ));
    },
  },
  components: {
    Products,
  },
};
</script>
<style scoped>
.card {
  margin: 10px;
}
</style>
