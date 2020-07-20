export default {
	name: 'TablaComponentes',
	props: {
		header: {
			type: Array,
			default: function(){
				return []
			}
		},
		data: {
			type: Array,
			default: function(){
				return []
			}
		},
	},
	computed: {
		/*textoLargo(item){
			if (item.length > 5) {
				item = item.substr(0, 5) + '...' ;
			}
		}*/
	},
	methods: {
	}
}
