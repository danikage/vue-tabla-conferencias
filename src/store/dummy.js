export const dummyAxios = {
	schedule: [
		{
			day: 'viernes',
			headers: [
				'hora',
				'charla',
				'autor',
				'sala',
			],
			data: [
				[ '18:00', 'Presentación', 'Alan Brito', 'Sala Principal'],
				[ '19:00', 'What a Year of Learning and Teaching Accessibility Taught Me', 'Sara Soueidan', 'Sala Principal'],
				[ '19:00', 'doing it right', 'Brad Frost', 'Sala 1'],
				[ '20:00', 'Splitting Options', 'Hugo Giraudel', 'Sala 2'],
				[ '20:00', 'Learn how to use CSS grid', 'Jen Simmons', 'Sala 2'],
			]
		},
		{
			day: 'sábado',
			headers: [
				'hora',
				'charla',
				'autor',
				'sala',
			],
			data: [
				[ '18:00', 'How to Turn a Procreate Drawing into a Web Animation', 'Sarah Drasner', 'Sala Principal'],
				[ '19:00', 'React’s New Context API Explained', 'Wes bos', 'Sala Principal'],
				[ '19:00', 'doing it right', 'Jen Simmons', 'Sala 1'],
				[ '20:00', 'Accessible Icon Buttons', 'Sara Soueidan', 'Sala 2'],
				[ '20:00', 'what is a quick fix? – miscelanea', 'Brad Frost', 'Sala 2'],
			]
		},
		{
			day: 'domingo',
			headers: [
				'hora',
				'charla',
				'autor',
				'sala',
			],
			data: [
				[ '18:00', 'URL Management', 'Hugo Giraudel', 'Sala Principal'],
				[ '19:00', 'doing it right', 'Brad Frost', 'Sala Principal'],
				[ '19:00', 'SVG Filter Effects – Poster Image Effect with <feComponentTransfer>', 'Sara Soueidan', 'Sala 1'],
				[ '20:00', 'Important Behaviors of Aliases', 'Hugo Giraudel', 'Sala 2'],
				[ '20:00', 'A Dead Simple intro to Destructuring JavaScript Objects', 'Wes Bos', 'Sala 2'],
			]
		},
	],
	speakers:{
		id1: {
			img: 'https://image.flaticon.com/icons/svg/2741/2741163.svg',
			name: 'Sara Soueidan',
			description: 'UI/ingeniera de diseño, especialista en svg',
			rrss: [
				{
					name: 'Facebook',
					img: 'https://image.flaticon.com/icons/svg/733/733547.svg',
					url: 'https://es-es.facebook.com/',
				},
				{
					name: 'Twitter',
					img: 'https://image.flaticon.com/icons/svg/1409/1409937.svg',
					url: 'https://twitter.com/SaraSoueidan',
				},
				{
					name: 'Web',
					img: 'https://image.flaticon.com/icons/svg/174/174857.svg',
					url: 'https://www.sarasoueidan.com/',
				},
			]
		},
		id2: {
			img: 'https://image.flaticon.com/icons/svg/2741/2741163.svg',
			name: 'Brad Frost',
			description: 'Web designer, especialista en diseño atómico en css',
			rrss: [
				{
					name: 'Facebook',
					img: 'https://image.flaticon.com/icons/svg/733/733547.svg',
					url: 'https://es-es.facebook.com/',
				},
				{
					name: 'Twitter',
					img: 'https://image.flaticon.com/icons/svg/1409/1409937.svg',
					url: 'https://twitter.com/brad_frost',
				},
				{
					name: 'Web',
					img: 'https://image.flaticon.com/icons/svg/174/174857.svg',
					url: 'https://bradfrost.com/',
				},
			]
		},
		id3: {
			img: 'https://image.flaticon.com/icons/svg/2741/2741163.svg',
			name: 'Hugo “Kitty” Giraudel',
			description: 'Programador y especialista accesibilidad',
			rrss: [
				{
					name: 'Facebook',
					img: 'https://image.flaticon.com/icons/svg/733/733547.svg',
					url: 'https://es-es.facebook.com/',
				},
				{
					name: 'Twitter',
					img: 'https://image.flaticon.com/icons/svg/1409/1409937.svg',
					url: 'https://twitter.com/HugoGiraudel',
				},
				{
					name: 'Web',
					img: 'https://image.flaticon.com/icons/svg/174/174857.svg',
					url: 'https://hugogiraudel.com/',
				},
			]
		},
		id4: {
			img: 'https://image.flaticon.com/icons/svg/2741/2741163.svg',
			name: 'Jen Simmons',
			description: 'Diseñadora y desarrolladora web. Miembro de CSS Working Group',
			rrss: [
				{
					name: 'Facebook',
					img: 'https://image.flaticon.com/icons/svg/733/733547.svg',
					url: 'https://es-es.facebook.com/',
				},
				{
					name: 'Twitter',
					img: 'https://image.flaticon.com/icons/svg/1409/1409937.svg',
					url: 'https://twitter.com/jensimmons',
				},
				{
					name: 'Web',
					img: 'https://image.flaticon.com/icons/svg/174/174857.svg',
					url: 'https://jensimmons.com/',
				},
			]
		},
		id5: {
			img: 'https://image.flaticon.com/icons/svg/2741/2741163.svg',
			name: 'Sarah Drasner',
			description: 'Diseñadora y programadora. Especialista en maquetaciones y ha trabajado en el desarrollo de vue',
			rrss: [
				{
					name: 'Facebook',
					img: 'https://image.flaticon.com/icons/svg/733/733547.svg',
					url: 'https://es-es.facebook.com/',
				},
				{
					name: 'Twitter',
					img: 'https://image.flaticon.com/icons/svg/1409/1409937.svg',
					url: 'https://twitter.com/sarah_edo',
				},
				{
					name: 'Web',
					img: 'https://image.flaticon.com/icons/svg/174/174857.svg',
					url: 'https://sarah.dev/',
				},
			]
		},
		id6: {
			img: 'https://image.flaticon.com/icons/svg/2741/2741163.svg',
			name: 'Wes Bos',
			description: 'Fullstack web, un gran programador',
			rrss: [
				{
					name: 'Facebook',
					img: 'https://image.flaticon.com/icons/svg/733/733547.svg',
					url: 'https://es-es.facebook.com/',
				},
				{
					name: 'Twitter',
					img: 'https://image.flaticon.com/icons/svg/1409/1409937.svg',
					url: 'https://twitter.com/wesbos',
				},
				{
					name: 'Web',
					img: 'https://image.flaticon.com/icons/svg/174/174857.svg',
					url: 'https://wesbos.com/',
				},
			]
		},
	},
	get(url){
		if (url == 'www.miweb.com/schedule'){
			return this.getSchedule();
		} else if (url == 'www.miweb.com/speakers'){
			return this.getSpeakers();
		} else if (url.includes('www.miweb.com/speaker/detail/')){
			return this.getSpeakerDetail(url.replace('www.miweb.com/speaker/detail/', ''));
		}
	},
	// getDelay(){
	// 	return new Promise(function(resolve, reject) {
	// 		let random = Math.floor(Math.random() * 10)
	// 		setTimeout(function(){
	// 			if (random > 1){
	// 				resolve('work')
	// 			} else {
	// 				reject('error')
	// 			}
	// 		}, 150)
	// 	})
	// },
	getSchedule(){
		const that = this
		return new Promise(function(resolve, reject) {
			if (that != undefined){
				resolve(that.schedule)
			} else {
				reject('error')
			}
		})
	},
	getSpeakers(){
		const that = this
		let list = []
		Object.keys(this.speakers).forEach((speakerId)=>{
			list.push({
				id: speakerId,
				name: that.speakers[speakerId].name
			})
		})
		return new Promise(function(resolve, reject) {
			if (list != undefined){
				resolve(list)
			} else {
				reject('error')
			}
		})
	},
	getSpeakerDetail(speakerId){
		const that = this
		return new Promise(function(resolve, reject) {
			if (that != undefined){
				resolve(that.speakers[speakerId])
			} else {
				reject('error')
			}
		})
	},
}