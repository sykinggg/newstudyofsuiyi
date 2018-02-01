<template>
    <!--<p>第5个组件</p>-->
    <button @click="incrementCounter">{{counter}}</button>
</template>

<script>
	export default {
		name: 'component5',
		methods: {
			incrementCounter: function () {
				this.counter += 1;
				this.$emit('increment', this.counter, 11);
			}
		},
		data() {
			return {
				counter: 1
			};
		}
	};
</script>

<style scoped>

</style>