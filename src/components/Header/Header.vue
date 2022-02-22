<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="narbar-menu">
        <div class="narbar-start">
          <div class="navbar-item field">
            <Search></Search>
          </div>
        </div>
      </div>
    </nav>
    <div class="navbar-end is-hidden-mobile">
      <Menu></Menu>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Search from "./Search.vue";
export default {
  name: "Header",
  data() {
    return {};
  },
  components: {
    Menu,
    Search,
  },
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
