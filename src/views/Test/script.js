import HelloWorld from '@/components/HelloWorld.vue'
import TablaComponentes from '@/components/TablaComponentes/index.vue'

export default {
	name: 'Test',
	components: { 
		HelloWorld,
		TablaComponentes,
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
		}
	}),
}
