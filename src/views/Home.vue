<template>
  <div>
    <Header />
    <main>
      <LoginModal />
      <Hero />
      <ProductsListContainer />
      <RegistrationModal />
      <CheckoutModal />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import { EventBus } from "@/mixins/event-bus.js";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import LoginModal from "@/components/Modal/Login.vue";
import RegistrationModal from "@/components/Modal/Registration.vue";
import CheckoutModal from "@/components/Modal/Checkout.vue";
import Hero from "@/components/Navbar/Hero.vue";
import ProductsListContainer from "@/components/Product/ProductsListContainer.vue";

export default {
  name: "Home",
  methods: {
    ...mapActions(["showSignupModal"]),

    closeModal (value) {
      this.showSignupModal(value);
    },
  },

  created() {
    EventBus.$on('closeModal', this.closeModal);
  },

  components: {
    Header,
    Footer,
    Hero,
    ProductsListContainer,
    LoginModal,
    RegistrationModal,
    CheckoutModal,
  },
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
