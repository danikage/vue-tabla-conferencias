export default {
	name: 'CardPersona',
	props: {
		img:{
			type: String,
			default: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
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
		}
	},
	data() {
		return {
			rrss: []
		}
	},
	computed: {
	},
	methods: {
	}
}
