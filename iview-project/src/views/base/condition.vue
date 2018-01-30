<template>
    <div>
        <Card style="margin-top: 15px;">
            <p slot="title">条件渲染</p>
            <p v-if="ok">{{ok}}</p>
            <p v-else>no</p>
            <p v-if="!ok">{{ok}}</p>
            <p v-else>no</p>
            <p v-if="type == 'a'">a</p>
            <p v-else-if="type == 'b'">b</p>
            <p v-else-if="type == 'c'">c</p>
            <p v-else>d</p>
            <p slot="title">用key管理可复用的元素</p>
            <template v-if="loginType === 'username'">
                <label>Username</label>
                <input placeholder="Enter your username" v-model="userName">
            </template>
            <template v-else>
                <label>Email</label>
                <input placeholder="Enter your email address" v-model="emil">
            </template>
            <button v-on:click="toggle()">toggle</button>
            <p slot="title">v-if和v-for</p>
            <p>当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级</p>
        </Card>
    </div>
</template>

<script>
	export default {
		name: 'condition',
		data() {
			return {
				ok: true,
				loginType: 'username',
				userName: '',
				emil: '',
				type: 'b'
			};
		},
		methods: {
			toggle() {
				if (this.loginType == 'username') {
					this.loginType = 'email';
				} else {
					this.loginType = 'username';
				}
			}
		}
	};
</script>

<style scoped>

</style>