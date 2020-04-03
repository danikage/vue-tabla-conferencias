
import TablaComponentes from '@/components/TablaComponentes/index.vue'
import MenuPestanas from '@/components/MenuPestanas/index.vue'
import MiniCard from '@/components/MiniCard/index.vue'

export default {
	name: 'Test',
	components: {
		TablaComponentes,
		MenuPestanas,
		MiniCard
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
	}),
}
