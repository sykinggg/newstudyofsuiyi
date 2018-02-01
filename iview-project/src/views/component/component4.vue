<template>
    <div>
        <p>第四个组件</p>
        <p>{{message}}</p>
    </div>
</template>

<script>
	export default {
		name: 'component4',
        props: ['message']
	};
</script>

<style scoped>

</style>