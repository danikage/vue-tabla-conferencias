export default {
	name: 'MiniCard',
	props: {
		img:{
			type: String,
			default: ''
		},
		name:{
			type: String,
			default: 'Name'
		},
		type:{			// dado que el estilo será el mismo para la img como el subrayado, se puede agrupar
			type: [String, Number],
			default: '1'
		},
		gradient:{		// sobra
			type: String,
		},
		underline:{		// sobra
			type: String,
		},
	},
	data: () => ({
		image: '',
		image_default: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
	}),
	created() {
		this.image = this.img != '' ? require('@/assets/'+this.img) : this.image_default
	},
	methods:{
		getColor(digit){
			if(digit > 2){		// este if sobra, lo he puesto para que se puedan ver los estilos editados, borrar
				return 'mini-card--type-2'
			} else {			// este if sobra, lo he puesto para que se puedan ver los estilos editados, borrar
				return 'mini-card--type-' + digit
			}
			// return 'mini-card--type-' + digit		// este return es el que se necesita, descomenta cuando lo veas (y borra el comentario)
		}
	}
}
