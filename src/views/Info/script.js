import MyTitle from '@/components/MyTitle/index.vue'
import CardSimple from '@/components/CardSimple/index.vue'

export default {
	name: 'Info',
	components: {
		MyTitle,
		CardSimple,
	},
	data: () => ({
		sampleMyTitle:{
			title:'Información',
		},
		md: 'md',
		lg: 'lg',
	}),
	computed: {
	},
	watch: {
	},
	created(){
	}
}
