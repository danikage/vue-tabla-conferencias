
import TablaComponentes from '@/components/TablaComponentes/index.vue'
import MenuPestanas from '@/components/MenuPestanas/index.vue'
import MiniCard from '@/components/MiniCard/index.vue'
import CardPersona from '@/components/CardPersona/index.vue'
import ResumenDireccion from '@/components/ResumenDireccion/index.vue'
import Map from '@/components/Map/index.vue'

export default {
	name: 'Test',
	components: {
		TablaComponentes,
		MenuPestanas,
		MiniCard,
		CardPersona,
		ResumenDireccion,
		Map,
	},
	data: () => ({
		sampleTablaComponentes:{
			header: ['title1','title2','title3'],
			data: [
				[1,'palabra_muy_larga_para_testear_el_scroll_cuando_se_desborda',3],
				[1,'texto',3],
				[4,4,4],
				[5,8,7]
			]
		},
		sampleMenuPestanas:{
			item: ['item1','item2','item3']
		},
		sampleMiniCard:{
			name: 'Pepito',
		},
		sampleCardPersona:{
			img: 'https://image.flaticon.com/icons/svg/2741/2741163.svg',
			name: 'Mariola',
			description: 'Enfermera luchando actualmente contra el Covid-19',
			rrss: [
				{
					name: 'Facebook',
					img: 'https://image.flaticon.com/icons/svg/733/733547.svg',
					url: 'https://es-es.facebook.com/',
				},
				{
					name: 'Twitter',
					img: 'https://image.flaticon.com/icons/svg/1409/1409937.svg',
					url: 'https://twitter.com/',
				},
				{
					name: 'Linkedin',
					img: 'https://image.flaticon.com/icons/svg/174/174857.svg',
					url: 'https://www.linkedin.com/',
				},
			]
		},
		sampleResumenDireccion:{
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
		schedule(){
			return this.$store.state.schedule;
		},
		speakers(){
			return this.$store.state.speakers;
		},
		speakerDetail(){
			return this.$store.state.speakerDetail;
		},
	},
	created(){
		this.$store.dispatch('getSchedule');
		this.$store.dispatch('getSpeakers');
		this.$store.dispatch('getSpeakerDetail', 'id1');
	}
}
