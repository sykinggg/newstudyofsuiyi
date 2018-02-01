<template>
    <div>
        <p>第七个组件</p>
        <input type="text" v-bind:value="value" v-on:input="updateValue($event.target.value)">
    </div>
</template>

<script>
	export default {
		name: 'component7',
		props: ['value'],
		methods: {
			// 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
			updateValue: function (value) {
				var formattedValue = value
				// 删除两侧的空格符
				.trim()
				// 保留 2 位小数
				.slice(
					0,
					value.indexOf('.') === -1
						? value.length
						: value.indexOf('.') + 3
				);
				// 如果值尚不合规，则手动覆盖为合规的值
				if (formattedValue !== value) {
					this.$refs.input.value = formattedValue;
				}
				// 通过 input 事件带出数值
				this.$emit('input', Number(formattedValue));
			}
		},
        data() {
			return {
				someChildProperty: 'someChildProperty'
            }
        }
	};
</script>

<style scoped>

</style>