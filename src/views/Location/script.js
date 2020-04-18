import MyTitle from '@/components/MyTitle/index.vue'
import ResumenDireccion from '@/components/ResumenDireccion/index.vue'
import Map from '@/components/Map/index.vue'

export default {
	name: 'Location',
	components: {
		MyTitle,
		ResumenDireccion,
		Map,
	},
	data: () => ({
		sampleMyTitle:{
			title:'Localización',
		},
		sampleAddress:{
			name: 'Ifema - Recinto Ferial de Madrid',
			address: 'Av. del Partenón, 5, 28042 Madrid'
		},
		sampleMap:{
			mapConfig: {
				center: {lat: 40.4674389, lng: -3.6168937},
				zoom: 14
			},
			apiKey: '',
		},
	}),
	computed: {
	},
	watch: {
	},
	created(){
	}
}
