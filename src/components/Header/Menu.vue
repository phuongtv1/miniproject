<template>
  <div>
    <div class="navbar-item">
      <div class="field is-grouped">
        <p class="control">
          <a v-if="!isUserLoggedIn" class="button" @click="showSignupModal(true)">
            <span class="icon">
              <i class="fa fa-user-plus"></i>
            </span>
            <span>{{ signupLabel }}</span>
          </a>
        </p>
        <p class="control">
          <a v-if="!isUserLoggedIn" class="button" @click="showLoginModal(true)">
            <span class="icon">
              <i class="fa fa-user"></i>
            </span>
            <span>{{ loginLabel }}</span>
          </a>
        </p>
      </div>
    </div>
    <div v-if="isUserLoggedIn" class="navbar-item has-dropdown is-hoverable">
     <a href="" class="navbar-link"> Welcome {{ getUsername }} </a>
      <div class="navbar-dropdown is-boxed">
          <router-link :to="{name: 'user-wishlist'}" class="navbar-item">
              {{wishlistLabel}}
          </router-link>
          <hr class="navbar-divider">
          <a href="" class="navbar-item" @click="logout">
              {{logoutLabel}}
          </a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';

export default {
	name: 'Menu',
	data () {
		return {
			wishlistLabel: 'Wishlist',
			logoutLabel: 'Log out',
			loginLabel: 'Log in',
			signupLabel: 'Sign up'
		}
	},
	computed: {
    ...mapGetters(['isUserLoggedIn','getUserName']),

    ...mapMutations(['removeProductsFromFavourite']),

		getUsername () {
			let name = this.getUserName;
			
			if (name === '') {
				return 'user';
			} else {
				return name;
			}
		}
	},
	methods: {
    ...mapActions([
    'showLoginModal',
    'showSignupModal',
    'checkIsUserLoggedInStatus',
    'checkIsUserSignedUpStatus'
    ]),

		logout () {
			this.checkIsUserLoggedInStatus(false);
			this.checkIsUserSignedUpStatus(false);
			this.removeProductsFromFavourite();
			// redirect to homepage
			this.$router.push({ name: 'home' });
		},
		
	}
}
</script>