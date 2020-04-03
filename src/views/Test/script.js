
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
	}),
}
