<template>
	<div>
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-brand"></div>
		</nav>
		<div class="navbar-end is-hidden-mobile">
			<Menu></Menu>
		</div>
	</div>
</template>

<script>
	import Menu from './Menu.vue';
	export default {
		name: 'Header',
		data() {
			return {};
		},
		components: {
			Menu,
		},
		computed: {},
		methods: {},
	};
</script>

<style scoped></style>
