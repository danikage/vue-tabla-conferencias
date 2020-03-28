import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		menuNav: {
			display: false,
		}
	},
	mutations: {
		setMenuNav(state, payload){
			state.menuNav.display = payload
		},
	},
	actions: {
	},
	modules: {
	}
})
