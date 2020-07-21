export default {
	name: 'MenuPestanas',
	props: {
		item:{
			type: Array,
			defualt: function(){
				return []
			}
		},
	},
	data: () => ({
		blockActive1: 'menu-pestanas__slots-block--active',
		blockActive2: '',
		blockActive3: '',
		itemActive1: 'menu-pestanas__item--active',
		itemActive2: '',
		itemActive3: ''
	}),
	methods: {
		changeText(tabClicked){
			this.blockActive1 = '';
			this.blockActive2 = '';
			this.blockActive3 = '';
			this.itemActive1 = '';
			this.itemActive2 = '';
			this.itemActive3 = '';

			if(tabClicked == 1){
				this.itemActive1 = 'menu-pestanas__item--active';
				this.blockActive1 = 'menu-pestanas__slots-block--active';
			} else if(tabClicked == 2){
				this.itemActive2 = 'menu-pestanas__item--active';
				this.blockActive2 = 'menu-pestanas__slots-block--active';
			} else {
				this.itemActive3 = 'menu-pestanas__item--active';
				this.blockActive3 = 'menu-pestanas__slots-block--active';
			}
		}
	}
}
