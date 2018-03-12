<template>
      <div>
          <Card class="mar-t-20">
          <p slot="title">Module</p>
          <h4>产生的问题</h4>
          <p>由于使用单一状态树，应用的所有状态会集中到一个比较大的对象</p>
          <h4>解决产生的问题</h4>
          <p>Vuex 允许 store 分割成模块（module）</p>
          <pre>
                const moduleA = {
                    state: { ... },
                    mutations: { ... },
                    actions: { ... },
                    getters: { ... }
                }

                const moduleB = {
                    state: { ... },
                    mutations: { ... },
                    actions: { ... }
                }

                const store = new Vuex.Store({
                    modules: {
                        a: moduleA,
                        b: moduleB
                    }
                })

                store.state.a // -> moduleA 的状态
                store.state.b // -> moduleB 的状态
            </pre>
          <h4>模块的局部状态</h4>
          <p>对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象</p>
          <pre>
                const moduleA = {
                    state: { count: 0 },
                    mutations: {
                        increment (state) {
                            // 这里的 `state` 对象是模块的局部状态
                            state.count++
                        }
                    },

                    getters: {
                        doubleCount (state) {
                            return state.count * 2
                        }
                    }
                }
            </pre>
          <p>对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState</p>
          <pre>
                const moduleA = {
                    // ...
                    actions: {
                        incrementIfOddOnRootSum ({ state, commit, rootState }) {
                            if ((state.count + rootState.count) % 2 === 1) {
                                commit('increment')
                            }
                        }
                    }
                }
            </pre>
          <p>对于模块内部的 getter，根节点状态会作为第三个参数暴露出来</p>
          <pre>
                const moduleA = {
                    // ...
                    getters: {
                        sumWithRootCount (state, getters, rootState) {
                            return state.count + rootState.count
                        }
                    }
                }
            </pre>
          <h4>命名空间</h4>
          <p>模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应</p>
          <p>可以通过添加 namespaced: true 的方式使其成为命名空间模块</p>
          <p>所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名</p>
          <pre>
                const store = new Vuex.Store({
                    modules: {
                        account: {
                            namespaced: true,

                            // 模块内容（module assets）
                            state: { ... }, // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
                            getters: {
                                isAdmin () { ... } // -> getters['account/isAdmin']
                            },
                            actions: {
                                login () { ... } // -> dispatch('account/login')
                            },
                            mutations: {
                                login () { ... } // -> commit('account/login')
                            },

                            // 嵌套模块
                            modules: {
                                // 继承父模块的命名空间
                                myPage: {
                                    state: { ... },
                                    getters: {
                                        profile () { ... } // -> getters['account/profile']
                                    }
                                },

                                // 进一步嵌套命名空间
                                posts: {
                                    namespaced: true,

                                    state: { ... },
                                    getters: {
                                        popular () { ... } // -> getters['account/posts/popular']
                                    }
                                }
                            }
                        }
                    }
                })
            </pre>
          <p>启用了命名空间的 getter 和 action 会收到局部化的 getter，dispatch 和 commit</p>
          <ul>
            <li>在使用模块内容（module assets）时不需要在同一模块内额外添加空间名前缀</li>
            <li>更改 namespaced 属性后不需要修改模块内的代码</li>
          </ul>
          <h4>在命名空间模块内访问全局内容（Global Assets）</h4>
          <ul>
            <li>如果使用全局 state 和 getter，rootState 和 rootGetter 会作为第三和第四参数传入 getter</li>
            <li>也会通过 context 对象的属性传入 action</li>
            <li>若需要在全局命名空间内分发 action 或提交 mutation</li>
            <li>将 { root: true } 作为第三参数传给 dispatch 或 commit 即可</li>
          </ul>
          <pre>
                modules: {
                    foo: {
                        namespaced: true,

                        getters: {
                            // 在这个模块的 getter 中，`getters` 被局部化了
                            // 你可以使用 getter 的第四个参数来调用 `rootGetters`
                            someGetter (state, getters, rootState, rootGetters) {
                                getters.someOtherGetter // -> 'foo/someOtherGetter'
                                rootGetters.someOtherGetter // -> 'someOtherGetter'
                            },
                            someOtherGetter: state => { ... }
                        },

                        actions: {
                            // 在这个模块中， dispatch 和 commit 也被局部化了
                            // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
                            someAction ({ dispatch, commit, getters, rootGetters }) {
                                getters.someGetter // -> 'foo/someGetter'
                                rootGetters.someGetter // -> 'someGetter'

                                dispatch('someOtherAction') // -> 'foo/someOtherAction'
                                dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

                                commit('someMutation') // -> 'foo/someMutation'
                                commit('someMutation', null, { root: true }) // -> 'someMutation'
                            },
                            someOtherAction (ctx, payload) { ... }
                        }
                    }
                }
            </pre>
          <h4>带命名空间的绑定函数</h4>
          <p>当使用 mapState, mapGetters, mapActions 和 mapMutations 这些函数来绑定命名空间模块时</p>
          <pre>
                computed: {
                    ...mapState({
                        a: state => state.some.nested.module.a,
                        b: state => state.some.nested.module.b
                    })
                },
                methods: {
                    ...mapActions([
                        'some/nested/module/foo',
                        'some/nested/module/bar'
                    ])
                }
            </pre>
          <h4>简化方法</h4>
          <p>可以将模块的空间名称字符串作为第一个参数传递给上述函数</p>
          <p>所有绑定都会自动将该模块作为上下文</p>
          <pre>
                computed: {
                    ...mapState('some/nested/module', {
                        a: state => state.a,
                        b: state => state.b
                    })
                },
                methods: {
                    ...mapActions('some/nested/module', [
                        'foo',
                        'bar'
                    ])
                }
            </pre>
          <h4>具体使用</h4>
          <p>可以通过使用 createNamespacedHelpers 创建基于某个命名空间辅助函数</p>
          <p>返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数</p>
          <pre>
                import { createNamespacedHelpers } from 'vuex'

                const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

                export default {
                    computed: {
                        // 在 `some/nested/module` 中查找
                        ...mapState({
                            a: state => state.a,
                            b: state => state.b
                        })
                    },
                    methods: {
                        // 在 `some/nested/module` 中查找
                        ...mapActions([
                            'foo',
                            'bar'
                        ])
                    }
                }
            </pre>
          <h4>插件开发的注意事项</h4>
          <p>可以通过插件的参数对象来允许用户指定空间名称</p>
          <pre>
                // 通过插件的参数对象得到空间名称
                // 然后返回 Vuex 插件函数
                export function createPlugin (options = {}) {
                    return function (store) {
                        // 把空间名字添加到插件模块的类型（type）中去
                        const namespace = options.namespace || ''
                        store.dispatch(namespace + 'pluginAction')
                    }
                }
            </pre>
          <h4>模块动态注册</h4>
          <p>在 store 创建之后，你可以使用 store.registerModule 方法注册模块</p>
          <pre>
                // 注册模块 `myModule`
                store.registerModule('myModule', {
                    // ...
                })
                // 注册嵌套模块 `nested/myModule`
                store.registerModule(['nested', 'myModule'], {
                    // ...
                })
            </pre>
          <h5>代码说明</h5>
          <p>可以通过 store.state.myModule 和 store.state.nested.myModule 访问模块的状态</p>
          <p>模块动态注册功能使得其他 Vue 插件可以通过在 store 中附加新模块的方式来使用 Vuex 管理状态</p>\
          <p><a href="https://github.com/vuejs/vuex-router-sync">vuex-router-sync</a> 插件就是通过动态注册模块将 vue-router 和 vuex 结合在一起，实现应用的路由状态管理</p>
          <h3>模块重用</h3>
          <p>创建一个模块的多个实例</p>
          <ul>
            <li>创建多个 store，他们公用同一个模块</li>
            <li>在一个 store 中多次注册同一个模块</li>
          </ul>
          <h4>问题产生</h4>
          <p>如果我们使用一个纯对象来声明模块的状态，那么这个状态对象会通过引用被共享，导致状态对象被修改时 store 或模块间数据互相污染的问题</p>
          <p>实际上这和 Vue 组件内的 data 是同样的问题</p>
          <h4>问题解决</h4>
          <p>相同的——使用一个函数来声明模块状态（仅 2.3.0+ 支持）</p>
          <pre>
                const MyReusableModule = {
                    state () {
                        return {
                            foo: 'bar'
                        }
                    },
                    // mutation, action 和 getter 等等...
                }
            </pre>
        </Card>
      </div>
</template>

<script>
    export default {
        name: "module"
    }
</script>

<style scoped>

</style>
