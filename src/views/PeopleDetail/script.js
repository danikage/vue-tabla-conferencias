import MyTitle from '@/components/MyTitle/index.vue'
import CardPersona from '@/components/CardPersona/index.vue'

export default {
	name: 'PeopleDetail',
	components: {
		MyTitle,
		CardPersona,
	},
	data: () => ({
		peopleId: null,
		sampleMyTitle:{
			title:'Detalles del ponente',
		},
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
