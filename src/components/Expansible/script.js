export default {
	name: 'Expansible',
	props: {
		button:{
			type: String,
			default: 'Mostrar/Ocultar'
		},
	},
	data: () => ({
		show: false
	}),
	methods: {
		toggle(){
			this.show = !this.show
		}
	}
}
