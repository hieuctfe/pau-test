<template>
	<section id="app">
		<vue-extend-layouts />
		<vue-progress-bar></vue-progress-bar>
	</section>
</template>
<script>
	import VueExtendLayouts from 'vue-extend-layout'
	export default {
		name: 'App',
		components: { VueExtendLayouts },
		created(){
			this.$router.beforeEach((to, from, next) => {
				if (to.meta.progress !== undefined) {
					let meta = to.meta.progress
					this.$Progress.parseMeta(meta)
				}
				this.$Progress.start()
				next()
			})
			this.$router.afterEach((to, from) => {
				this.$Progress.finish()
			})
			
		},
		mounted(){
			
		}
	}
</script>
<style lang="scss">

</style>
