<template>
    <div>
        <p>第二个组件</p>
        <p>show: {{show}}</p>
        <p>text: {{text}}</p>
    </div>
</template>

<script>
	export default {
		name: 'component2',
        props: ['show', 'text']
	};
</script>

<style scoped>

</style>