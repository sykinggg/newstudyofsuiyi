<template>
    <div>
        <Card style="margin-top: 15px;">
            <p slot="title">组件概念</p>
            <component1 :show="show" :text="text"></component1>
            <component2 :show="show" :text="text"></component2>
            <p>第三个组件</p>
            <component3></component3>
            <component3></component3>
            <component3></component3>
            <component4 :message="message"></component4>
            <input type="text" v-model="message">
            <p>第五个组件</p>
            <span></span>
            <component5 @increment="increment"></component5>
            <component5 @increment="increment"></component5>
            <p>{{total}}</p>
            <component6 :syncMessageText="syncMessage" @syncMessage="syncChange"></component6>
            <p>{{syncMessage}}</p>
            <component7 v-model="component7Value"></component7>
            <h3>编译作用域</h3>
            <p>父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译</p>
            <component8>
                {{message}}
            </component8>
            <ul>
                <li>Prop 允许外部环境传递数据给组件</li>
                <li>事件允许从组件内触发外部环境的副作用</li>
                <li>插槽允许外部环境将额外的内容组合在组件中</li>
            </ul>
            <h4>异步组件</h4>
            <a href="https://cn.vuejs.org/v2/guide/components.html">api</a>
        </Card>
    </div>
</template>

<script>
	import component1 from '../component/component1';
	import component2 from '../component/component2';
	import component3 from '../component/component3';
	import component4 from '../component/component4';
	import component5 from '../component/component5';
	import component6 from '../component/component6';
	import component7 from '../component/component7';
	import component8 from '../component/component8';

	export default {
		components: {
			component1: component1,
			component2: component2,
			component3: component3,
			component4: component4,
			component5: component5,
            component6: component6,
            component7: component7,
            component8: component8
		},
		name: 'component-vue',
		data() {
			return {
				show: {
					a: 'aaa'
				},
				text: 'text',
				counter: 10,
				message: 'message',
				total: 0,
				syncMessage: 'syncMessage',
				component7Value: 0
			};
		},
		methods: {
			increment: function (value, value1) {
				this.total += 1;
				console.log(value);
				console.log(value1);
				// console.log(this);
				// console.log(this.counter);
			},
			syncChange(value) {
				this.syncMessage = value;
            }
		}
	};
</script>

<style scoped>

</style>