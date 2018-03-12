<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        name: "mutation"
    }
</script>

<style scoped>

</style>
