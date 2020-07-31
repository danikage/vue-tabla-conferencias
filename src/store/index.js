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
		simulateResetCall(state, payload){
			state[payload.key] = payload.value
		}
	},
	actions: {
		async getSchedule({commit}){
			commit('simulateResetCall',{key:'schedule', value: []})
			dummyAxios.get('www.miweb.com/schedule')
				.then((res) => {
					commit('setSchedule',res)
				})
				.catch((error) => {
					// console.log(error)
				})
		},
		async getSpeakers({commit}){
			commit('simulateResetCall',{key:'speakers', value: []})
			dummyAxios.get('www.miweb.com/speakers')
				.then((res) => {
					commit('setSpeakers',res)
				})
				.catch((error) => {
					// console.log(error)
				})
		},
		async getSpeakerDetail({commit},speakerId){
			commit('simulateResetCall',{key:'speakerDetail', value: {}})
			dummyAxios.get(`www.miweb.com/speaker/detail/${speakerId}`)
				.then((res) => {
					commit('setSpeakerDetail',res)
				})
				.catch((error) => {
					// console.log(error)
				})
		},
	},
	modules: {
	}
})
