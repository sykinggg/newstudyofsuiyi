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
        </Card>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    // import storex from '../vuex/vuexx';

    export default {
        name: "describe",
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
