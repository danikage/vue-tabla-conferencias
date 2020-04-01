export default {
	name: 'MenuPestanas',
	// template: '<slot v-for="dia in dias" :nombre="dia">{{ dia }}</slot>',
	props: {
		item:{
			type: Array
		}
		// headers: ....lo que sea
	},
	data() {
		return {
			nombrefeoclaseactiva1: '',
			nombrefeoclaseactiva2: '',
			nombrefeoclaseactiva3: '',
			dia: ['lunes', 'martes']
		}
	},
	computed: {
	},
	methods: {
		funcionconnombrefeo(tabClicked){
			console.log('fe')
			// para no pensar, primero reseteo las clases
			this.nombrefeoclaseactiva1 = '';
			this.nombrefeoclaseactiva2 = '';
			this.nombrefeoclaseactiva3 = '';

			// y activo la que debería:
			if(tabClicked == 1){
				this.nombrefeoclaseactiva1 = 'menu-pestanas__nombre-feo--active';
			} else if(tabClicked == 2){
				this.nombrefeoclaseactiva2 = 'menu-pestanas__nombre-feo--active';
			} else {
				this.nombrefeoclaseactiva3 = 'menu-pestanas__nombre-feo--active';
			}
		}
	}
}
