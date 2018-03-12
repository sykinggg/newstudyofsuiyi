<template>
    <div>
      <Card class="mar-t-20">
        <p slot="title">Getter</p>
        <h4>解决的问题：</h4>
        <p>从 store 中的 state 中派生出一些状态</p>
        <pre>
                // 对列表进行过滤并计数
                computed: {
                    doneTodosCount () {
                        return this.$store.state.todos.filter(todo => todo.done).length
                    }
                }
            </pre>
        <h4>使用时产生的问题</h4>
        <p>如果有多个组件需要用到此属性</p>
        <ul>
          <li>要么复制这个函数</li>
          <li>抽取到一个共享函数然后在多处导入</li>
        </ul>
        <p>更好的解决方法</p>
        <p>Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）</p>
        <p>就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算</p>
        <pre>
                // Getter 接受 state 作为其第一个参数
                const store = new Vuex.Store({
                    state: {
                        todos: [
                            { id: 1, text: '...', done: true },
                            { id: 2, text: '...', done: false }
                        ]
                    },
                    getters: {
                        doneTodos: state => {
                            return state.todos.filter(todo => todo.done)
                        }
                    }
                })

                // Getter 会暴露为 store.getters 对象
                store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]

                // Getter 也可以接受其他 getter 作为第二个参数
                getters: {
                    // ...
                    doneTodosCount: (state, getters) => {
                        return getters.doneTodos.length
                    }
                }
                store.getters.doneTodosCount // -> 1

                // 使用
                computed: {
                    doneTodosCount () {
                        return this.$store.getters.doneTodosCount
                    }
                }

                // 可以通过让 getter 返回一个函数，来实现给 getter 传参
                getters: {
                    // ...
                    getTodoById: (state) => (id) => {
                        return state.todos.find(todo => todo.id === id)
                    }
                }
                store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
            </pre>
        <h4>mapGetters 辅助函数</h4>
        <p>mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性</p>
        <pre>
                import { mapGetters } from 'vuex'

                export default {
                    // ...
                    computed: {
                    // 使用对象展开运算符将 getter 混入 computed 对象中
                        ...mapGetters([
                            'doneTodosCount',
                            'anotherGetter',
                            // ...
                        ])
                    }
                }
            </pre>
        <p>如果将一个 getter 属性另取一个名字，使用对象形式</p>
        <pre>
                mapGetters({
                    // 映射 `this.doneCount` 为 `store.getters.doneTodosCount`
                    doneCount: 'doneTodosCount'
                })
            </pre>
      </Card>
    </div>
</template>

<script>
    export default {
        name: "getter"
    }
</script>

<style scoped>

</style>
