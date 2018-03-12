<template>
      <div>
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
      </div>
</template>

<script>
    export default {
        name: "action"
    }
</script>

<style scoped>

</style>
