export default {
	name: 'MenuPestanas',
	template: '<slot v-for="dia in dias" :nombre="dia">{{ dia }}</slot>',
	props: {
		item:{
			type: Array
		}
	},
	data() {
		return {
			dia: ['lunes', 'martes']
		}
	},
	computed: {
	},
	methods: {
	}
}
