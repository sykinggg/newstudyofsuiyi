<template>
    <div>
        <p>第一个组件</p>
        <p>show: {{show}}</p>
        <p>text: {{text}}</p>
    </div>
</template>

<script>
	export default {
		props: ['show', 'text'],
		data () {
			return {

			}
		},
		computed: {

		},
		mounted () {

		},
		methods:{

		}
	};
</script>

<style scoped>

</style>