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
		},
		linksFormated(){
			return this.links.map((link)=>{
				return {
					url: link.url,
					text: link.text,
					icon: require('@/assets/'+link.icon)
				}
			})
		},
	},
	methods: {
		hideMenu(){
			this.$store.commit('setMenuNav', false)
		},
		clickMenu(){
			this.$store.commit('setMenuNav', !this.showMenu)
		},
	}
}
