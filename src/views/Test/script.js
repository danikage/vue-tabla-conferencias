import MenuPestanas from '@/components/MenuPestanas/index.vue'
import MiniCard from '@/components/MiniCard/index.vue'

export default {
	name: 'Test',
	components: {
		MenuPestanas,
		MiniCard
	},
	data: () => ({
		sampleMenuPestanas:{
			item: ['item1','item2','item3']
		},
		sampleMiniCard:{
			name: 'Pepito'
		}
	}),
}
