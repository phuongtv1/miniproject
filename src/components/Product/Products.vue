<template>
	<div>
		<div class="card-image">
			<figure class="image is-4by3">
				<img alt="Placeholder image"
          :src="require(`@/assets/images/${product.image}.jpg`)"
        />
			</figure>
		</div>
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">{{ product.title }}</p>
				</div>
				<div>
					<button class="button is-small">
						<span class="icon is-small">
							<i class="fa fa-heart"></i>
						</span>
					</button>
					<button class="button is-small">
						<span class="icon is-small">
							<i class="fa fa-heart-o"></i>
						</span>
					</button>
				</div>
			</div>
			<div class="content is-clearfix">
				<p>{{ product.description }}</p>
				<div class="is-pulled-left">
					<p>
						{{ product.reviews > 0 ? `${product.reviews} Reviews` : 'No reviews' }}
					</p>
				</div>
				<p class="is-pulled-right">
					<!-- <span class="title is-4"><strong>{{ product.price }}</strong></span> -->
					<span class="title is-4"
						><strong>{{ formatPrice }}</strong></span
					>
				</p>
			</div>
			<div class="card-footer btn-actions">
				<div class="card-footer-item field is-grouped">
					<div class="buttons">
						<button class="button is-primary" v-if="!product.isAddedToCart">
							{{ addToCartLabel }}
						</button>
						<button class="button is-text" v-if="product.isAddedToCart">
							{{ removeFromCartLabel }}
						</button>
					</div>
					<div class="select is-rounded is-small">
						<select @change="onSelectQuantity(product.id)" v-model="selected">
							<option v-for="quantity in quantityArray" :value="quantity" :key="quantity.id">
								{{ quantity }}
							</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<router-link
			class="details"
			:to="{
				name: 'product_detail-id',
				params: {
					id: product.id,
					title: product.title,
					price: product.price,
					rating: product.ratings,
					reviews: product.reviews,
					isAddedBtn: product.isAddedBtn,
				},
			}"
		>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'products',
		props: ['product'],
		data() {
			return {
				addToCartLabel: 'Add to cart',
				viewDetailsLabel: 'Details',
				removeFromCartLabel: 'Remove from cart',
				addToFavouriteLabel: 'Add to favourite',
				removeFromFavouriteLabel: 'Remove from favourite',
				selected: 1,
				quantityArray: [],
			};
		},
		mounted() {},
		computed: {
			formatPrice() {
				if (this?.product?.price) {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'VND',
					}).format(this.product.price);
				} else {
					return 'vnd';
				}
			},
		},
		methods: {},
	};
</script>
<style scoped>
	.details {
		cursor: pointer;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	.details:hover {
		border: 1px solid #51bafc;
	}
	.button,
	.select {
		z-index: 2;
	}
	.select {
		position: absolute;
		right: 15px;
		bottom: 35px;
	}
	.card-content {
		padding: 0;
	}
	.buttons {
		margin: 0;
	}
</style>
