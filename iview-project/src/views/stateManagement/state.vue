<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        name: "state"
    }
</script>

<style scoped>

</style>
