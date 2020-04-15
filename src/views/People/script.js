import MiniCard from '@/components/MiniCard/index.vue'

export default {
	name: 'People',
	components: {
		MiniCard
	},
	data: () => ({
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
	}
}
