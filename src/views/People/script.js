import MyTitle from '@/components/MyTitle/index.vue'
import MiniCard from '@/components/MiniCard/index.vue'

export default {
	name: 'People',
	components: {
		MyTitle,
		MiniCard
	},
	data: () => ({
		sampleMyTitle:{
			title:'Listado de Ponentes',
		},
	}),
	computed: {
		speakers(){
			return this.$store.state.speakers;
		},
	},
	watch: {
	},
	created(){
		this.$store.dispatch('getSpeakers');
	},
	methods: {
		goto(url){
			this.$router.push(url);
		},
	}
}
