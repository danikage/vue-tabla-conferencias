import MyTitle from '@/components/MyTitle/index.vue'
import MenuPestanas from '@/components/MenuPestanas/index.vue'
import TablaComponentes from '@/components/TablaComponentes/index.vue'

export default {
	name: 'Sessions',
	components: {
		MyTitle,
		TablaComponentes,
		MenuPestanas,
	},
	data: () => ({
		tabsHeaders: [],
		sampleMyTitle:{
			title:'Calendario de las sesiones',
		},
	}),
	computed: {
		schedule(){
			return this.$store.state.schedule;
		},
	},
	watch: {
		schedule: function(val){
			const that = this;
			if (val.length > 0){
				val.forEach((item)=>{
					that.tabsHeaders.push(item.day);
				});
			}
		},
	},
	created(){
		this.$store.dispatch('getSchedule');
	}
}
