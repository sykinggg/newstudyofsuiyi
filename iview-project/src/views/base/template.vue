<template>
    <div>
        <Card style="margin-top: 15px;">
            <p slot="title">模版语法</p>
            <ul>
                <li>{{msg}}</li>
                <li v-html="msgHtml"></li>
                <li v-bind:id="bindId">v-bind:id</li>
                <li :id="bindId">:id</li>
                <li v-bind:disabled="showFalse">showFalse</li>
                <li v-bind:disabled="showTrue">showTrue</li>
                <li>{{showTrue?'showTrue':'showFalse'}}</li>
                <li>{{showFalse?'showTrue':'showFalse'}}</li>
                <li v-if="showTrue">v-if showTrue</li>
                <li v-if="showFalse">v-if showFalse</li>
                <li v-on:click="onClick">v-on click</li>
                <li @click="onClick">@click</li>
                <li v-on:submit.prevent="onSumbit"></li>
            </ul>
        </Card>
    </div>
</template>

<script>
	export default {
		name: 'bTemplate',
		data() {
			return {
				msg: 'msg',
				msgHtml: '<span>msgHtml</span>',
				bindId: 'bindId',
				showFalse: false,
				showTrue: true
			};
		},
		mounted() {
		},
		methods: {
			onClick() {
				console.log('onClick');
			},
            onSumbit: {
				prevent() {
					console.log('onSumbit');
                }
            }
		}
	};
</script>

<style scoped>

</style>