
import TablaComponentes from '@/components/TablaComponentes/index.vue'
import MenuPestanas from '@/components/MenuPestanas/index.vue'
import MiniCard from '@/components/MiniCard/index.vue'
import CardPersona from '@/components/CardPersona/index.vue'

export default {
	name: 'Test',
	components: {
		TablaComponentes,
		MenuPestanas,
		MiniCard,
		CardPersona,
	},
	// Props para el ejemplo 2 de las propiedades computadas:
	// props: {
	// 	metros: {
	// 		type: Number,
	// 		default: 0
	// 	}
	// },
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
		// el store aquí no funciona
		// schedule: this.$store.state.schedule,
	}),
	computed: {
		// Creo que no habíamos visto, las propiedades computadas
		// las hay de dos tipos:
		// -las que toman los valores de store o algún otro valor extraño (no me meto en cuáles)
		schedule(){
			return this.$store.state.schedule;
		},
		speakers(){
			return this.$store.state.speakers;
		},
		speakerDetail(){
			return this.$store.state.speakerDetail;
		},
		// -las que modifican alguno de los datos
		// -Por ejemplo, si se toman en las props los metros de algo, se convierten automáticamente en millas.
		// Y así se disponen en el template de dos variables, "metros" y "millas"
		// millas(){
		// 		return this.metros * 0.000621371;
		// }
	},
	created(){
		this.$store.dispatch('getSchedule');
		this.$store.dispatch('getSpeakers');
		this.$store.dispatch('getSpeakerDetail', 'id1');

		// El store aquí funciona pero no sería reactivo, que es lo que se busca siempre con vue (reactivo, es que el resultado que se imprime cambia áutomáticamente si se cambia su valor)
		// this.schedule = this.$store.state.schedule,
	}
}
