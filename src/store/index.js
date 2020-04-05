import Vue from 'vue'
import Vuex from 'vuex'
import { dummyAxios } from '@/store/dummy.js'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		menuNav: {
			display: false,
		},
		schedule: [],
		speakers: [],
		speakerDetail: {},
	},
	mutations: {
		setMenuNav(state, payload){
			state.menuNav.display = payload
		},
		setSchedule(state, payload){
			state.schedule = payload
		},
		setSpeakers(state, payload){
			state.speakers = payload
		},
		setSpeakerDetail(state, payload){
			state.speakerDetail = payload
		},
	},
	actions: {
		async getSchedule({commit}){
			dummyAxios.get('www.miweb.com/schedule')
				.then((res) => {
					commit('setSchedule',res)
				})
				.catch((error) => {
					console.log(error)
				})
		},
		async getSpeakers({commit}){
			dummyAxios.get('www.miweb.com/speakers')
				.then((res) => {
					commit('setSpeakers',res)
				})
				.catch((error) => {
					console.log(error)
				})
		},
		async getSpeakerDetail({commit},speakerId){
			dummyAxios.get(`www.miweb.com/speaker/detail/${speakerId}`)
				.then((res) => {
					commit('setSpeakerDetail',res)
				})
				.catch((error) => {
					console.log(error)
				})
		},
	},
	modules: {
	}
})
