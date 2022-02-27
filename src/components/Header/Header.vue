<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="narbar-menu" is-active>
        <div class="navbar-start">
          <div class="navbar-item field">
            <Search></Search>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item social">
          <a href="#" class="icon" :title="facebookToolTip">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="icon" :title="twitterToolTip">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="icon" :title="instagramToolTip">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="icon" :title="linkedinToolTip">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <div class="navbar-item shopping-cart" @click="showCheckoutModal(true)">
          <span class="icon">
            <i class="fa fa-shopping-cart"></i>
          </span>
          <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">
            {{ numProductsAdded }}
          </span>
        </div>
      </div>
      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" class="navbar-end">
        <Menu></Menu>
      </div>

      <!-- For desktop -->
      <div class="navbar-end is-hidden-mobile">
        <Menu></Menu>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Search from "@/components/Header/Search.vue";
import Menu from "@/components/Header/Menu.vue";
export default {
  name: "Header",
  data() {
    return {
      linkedinToolTip: "Follow us on Linkedin",
      facebookToolTip: "Follow us on Facebook",
      twitterToolTip: "Follow us on Twitter",
      instagramToolTip: "Follow us on Instagram",
      isCheckoutActive: false,
      isMenuOpen: false,
    };
  },
  components: {
    Search,
    Menu,
  },
  computed: {
    ...mapGetters(["productsAdded"]),

    numProductsAdded() {
      return this.productsAdded.length;
    },
  },
  methods: {
    ...mapMutations(["showCheckoutModal"]),
  },
};
</script>

<style scoped>
.title {
  background: url("~@/assets/images/logo.png") no-repeat;
  background-position: 50% 50%;
  background-size: 165px;
  width: 175px;
  height: 35px;
}
.shopping-cart {
  cursor: pointer;
}
a {
  color: grey;
}
.navbar-brand {
  padding-bottom: 3%;
}
</style>
