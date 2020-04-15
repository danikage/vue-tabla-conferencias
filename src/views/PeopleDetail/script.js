export default {
	name: 'PeopleDetail',
	components: {
	},
	data: () => ({
		peopleId: null,
	}),
	computed: {
	},
	created(){
		this.peopleId = this.$route.params.peopleId;
	}
}
