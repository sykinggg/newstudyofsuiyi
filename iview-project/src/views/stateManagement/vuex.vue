<template>
    <div>
        <Card class="mar-t-20">
            <p slot="title">状态管理模式</p>
            <p>{{count}}</p>
            <button @click="increment()">点击</button>
            <h5>这个状态自管理应用</h5>
            <ul>
                <li>state，驱动应用的数据源</li>
                <li>view，以声明方式将 state 映射到视图</li>
                <li>actions，响应在 view 上的用户输入导致的状态变化</li>
            </ul>
            <img class="max-wid-50-per" src="https://vuex.vuejs.org/zh-cn/images/flow.png" alt="">
            <h5>vux产生的原因</h5>
            <p>当应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏</p>
            <h5>解决方法</h5>
            <ul>
                <li>多个视图依赖于同一状态</li>
                <li>来自不同视图的行为需要变更同一状态</li>
            </ul>
            <h5>解决方法暴露出来的问题</h5>
            <ul>
                <li>
                    <p>对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐</p>
                    <p>并且对于兄弟组件间的状态传递无能为力</p>
                </li>
                <li>对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝</li>
            </ul>
            <h4>最终解决办法</h4>
            <p>把组件的共享状态抽取出来，以一个全局单例模式管理</p>
            <img class="max-wid-50-per" src="https://vuex.vuejs.org/zh-cn/images/vuex.png" alt="">
        </Card>
    </div>
</template>

<script>
    export default {
        name: "vuex",
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                this.count++;
            }
        }
    }
</script>

<style scoped>

</style>
