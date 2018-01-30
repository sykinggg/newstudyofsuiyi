<template>
    <div>
        <Card style="margin-top: 15px;">
            <p slot="title">计算属性和观察者</p>
            <ul>
                <li v-for="item in items">
                    item:{{item}}
                </li>
            </ul>
            <ul>
                <li v-for="(item, idx) in items">
                    idx:{{idx}} item:{{item}}
                </li>
            </ul>
            <ul>
                <li v-for="item of object">
                    item:{{item}}
                </li>
                <li v-for="(item, idx) of object">
                    idx:{{idx}}, item:{{item}}
                </li>
                <li v-for="(item, idx, key) of object">
                    idx:{{idx}}, key:{{key}}, item:{{item}}
                </li>
                <li v-for="(item, idx, key) of object" :key="item.idx">
                    idx:{{idx}}, key:{{key}}, item:{{item}}
                </li>
            </ul>
            <h3>对象更改检测注意事项</h3>
            <p>Vue 不能检测对象属性的添加或删除</p>
            <p>{{a}}</p>
            <button @click="changeA">changeA</button>
            <p>{{aObj.name}}</p>
            <button @click="changeAObj">changeAObj</button>
            <h3>显示过滤/排序结果</h3>
            <ul>
                <li v-for="n in evenNumbers">{{n}}</li>
                <!--<li v-for="n in even(numbers)">{{n}}</li>-->
            </ul>
            <h3>一段取值范围的 v-for</h3>
            <p v-for="n in 10">{{n}}</p>
            <h3>v-for on a template</h3>
            <ul>
                <template v-for="item in items">
                    <li>{{item.msg}}</li>
                </template>
            </ul>
            <h3>v-for with v-if</h3>
            <p>v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中</p>
            <input type="text"
                   v-model="newTodoText"
                   v-on:keyup.enter="addNewTodo"
                   placeholder="Add a todo">
            <ul>
                <li v-for="(todo, index) in todos"
                    v-bind:key="todo.id"
                    v-bind:title="todo.title">
                    {{todo.title}}
                    <button v-on:click="todos.splice(index, 1)">X</button>
                </li>
            </ul>
        </Card>
    </div>
</template>

<script>
	export default {
		name: 'list',
		data() {
			return {
				items: [
					{msg: 'a'},
					{msg: 'b'}
				],
				object: {
					fName: 'fName',
					lName: 'lName',
					age: 30
				},
				a: 'a',
				aObj: {
					name: 'a'
				},
				numbers: [1, 2, 3, 4, 5],
				newTodoText: '',
				todos: [
					{
						id: 1,
						title: 'Do the dishes',
					},
					{
						id: 2,
						title: 'Take out the trash',
					},
					{
						id: 3,
						title: 'Mow the lawn'
					}
                ],
				nextTodoId: 4
			};
		},
        computed: {
			evenNumbers: function() {
				return this.numbers.filter(function (number) {
                    return number % 2 === 0
				})
            }
        },
		methods: {
			changeA() {
				if (this.a == 'a') {
					this.a = 'b';
				} else {
					this.a = 'a';
				}
			},
			changeAObj() {
				if (this.aObj.name == 'a') {
					this.aObj.name = 'b';
				} else {
					this.aObj.name = 'a';
				}
			},
			addNewTodo: function () {
				this.todos.push({
					id: this.nextTodoId++,
					title: this.newTodoText
				});
				this.newTodoText = ''
			}
		}
	};
</script>

<style scoped>

</style>