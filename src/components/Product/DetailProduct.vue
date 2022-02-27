<template>
  <div>
    <Header />
    <div class="section">
      <div class="card is-clearfix columns">
        <figure class="card-image is-480x480 column is-one-thirds">
          <img
            v-if="selectedProductByColor.image"
            alt="Placeholder image"
            :src="getProductDetailImage(selectedProductByColor)"
          />
          <img
            v-else-if="detailProduct"
            alt="Placeholder image"
            :src="getProductDetailImage(detailProduct)"
          />
          <img v-else alt="Placeholder image" :src="getProductDetailImage().icon" />
        </figure>
        <div class="card-content column is-two-thirds">
          <div class="card-content__title">
            <h2 class="title is-4">
              {{ product.title }}
              <button
                class="button is-small"
                :title="removeFromFavouriteLabel"
                v-show="product.isFavourite"
                @click="removeFromFavourite(product.id)"
              >
                <span class="icon is-small" style="color: red">
                  <i class="fa fa-heart"></i>
                </span>
              </button>
              <button
                class="button is-small"
                :title="addToFavouriteLabel"
                v-show="!product.isFavourite"
                @click="saveToFavorite(product.id)"
              >
                <span class="icon is-small" style="color: pink">
                  <i class="fa fa-heart"></i>
                </span>
              </button>
            </h2>
          </div>
          <div class="card-content__text">
            <p class="brand">Brand: No brand</p>
            <div v-if="selectedProductByColor.quantity">
              <p
                v-if="selectedProductByColor.quantity > 0"
              >Còn lại: {{ selectedProductByColor.quantity }} sản phẩm</p>
              <p v-else>Sản phẩm đã hết hàng</p>
            </div>
            <div v-else>
              <p v-if="selectedProductByColor.quantity <= 0">Sản phẩm đã hết hàng</p>
              <p v-else>Còn lại: {{ detailProduct.quantity }} sản phẩm</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud
            </p>
          </div>
          <div class="card-content__ratings" v-if="product.ratings === 1">
            <i class="fa fa-star"></i>
          </div>
          <div class="card-content__ratings" v-else-if="product.ratings === 2">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <div class="card-content__ratings" v-else-if="product.ratings === 3">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <div class="card-content__ratings" v-else-if="product.ratings === 4">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <div class="card-content__ratings" v-else-if="product.ratings === 5">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <div class="card-content__reviews">
            <div class="is-pulled-left">
              <p>
                <strong>
                  {{
                  product.reviews > 0
                  ? `${product.reviews} Reviews`
                  : "No reviews"
                  }}
                </strong>
              </p>
            </div>
          </div>
          <div class="card-content__price is-pulled-left">
            <span class="title is-3">
              <strong>{{ formatFinalPrice }}</strong>
            </span>
            <div class="origin-price">
              <span>{{ formatPrice }}</span>
              <span class="saleoff-price">-{{ product.saleOff * 100 }}%</span>
            </div>
            <div>
              <div class="text" style="padding: 10px 0 10px">
                <label style="fontweight: bold; padding-right: 2px">Loại</label>
                <span
                  v-if="selectedProductByColor.textColor"
                  style="paddingleft: 30px"
                >{{ selectedProductByColor.textColor }}</span>
                <span v-else style="paddingleft: 30px">
                  {{
                  detailProduct.textColor
                  }}
                </span>
              </div>
              <div class="wrapper-color">
                <div
                  class="list-color"
                  v-for="(productDetail, idx) in product.listProductDetail"
                  :key="idx"
                  @click="handleClickColor(idx)"
                >
                  <ul>
                    <li>
                      <img
                        :class="classActive(idx)"
                        alt="productDetail.textColor"
                        :src="getProductDetailImage(productDetail)"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="field is-grouped is-centered" style="padding: 5%">
              <div class="field is-grouped">
                <p class="control">
                  <span style="fontsize: larger">Số lượng</span>
                </p>
                <p class="control">
                  <button
                    @click="decrementProduct(product.id)"
                    class="button is-info is-light is-small is-outlined is-hovered"
                  >-</button>
                </p>
                <p class="control">
                  <button
                    style="pointer-events: none"
                    class="button is-info is-light is-small is-outlined is-hovered"
                  >{{ count }}</button>
                </p>
                <p class="control">
                  <button
                    @click="incrementProduct(product.id)"
                    class="button is-info is-light is-small is-outlined is-hovered"
                  >+</button>
                </p>
              </div>
              <div class="control" style="marginleft: 6%">
                <div class="select is-rounded is-small is-pulled-right" style="marginleft: 10%">
                  <select @change="onSelectQuantity(product.id)" v-model="selected">
                    <option
                      v-for="quantity in quantityArray"
                      :key="quantity.id"
                      :value="quantity"
                    >{{ quantity }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="card-content__btn is-pulled-right">
            <button
              class="button is-primary"
              v-if="!isAddedBtn"
              @click="addToCart(product.id)"
            >{{ addToCartLabel }}</button>
            <button
              class="button is-text"
              v-if="isAddedBtn"
              @click="removeFromCart(product.id)"
            >{{ removeFromCartLabel }}</button>
          </div>
        </div>
      </div>
    </div>
    <LoginModal />
    <RegistrationModal />
    <CheckoutModal />
    <Footer />
  </div>
</template>

<script>

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import LoginModal from "@/components/Modal/Login.vue";
import RegistrationModal from "@/components/Modal/Registration.vue";
import CheckoutModal from "@/components/Modal/Checkout.vue";

export default {
  name: "product-detail",

  data() {
    return {
      addToCartLabel: "Add to cart",
      removeFromCartLabel: "Remove from cart",
      addToFavouriteLabel: "Add to favourite",
      removeFromFavouriteLabel: "Remove from favourite",
      product: {},
      detailProduct: {},
      selected: 1,
      quantityArray: [],
      selectedProductByColor: {},
      count: 1,
    };
  },

  computed: {
    ...mapState(["userInfo"]),

    ...mapGetters(["getProductById"]),

    formatPrice() {
      if (this?.product?.price) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "VND",
        }).format(this.product.price);
      } else {
        return "vnd";
      }
    },

    formatFinalPrice() {
      if (this?.product?.price && this?.product?.saleOff) {
        let finalPrice =
          this.product.price - this.product.saleOff * this.product.price;

        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "VND",
        }).format(finalPrice);
      } else {
        return "vnd";
      }
    },

    isAddedBtn() {
      return this.product.isAddedBtn;
    },

    productImage() {
      if (this?.product?.image) {
        return this.product.image + ".jpg";
      } else {
        return "defaultImg.png";
      }
    },

    selectedProductByColorImage() {
      return {
        icon:
          this.selectedProductByColor.image &&
          require(`@/assets/images/${this.selectedProductByColor.image}.jpg`),
      };
    },

  },
  methods: {
    ...mapMutations(['removeFromFavourite']),

    ...mapActions([
      "changeQuantity",
      "changeAddedBtn",
      "addProductToCart",
      "addToFavourite",
      "showLoginModal",
    ]),

    getProductDetailImage(obj) {
      if(obj.image) {
        return require(`@/assets/images/${obj.image}.jpg`)
      } else {
        return {
          icon:
            this.productImage.image &&
            require(`@/assets/images/${this.productImage.image}.jpg`),
      };
      }
    },

    getProductDetail() {
      let index = this?.product?.selectedProduct;
      if (index) {
        this.detailProduct = this.product.listProductDetail 
        && this.product.listProductDetail[index]
      } else {
        const productDetail = this.getProductById(this.product.id);
        this.detailProduct = productDetail && productDetail.listProductDetail 
        && productDetail.listProductDetail[productDetail.selectedProduct]
      }
    },

    incrementProduct(id) {
      this.count++;
      let data = {
        id: id,
        quantity: this.count,
      };
      this.changeQuantity(data);
    },

    decrementProduct(id) {
      if (this.count > 0) {
        this.count--;
        let data = {
          id: id,
          quantity: this.count,
        };
        this.changeQuantity(data);
      }
    },
    handleClickColor(index) {
      this.selectedProductByColor = this.product.listProductDetail[index];
    },
    classActive(index) {
      return {
        active: this.product.selectedProduct === index,
      };
    },

    addToCart(id) {
      let data = {
        id: id,
        status: true,
      };
      this.addProductToCart(id);
      this.changeAddedBtn(data);
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false,
      };
      this.$store.commit("removeFromCart", id);
      this.changeAddedBtn(data);
    },
    onSelectQuantity(id) {
      let data = {
        id: id,
        quantity: this.selected,
      };
      this.changeQuantity(data);
    },
    saveToFavorite(id) {
      let isUserLogged = this.userInfo.isLoggedIn;
      if (isUserLogged) {
        this.addToFavourite(id);
      } else {
        this.showLoginModal(true);
      }
    },

    getData() {
      this.product = this.getProductById(this.$route.params.id)
      this.selected = this.product.quantity;
      this.getProductDetail();
      for (let i = 1; i <= 20; i++) {
        this.quantityArray.push(i);
      }
    },
  },

  mounted() {
    this.getData();
  },
  components: {
    Header,
    Footer,
    LoginModal,
    RegistrationModal,
    CheckoutModal,
  }
};
</script>

<style scoped>
.card-content {
  padding: 15px 10px 15px 0;
}
.card-content__text {
  margin: 15px 0;
}
.card-content__reviews {
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
}
.saleoff-price {
  border: 2px solid orange;
  padding: 1px;
  margin-left: 2px;
}
.wrapper-color {
  display: inline-flex;
}
.list-color {
  text-align: center;
  border: 2px solid grey;
  margin-right: 30px;
}
.list-color:hover,
.list-color.active {
  border-color: #f57224;
}
.color-text {
  font-weight: 500;
}
.origin-price {
  padding: 10px 0 10px;
}
.btn_quantity {
  text-align: center;
  padding: 10px;
}
</style>