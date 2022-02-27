<template>
  <p class="control has-icons-left">
    <input
      class="input is-rounded"
      type="text"
      v-model="value"
      :placeholder="placeholder"
      @keyup="search(value)"
    />
    <span class="icon is-small is-left">
      <i class="fa fa-search"></i>
    </span>
  </p>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "search",
  data() {
    return {
      value: "",
    };
  },
  computed: {
    
    placeholder() {
      if (this.$route.path === "/wishlist") {
        return "Search in wishlist...";
      } else {
        return "Search...";
      }
    },
  },
  methods: {
    ...mapActions(["getHasUserSearched", "getProductTitleSearched"]),
    
    search(value) {
      if (value.length > 0) {
        this.getHasUserSearched(true);
        this.getProductTitleSearched(value);
      } else {
        this.getHasUserSearched(false);
        this.getProductTitleSearched("");
      }
    },
  },
};
</script>
