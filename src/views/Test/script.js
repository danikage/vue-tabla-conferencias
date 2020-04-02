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
			// img: '',		//Por hacer
			// name: '',
			// description
			// rrss
			nombrefeo: [
				{
					name: 'Facebook',
					img: 'https://image.flaticon.com/icons/svg/733/733547.svg',
					url: 'https://github.com/webpack/webpack/issues/7126',
				},
				{
					name: 'Twitter',
					img: 'https://image.flaticon.com/icons/svg/1409/1409937.svg',
					url: 'https://www.google.es/',
				},
				{
					name: 'Linkedin',
					img: 'https://image.flaticon.com/icons/svg/174/174857.svg',
					url: '#',
				},
			]
		}
	}),
}