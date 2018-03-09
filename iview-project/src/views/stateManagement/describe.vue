<template>
    <div>
        <Card>
            <p slot="title">描述</p>
            <ul>
                <li>每一个 Vuex 应用的核心就是 store（仓库）</li>
                <li>“store”基本上就是一个容器，它包含着应用中大部分的状态 (state)</li>
            </ul>
            <h5>Vuex 和单纯的全局对象有以下两点不同</h5>
            <ul>
                <li>
                    <h5>Vuex 的状态存储是响应式的</h5>
                    <p>当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新</p>
                </li>
                <li>
                    <h5>不能直接改变 store 中的状态</h5>
                    <p>改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation</p>
                </li>
            </ul>
            <h1>点击: {{ $store.state.count }} 次数,此為 {{ evenOrOdd }} <br></h1>
            <button class="btn"  @click="increment">+</button>
            <button class="btn"  @click="decrement">-</button><br>
            <button class="btn"  @click="incrementIfOdd">业务设计：当 奇数时，才增加</button><br>
            <button class="btn"  @click="incrementAsync">业务设计：1秒后，才会增加 1</button><br>
        </Card>
        <Card class="mar-t-20">
            <p slot="title">State</p>
            <h4>单一状态树</h4>
            <ul>
                <li>Vuex 使用单一状态树</li>
                <li>用一个对象就包含了全部的应用层级状态</li>
                <li>每个应用将仅仅包含一个 store 实例</li>
            </ul>
            <h4>在 Vue 组件中获得 Vuex 状态</h4>
            <pre>
                computed: {
                    count() {
                      return store.state.count
                  }
                }
            </pre>
            <p>每当 store.state.count 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM</p>
            <h4>产生问题:这种模式导致组件依赖全局状态单例</h4>
            <p>Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）</p>
            <p>通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到</p>
            <h4>mapState 辅助函数</h4>
            <pre>
                //  mapState辅助函数
                computed: mapState({
                    // 箭头函数可使代码更简练
                    count: state => state.count,
                    // 传字符串参数 'count' 等同于 `state => state.count`
                    countAlias: 'count',
                    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
                    countPlusLocalState (state) {
                        return state.count + this.localCount
                    }
                }),
            </pre>
            <p>当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组</p>
            <pre>
                computed: mapState([
                    // 映射 this.count 为 store.state.count
                    'count'
                ])
            </pre>
            <h4>对象展开运算符</h4>
            <p>mapState 函数返回的是一个对象</p>
            <pre>
                computed: {
                    localComputed () { /* ... */ },
                    // 使用对象展开运算符将此对象混入到外部对象中
                    ...mapState({
                        // ...
                    })
                }
            </pre>
            <h4>组件仍然保有局部状态</h4>
            <p>如果有些状态严格属于单个组件，最好还是作为组件的局部状态</p>
        </Card>
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
        <Card class="mar-t-20">
            <p slot="title">Mutation</p>
            <ul>
                <li>更改 Vuex 的 store 中的状态的唯一方法是提交 mutation</li>
                <li>
                    <p>Vuex 中的 mutation 非常类似于事件</p>
                    <p>每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)</p>
                </li>
            </ul>
            <pre>
                const store = new Vuex.Store({
                    state: {
                        count: 1
                    },
                    mutations: {
                        increment (state) {
                            // 变更状态
                            state.count++
                        }
                    }
                })
            </pre>
            <ul>
                <li>不能直接调用一个 mutation handler</li>
                <li>这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”</li>
                <li>要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法</li>
            </ul>
            <pre>
                store.commit('increment')
            </pre>
            <h4>提交载荷（Payload）</h4>
            <p>可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）</p>
            <pre>
                // ...
                mutations: {
                    increment (state, n) {
                        state.count += n
                    }
                }
                store.commit('increment', 10)
            </pre>
            <p>在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读</p>
        </Card>
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapState } from 'vuex';

    export default {
        name: "describe",
        // mapGetters辅助函数
        computed: mapGetters([
            'evenOrOdd'
        ]),
        methods: mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }
</script>

<style scoped>

</style>
