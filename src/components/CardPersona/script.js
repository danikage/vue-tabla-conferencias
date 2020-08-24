export default {
	name: 'CardPersona',
	props: {
		img:{
			type: String,
			default: ''
		},
		name:{
			type: String,
			default: 'Name'
		},
		description:{
			type: String,
			default: 'Lorem Ipsum'
		},
		rrss: {
			type: Array,
			default: function(){
				return []
			}
		},
		type:{
			type: [String, Number],
			default: '1'
		},
	},
	data: () => ({
		image: '',
		image_default: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
	}),
	created() {
		this.image = this.img != '' ? require('@/assets/'+this.img) : this.image_default
	},
	methods:{
		getColor(digit){
			return 'card-persona--type-' + digit
		}
	},
}
