import MenuPestanas from '@/components/MenuPestanas/index.vue'
import MiniCard from '@/components/MiniCard/index.vue'
import CardPersona from '@/components/CardPersona/index.vue'

export default {
	name: 'Test',
	components: {
		MenuPestanas,
		MiniCard,
		CardPersona
	},
	data: () => ({
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
		}
	}),
}