<template lang="pug">
	#app
		MenuNav(:links="links")
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
			links: [
				{
					url: '/',
					text: 'Test',
					icon: 'games'
				},
				{
					url: '/home',
					text: 'Home',
					icon: 'home'
				},
				{
					url: '/about',
					text: 'About',
					icon: 'info'
				},
				{
					url: '/sessions',
					text: 'Horarios',
					icon: 'calendar_today'
				},
				{
					url: '/location',
					text: 'Localización',
					icon: 'location_on'
				},
			],
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
