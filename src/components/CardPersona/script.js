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
		facebook:{
			type: String,
			default: 'https://image.flaticon.com/icons/svg/733/733547.svg'
		},
		twitter:{
			type: String,
			default: 'https://image.flaticon.com/icons/svg/1409/1409937.svg'
		},
		linkedin:{
			type: String,
			default: 'https://image.flaticon.com/icons/svg/174/174857.svg'
		},
		rrss: {
			type: Object
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
