<template>
    <div>
        <p>第六个组件 双向绑定</p>
        <input type="text" v-model="syncMessage">
    </div>
</template>

<script>
	export default {
		name: 'component6',
        props: ['syncMessageText'],
        data() {
			return {
				syncMessage: ''
            }
        },
		mounted() {
            this.syncMessage = this.syncMessageText;
        },
        methods: {
            // syncChange() {
				// this.$emit('syncMessage', this.syncMessage);
            //     console.log(this.syncMessage);
            // }
        },
        watch: {
			syncMessage(newVal, oldVal) {
				this.$emit('syncMessage', this.syncMessage);
            }
        }
	};
</script>

<style scoped>

</style>