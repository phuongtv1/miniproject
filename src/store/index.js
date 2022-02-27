import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 50000,
        saleOff: 0.1,
        selectedProduct: 0,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 10,
        image: "img2",
        listProductDetail: [
          {
            image: "blueImg1",
            quantity: 10,
            textColor: "Màu xanh",
          },
          {
            image: "blackImg1",
            quantity: 0,
            textColor: "Màu đen",
          },
        ],
      },
      {
        id: 2,
        title: "Product 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 35000,
        saleOff: 0.2,
        selectedProduct: 1,
        ratings: 5,
        reviews: 10,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        image: "img1",
        quantity: 15,
        listProductDetail: [
          {
            image: "blueImg1",
            quantity: 10,
            textColor: "Màu xanh",
          },
          {
            image: "blackImg1",
            quantity: 5,
            textColor: "Màu đen",
          },
        ],
      },
      {
        id: 3,
        title: "Product 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 110000,
        saleOff: 0.3,
        selectedProduct: 0,
        ratings: 2,
        reviews: 3,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 10,
        image: "img2",
        listProductDetail: [
          {
            image: "blueImg1",
            quantity: 0,
            textColor: "Màu xanh",
          },
          {
            image: "blackImg1",
            quantity: 5,
            textColor: "Màu đen",
          },
        ],
      },
      {
        id: 4,
        title: "Product 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 50000,
        saleOff: 0.4,
        selectedProduct: 0,
        ratings: 1,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 15,
        image: "img1",
        listProductDetail: [
          {
            image: "blueImg1",
            quantity: 10,
            textColor: "Màu xanh",
          },
          {
            image: "blackImg1",
            quantity: 5,
            textColor: "Màu đen",
          },
        ],
      },
      {
        id: 5,
        title: "Product 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 35000,
        saleOff: 0.5,
        selectedProduct: 0,
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 15,
        image: "img2",
        listProductDetail: [
          {
            image: "blueImg1",
            quantity: 10,
            textColor: "Màu xanh",
          },
          {
            image: "blackImg1",
            quantity: 5,
            textColor: "Màu đen",
          },
        ],
      },
      {
        id: 6,
        title: "Product 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 110000,
        saleOff: 0.6,
        selectedProduct: 0,
        ratings: 5,
        reviews: 1,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 15,
        image: "img1",
        listProductDetail: [
          {
            image: "blueImg1",
            quantity: 10,
            textColor: "Màu xanh",
          },
          {
            image: "blackImg1",
            quantity: 5,
            textColor: "Màu đen",
          },
        ],
      },
      {
        id: 7,
        title: "Product 7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 50000,
        saleOff: 0.7,
        selectedProduct: 0,
        ratings: 5,
        reviews: 7,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 15,
        image: "img2",
        listProductDetail: [
          {
            image: "blueImg1",
            quantity: 10,
            textColor: "Màu xanh",
          },
          {
            image: "blackImg1",
            quantity: 5,
            textColor: "Màu đen",
          },
        ],
      },
      {
        id: 8,
        title: "Product 8",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 35000,
        saleOff: 0.8,
        selectedProduct: 0,
        ratings: 3,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 15,
        image: "img1",
        listProductDetail: [
          {
            image: "blueImg1",
            quantity: 10,
            textColor: "Màu xanh",
          },
          {
            image: "blackImg1",
            quantity: 5,
            textColor: "Màu đen",
          },
        ],
      },
      {
        id: 9,
        title: "Product 9",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 110000,
        saleOff: 0.9,
        selectedProduct: 0,
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 15,
        image: "img2",
        listProductDetail: [
          {
            image: "blueImg1",
            quantity: 10,
            textColor: "Màu xanh",
          },
          {
            image: "blackImg1",
            quantity: 5,
            textColor: "Màu đen",
          },
        ],
      },
    ],
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      hasSearched: false,
      name: "",
      productTitleSearched: "",
    },
    systemInfo: {
      openLoginModal: false,
      openSignupModal: false,
      openCheckoutModal: false,
    },
  },
  getters: {
    productsAddedToFavourite: state => {
      return state.products.filter(el => {
        return el.isFavourite;
      });
    },

    isUserLoggedIn: state => {
      return state.userInfo.isLoggedIn;
    },

    isUserSignedUp: state => {
      return state.userInfo.isSignedUp;
    },

    getUserName: state => {
      return state.userInfo.name;
    },

    productsAdded: (state) => {
      return state.products.filter((el) => {
        return el.isAddedToCart;
      });
    },

    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id == id);
    },

    quantity: (state) => {
      return state.products.quantity;
    },

    isLoginModalOpen: state => {
      return state.systemInfo.openLoginModal;
    },

    isCheckoutModalOpen: state => {
      return state.systemInfo.openCheckoutModal;
    },

    isSignupModalOpen: state => {
        return state.systemInfo.openSignupModal;
      },
  },
  mutations: {
    showCheckoutModal: (state, show) => {
      state.systemInfo.openCheckoutModal = show;
    },

    setProductToCart: (state, id) => {
      state.products.forEach((el) => {
        if (id === el.id) {
          el.isAddedToCart = true;
        }
      });
    },

    setAddedBtn: (state, data) => {
      state.products.forEach((el) => {
        if (data.id === el.id) {
          el.isAddedBtn = data.status;
        }
      });
    },

    removeFromCart: (state, id) => {
      state.products.forEach((el) => {
        if (id === el.id) {
          el.isAddedToCart = false;
        }
      });
    },

    setHasUserSearched: (state, hasSearched) => {
      state.userInfo.hasSearched = hasSearched;
    },

    setUserName: (state, name) => {
      state.userInfo.name = name;
    },

    setProductTitleSearched: (state, titleSearched) => {
      state.userInfo.productTitleSearched = titleSearched;
    },

    setQuantity: (state, data) => {
      state.products.forEach((el) => {
        if (data.id === el.id) {
          el.quantity = data.quantity;
        }
      });
    },

    setToFavourite: (state, id) => {
      state.products.forEach((el) => {
        if (id === el.id) {
          el.isFavourite = true;
        }
      });
    },
    deleteFromFavourite: (state, id) => {
      state.products.forEach((el) => {
        if (id === el.id) {
          el.isFavourite = false;
        }
      });
    },

    setLoginModal: (state, show) => {
      state.systemInfo.openLoginModal = show;
    },

    setSignUpModal: (state, show) => {
      state.systemInfo.openSignupModal = show;
    },

    isUserLoggedInStatus: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn;
    },

    isUserSignedUpStatus: (state, isSignedUp) => {
      state.userInfo.isSignedUp = isSignedUp;
    },

    removeProductsFromFavourite: state => {
      state.products.filter(el => {
        el.isFavourite = false;
      });
    },

    removeFromFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = false;
        }
      });
    },

    SET_USER(state, authUser) {
      state.authUser = authUser
    }
  },

  actions: {

    checkIsUserLoggedIn: ({ commit }, payload) => {
      commit("isUserLoggedInStatus", payload);
    },

    checkIsUserSignedUpStatus: ({ commit }, payload) => {
      commit("isUserSignedUpStatus", payload);
    },

    showLoginModal: ({ commit }, payload) => {
      commit("setLoginModal", payload);
    },

    showSignupModal: ({ commit }, payload) => {
      commit("setSignUpModal", payload);
    },

    addToFavourite({ commit }, payload) {
      commit("setToFavourite", payload);
    },

    removeProductToFavourite({ commit }, payload) {
      commit("deleteFromFavourite", payload);
    },

    changeQuantity({ commit }, payload) {
      commit("setQuantity", payload);
    },

    changeAddedBtn({ commit }, payload) {
      commit("setAddedBtn", payload);
    },

    addProductToCart({ commit }, payload) {
      commit("setProductToCart", payload);
    },

    getHasUserSearched({ commit }, payload) {
      commit("setHasUserSearched", payload);
    },

    getProductTitleSearched({ commit }, payload) {
      commit("setProductTitleSearched", payload, { root: true });
    },

  },
  modules: {},
});
