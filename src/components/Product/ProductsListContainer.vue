<template>
  <div class="columns is-centered is-multiline">
    <div
      class="card column is-one-quarter"
      v-for="product in products"
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
import Products from "@/components/Product/Products.vue";
import { mapState } from "vuex";

export default {
  name: "ProducstList",
  data() {
    return {
      id: "",
      noProductLable: "No product found",
    };
  },

  computed: {
    ...mapState(["products"]),
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
