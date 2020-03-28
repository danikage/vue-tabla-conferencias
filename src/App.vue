<template lang="pug">
	#app
		MenuNav
		main
			button(@click="clickMenu") menu
			router-view
</template>

<script>
	import MenuNav from '@/components/MenuNav';

	export default {
		name: 'App',
		components: {
			MenuNav
		},
		data: () => ({
			showMenu: false,
		}),
		methods: {
			clickMenu(){
				this.showMenu = true
				this.$store.commit('setMenuNav', this.showMenu)
			},
		}
	};
</script>

<style lang="stylus" src="@/styles/main.styl">
</style>
