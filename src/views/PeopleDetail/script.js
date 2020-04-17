import CardPersona from '@/components/CardPersona/index.vue'

export default {
	name: 'PeopleDetail',
	components: {
		CardPersona,
	},
	data: () => ({
		peopleId: null,
	}),
	computed: {
		speakerDetail(){
			return this.$store.state.speakerDetail;
		},
	},
	created(){
		this.peopleId = this.$route.params.peopleId;
		this.$store.dispatch('getSpeakerDetail', this.peopleId);
	}
}
