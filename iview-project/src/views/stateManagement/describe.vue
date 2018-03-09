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
            <pre>
                // ...
                mutations: {
                    increment (state, payload) {
                        state.count += payload.amount
                    }
                }
                store.commit('increment', {
                    amount: 10
                })
            </pre>
            <h4>对象风格的提交方式</h4>
            <p>提交 mutation 的另一种方式是直接使用包含 type 属性的对象</p>
            <pre>
                store.commit({
                    type: 'increment',
                    amount: 10
                })
            </pre>
            <p>当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 保持不变</p>
            <pre>
                mutations: {
                    increment (state, payload) {
                        state.count += payload.amount
                    }
                }
            </pre>
            <h4>Mutation 需遵守 Vue 的响应规则</h4>
            <p>当变更状态时，监视状态的 Vue 组件也会自动更新</p>
            <ul>
                <li>最好提前在你的 store 中初始化好所有所需属性</li>
                <li>
                    <h5>当需要在对象上添加新属性时</h5>
                    <ul>
                        <li>使用 Vue.set(obj, 'newProp', 123)</li>
                        <li>以新对象替换老对象</li>
                        <li>
                            <pre>
                                // 利用 stage-3 的对象展开运算符
                                state.obj = { ...state.obj, newProp: 123 }
                            </pre>
                        </li>
                    </ul>
                </li>
            </ul>
            <h4>使用常量替代 Mutation 事件类型</h4>
            <p>使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式</p>
            <p>可以使 linter 之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然</p>
            <pre>
                // mutation-types.js
                export const SOME_MUTATION = 'SOME_MUTATION'
                // store.js
                import Vuex from 'vuex'
                import { SOME_MUTATION } from './mutation-types'

                const store = new Vuex.Store({
                    state: { ... },
                    mutations: {
                        // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
                        [SOME_MUTATION] (state) {
                            // mutate state
                        }
                    }
                })
            </pre>
            <h4>Mutation 必须是同步函数</h4>
            <p>一条重要的原则就是要记住 mutation 必须是同步函数</p>
            <pre>
                mutations: {
                    someMutation (state) {
                        api.callAsyncMethod(() => {
                            state.count++
                        })
                    }
                }
            </pre>
            <ul>
                <li>当 mutation 触发的时候，回调函数还没有被调用</li>
                <li>devtools 不知道什么时候回调函数实际上被调用</li>
                <li>注意:实质上任何在回调函数中进行的状态的改变都是不可追踪的</li>
            </ul>
            <h4>在组件中提交 Mutation</h4>
            <ul>
                <li>可以在组件中使用 this.$store.commit('xxx') 提交 mutation</li>
                <li>使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）</li>
            </ul>
            <pre>
                import { mapMutations } from 'vuex'

                export default {
                    // ...
                    methods: {
                        ...mapMutations([
                            'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

                            // `mapMutations` 也支持载荷：
                            'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
                        ]),
                        ...mapMutations({
                            add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
                        })
                    }
                }
            </pre>
            <h5>注意:在 Vuex 中，mutation 都是同步事务</h5>
            <pre>
                store.commit('increment')
                // 任何由 "increment" 导致的状态变更都应该在此刻完成。
            </pre>
        </Card>
        <Card class="mar-t-20">
            <p slot="title">Action</p>
            <h4>Action 类似于 mutation</h4>
            <ul>
                <li>Action 提交的是 mutation，而不是直接变更状态</li>
                <li>Action 可以包含任意异步操作</li>
            </ul>
            <p>注册一个简单的 action</p>
            <pre>
                const store = new Vuex.Store({
                    state: {
                        count: 0
                    },
                    mutations: {
                        increment (state) {
                            state.count++
                        }
                    },
                    actions: {
                        increment (context) {
                            context.commit('increment')
                        }
                    }
                })
            </pre>
            <h4>代码描述</h4>
            <ul>
                <li>
                    <h5>Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象</h5>
                    <p>可以调用 context.commit 提交一个 mutation</p>
                    <p>通过 context.state 和 context.getters 来获取 state 和 getters</p>
                </li>
            </ul>
            <pre>
                actions: {
                    increment ({ commit }) {
                        commit('increment')
                    }
                }
            </pre>
            <h4>分发 Action</h4>
            <p>Action 通过 store.dispatch 方法触发</p>
            <pre>
                store.dispatch('increment')
            </pre>
            <p>mutation 必须同步执行;可以在 action 内部执行异步操作</p>
            <pre>
                actions: {
                    incrementAsync ({ commit }) {
                        setTimeout(() => {
                            commit('increment')
                        }, 1000)
                    }
                }
            </pre>
            <p>Actions 支持同样的载荷方式和对象方式进行分发</p>
            <pre>
                // 以载荷形式分发
                store.dispatch('incrementAsync', {
                    amount: 10
                })

                // 以对象形式分发
                store.dispatch({
                    type: 'incrementAsync',
                    amount: 10
                })
            </pre>
            <h4>实例:调用异步 API 和分发多重 mutation</h4>
            <pre>
                actions: {
                    checkout ({ commit, state }, products) {
                        // 把当前购物车的物品备份起来
                        const savedCartItems = [...state.cart.added]
                        // 发出结账请求，然后乐观地清空购物车
                        commit(types.CHECKOUT_REQUEST)
                        // 购物 API 接受一个成功回调和一个失败回调
                        shop.buyProducts(
                            products,
                            // 成功操作
                            () => commit(types.CHECKOUT_SUCCESS),
                            // 失败操作
                            () => commit(types.CHECKOUT_FAILURE, savedCartItems)
                        )
                    }
                }
            </pre>
            <p>通过提交 mutation 来记录 action 产生的副作用（即状态变更）</p>
            <h4>在组件中分发 Action</h4>
            <ul>
                <li>在组件中使用 this.$store.dispatch('xxx') 分发 action</li>
                <li>使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）</li>
            </ul>
            <pre>
                import { mapActions } from 'vuex'

                export default {
                    // ...
                    methods: {
                        ...mapActions([
                            'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

                            // `mapActions` 也支持载荷：
                            'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
                        ]),
                        ...mapActions({
                            add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
                        })
                    }
                }
            </pre>
            <h4>组合 Action</h4>
            <ul>
                <li>store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise</li>
                <li>store.dispatch 仍旧返回 Promise</li>
            </ul>
            <pre>
                actions: {
                    actionA ({ commit }) {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                commit('someMutation')
                                resolve()
                            }, 1000)
                        })
                    }
                }
            </pre>
            <p>现在可以</p>
            <pre>
                store.dispatch('actionA').then(() => {
                    // ...
                })
            </pre>
            <p>在另外一个 action 中也可以</p>
            <pre>
                actions: {
                    // ...
                    actionB ({ dispatch, commit }) {
                        return dispatch('actionA').then(() => {
                            commit('someOtherMutation')
                        })
                    }
                }
            </pre>
            <p>如果利用 async / await，可以如下组合 action：</p>
            <pre>
                // 假设 getData() 和 getOtherData() 返回的是 Promise

                actions: {
                    async actionA ({ commit }) {
                        commit('gotData', await getData())
                    },
                    async actionB ({ dispatch, commit }) {
                        await dispatch('actionA') // 等待 actionA 完成
                        commit('gotOtherData', await getOtherData())
                    }
                }
            </pre>
            <h4>注意: </h4>
            <ul>
                <li>一个 store.dispatch 在不同模块中可以触发多个 action 函数</li>
                <li>在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行</li>
            </ul>
        </Card>
        <Card class="mar-t-20">
            <p slot="title">Module</p>
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
