export default {
	name: 'MenuPestanas',
	props: {
		item:{
			type: Array
		}
		// headers: ....lo que sea
	},
	data() {
		return {
			blockActive1: '',
			blockActive2: '',
			blockActive3: ''
		}
	},
	computed: {
	},
	methods: {
		changeText(tabClicked){
			console.log('fe')
			// para no pensar, primero reseteo las clases
			this.blockActive1 = '';
			this.blockActive2 = '';
			this.blockActive3 = '';

			// y activo la que debería:
			if(tabClicked == 1){
				this.blockActive1 = 'menu-pestanas__slots-block--active';
			} else if(tabClicked == 2){
				this.blockActive2 = 'menu-pestanas__slots-block--active';
			} else {
				this.blockActive3 = 'menu-pestanas__slots-block--active';
			}
		}
	}
}
