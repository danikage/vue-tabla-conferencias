<template lang="pug">
	#app
		MenuNav(:links="links")
		main
			router-view
</template>

<script>
	import MenuNav from '@/components/MenuNav';

	export default {
		name: 'App',
		components: {
			MenuNav,
		},
		data: () => ({
			links: [
				{
					url: '/',
					text: 'Horarios',
					icon: 'icono_calendario.png'
				},
				{
					url: '/people',
					text: 'Ponentes',
					icon: 'icono_ponentes.png'
				},
				{
					url: '/location',
					text: 'Localización',
					icon: 'icono_localizacion.png'
				},
				{
					url: '/info',
					text: 'Información',
					icon: 'icono_informacion.png'
				},
			],
		}),
	};
</script>

<style lang="stylus" src="@/styles/main.styl">
</style>
