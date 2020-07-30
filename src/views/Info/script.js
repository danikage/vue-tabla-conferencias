import MyTitle from '@/components/MyTitle/index.vue'
import CardSimple from '@/components/CardSimple/index.vue'
import Expansible from '@/components/Expansible/index.vue'

export default {
	name: 'Info',
	components: {
		MyTitle,
		CardSimple,
		Expansible,
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
