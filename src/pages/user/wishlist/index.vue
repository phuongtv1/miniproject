<template>
  <div>
    <Header />
    <LoginModal />
    <RegistrationModal @closeModal="closeModal" />
    <CheckoutModal />
    <div class="section">
      <h3 class="title">{{ pageTitle }}</h3>
      <div class="columns is-centered is-multiline">
        <div
          class="card column is-one-quarter"
          v-for="product in productsInWishlist"
          :key="product.id"
        >
          <ProductsList :product="product" />
        </div>
        <div class="section" v-if="productsInWishlist.length === 0">
          <p>{{ noProductLabel }}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import ProductsList from "@/components/Product/Products.vue";
import { getByTitle } from "@/mixins/filters";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import LoginModal from "@/components/Modal/Login.vue";
import RegistrationModal from "@/components/Modal/Registration.vue";
import CheckoutModal from "@/components/Modal/Checkout.vue";

export default {
  name: "user-wishlist",
  data() {
    return {
      pageTitle: "Your Wishlist",
      noProductLabel: "Your wishlist is empty",
    };
  },
  
  computed: {
    ...mapState(['userInfo']),

    ...mapGetters(['productsAddedToFavourite']),

    productsInWishlist() {
      if (this.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.productsAddedToFavourite;
      }
    },
  },
  methods: {
    ...mapActions(["showSignupModal"]),

    closeModal (value) {
      this.showSignupModal(value);
    },

    getProductByTitle() {
      let listOfProducts = this.productsAddedToFavourite,
        titleSearched = this.userInfo.productTitleSearched;

      return (this.productsFiltered = getByTitle(
        listOfProducts,
        titleSearched
      ));
    },
  },

  components: {
    Header,
    Footer,
    LoginModal,
    RegistrationModal,
    CheckoutModal,
    ProductsList
  },
};
</script>

<style scoped>
.card {
  margin: 10px;
}
</style>
