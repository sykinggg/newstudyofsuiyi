<template>
    <div>
        <Card style="margin-top: 15px;">
            <p slot="title">表单输入绑定</p>
            <h4>文本</h4>
            <input type="text" v-model="message">
            <p>message is: {{message}}</p>
            <h4>多行文本</h4>
            <textarea v-model="areaMessage" placeholder="add multips lines" cols="30" rows="10"></textarea>
            <p style="white-space: pre-line;">{{areaMessage}}</p>
            <h4>复选框</h4>
            <label>
                <input type="checkbox" v-model="checkboxData">
                {{checkboxData}}
            </label>
            <div>
                <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                <label for="jack">Jack</label>
                <input type="checkbox" id="john" value="John" v-model="checkedNames">
                <label for="john">John</label>
                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                <label for="mike">Mike</label>
                <br>
                <span>Checked names: {{ checkedNames }}</span>
            </div>
            <h4>单选按钮</h4>
            <div>
                <input type="radio" id="one" value="One" v-model="picked">
                <label for="one">One</label>
                <br>
                <input type="radio" id="two" value="Two" v-model="picked">
                <label for="two">Two</label>
                <br>
                <span>Picked: {{ picked }}</span>
            </div>
            <h4>选择框</h4>
            <h5>单选</h5>
            <div>
                <select v-model="selected">
                    <option disabled value="">请选择</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <span>Selected: {{ selected }}</span>
            </div>
            <h5>多选</h5>
            <div>
                <select v-model="selectedArr" multiple style="width: 50px;">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <br>
                <span>Selected: {{ selectedArr }}</span>
            </div>
            <h5>v-for 渲染</h5>
            <div>
                <select v-model="selectedFor">
                    <option v-for="option in options" v-bind:value="option.value">
                        {{ option.text }}
                    </option>
                </select>
                <span>Selected: {{ selectedFor }}</span>
            </div>
            <h4>值绑定-绑定到String类型的值</h4>
            <h4>修饰符</h4>
            <h5>.lazy</h5>
            <p>v-model 在每次 input 事件触发后将输入框的值与数据进行同步 </p>
            <p>添加 lazy 修饰符，从而转变为使用 change 事件进行同步</p>
            <input type="text" v-model.lazy="modelLazy">
            <p>{{modelLazy}}</p>
            <h5>.number</h5>
            <p>将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符</p>
            <input type="number" v-model.number="modelNumber">
            <h5>.trim</h5>
            <p>自动过滤用户输入的首尾空白字符</p>
            <input type="text" v-model.trim="modelTrim">
            <p>{{modelTrim}}</p>
        </Card>
    </div>
</template>

<script>
	export default {
		name: 'formComponent',
		data() {
			return {
				message: '11',
				areaMessage: '',
				checkboxData: false,
				checkedNames: [],
				picked: 'one',
				selected: 'A',
				selectedArr: ['A'],
				selectedFor: 'A',
				options: [
					{ text: 'One', value: 'A' },
					{ text: 'Two', value: 'B' },
					{ text: 'Three', value: 'C' }
				],
				modelLazy: '',
				modelNumber: 'aa',
				modelTrim: '   aaa   aaa   '
			};
		}
	};
</script>

<style scoped>

</style>