export default {
	name: 'MenuNav',
	props: {
		links: {
			type: Array,
			default: function(){
				return []
			}
		}
	},
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
