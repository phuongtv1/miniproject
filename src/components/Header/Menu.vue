<template>
  <div>
    <div class="navbar-item">
      <div class="field is-grouped">
        <p class="control">
          <a class="button">
            <span class="icon">
              <i class="fa fa-user-plus"></i>
            </span>
            <span>{{ signupLabel }}</span>
          </a>
        </p>
        <p class="control">
          <a class="button">
            <span class="icon">
              <i class="fa fa-user"></i>
            </span>
            <span>{{ loginLabel }}</span>
          </a>
        </p>
      </div>
    </div>
    <div class="navbar-item has-dropdown is-hoverable">
      <a href="" class="navbar-link"> Welcome {{}} </a>
      <div class="navbar-dropdown is-boxed">
        <router-link to="/" class="navbar-item">
          {{ wishListLabel }}
        </router-link>
        <hr class="navbar-divider" />
        <a href="" class="navbar-item">
          {{ logoutLable }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      wishListLabel: "Wishlist",
      logoutLable: "Log out",
      loginLabel: "Log in",
      signupLabel: "Sign up",
    };
  },
};
</script>
