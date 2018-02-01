<template>
    <button v-on:click="counter += 1">{{counter}}</button>
</template>

<script>
	export default {
		name: 'component3',
        data() {
			return {
				counter: 0
            }
        }
	};
</script>

<style scoped>

</style>