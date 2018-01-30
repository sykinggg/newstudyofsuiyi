<template>
    <div>
        <Card style="margin-top: 15px;">
            <p slot="title">事件处理</p>
            <button v-on:click="counter += 1">Add 1</button>
            <p>The button above has been clicked {{ counter }} times.</p>
            <h3>事件处理方法</h3>
            <button v-on:click="greet">greet</button>
            <h3>内联处理器中的方法</h3>
            <button v-on:click="say('aa')">aa</button>
            <button v-on:click="say('bb')">bb</button>
            <button v-on:click="warn('asd', $event)">warn</button>
            <h3>事件修饰符</h3>

        </Card>
    </div>
</template>

<script>
	export default {
		name: 'functionComponent',
        data() {
			return {
				counter: 0,
                name: 'vue.js'
            }
        },
        methods: {
			greet: function(event) {
				console.log(this.name);
                if(event) {
					console.log(event.target.tagName);
                }
            },
			say: function(name) {
				console.log(name);
            },
			warn: function(name, event) {
				console.log(name);
				console.log(event);
            }
        }
	};
</script>

<style scoped>

</style>