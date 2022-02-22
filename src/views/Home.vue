<template>
  <div class="home">
    <Header />
    <ProductsListContainer />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import ProductsListContainer from "@/components/Product/ProductsListContainer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    ProductsListContainer,
  },
};
</script>
