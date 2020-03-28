export default {
	name: 'MenuNav',
	computed: {
		showMenu(){
			return this.$store.state.menuNav.display
		}
	},
	methods: {
		hideMenu(){
			this.$store.commit('setMenuNav', false)
		}
	}
}
