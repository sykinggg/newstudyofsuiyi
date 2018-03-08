<template>
    <div>
        <Card class="mar-t-20 mar-b-20">
            <p slot="title">简介</p>
            <ul>
                <li>
                    <p>聚焦输入框(当页面加载时，该元素将获得焦点)</p>
                    <p>局部指令(directive1)</p>
                    <p>
                        <input type="text" v-focus>
                    </p>
                </li>
            </ul>
        </Card>
        <Card class="mar-b-20">
            <p slot="title">钩子函数</p>
            <Collapse v-model="explain1">
                <Panel name="1">
                    钩子函数说明
                    <div slot="content">
                        <ul>
                            <li>
                                <p>bind：只调用一次，指令第一次绑定到元素时调用</p>
                                <p>在这里可以进行一次性的初始化设置</p>
                            </li>
                            <li>
                                <p>inserted：被绑定元素插入父节点时调用</p>
                                <p>仅保证父节点存在，但不一定已被插入文档中</p>
                            </li>
                            <li>
                                <p>update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前</p>
                                <p>可以通过比较更新前后的值来忽略不必要的模板更新</p>
                            </li>
                            <li>
                                <p>componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用</p>
                            </li>
                            <li>
                                <p>unbind：只调用一次，指令与元素解绑时调用</p>
                            </li>
                        </ul>
                    </div>
                </Panel>
                <Panel name="2">
                    钩子函数参数
                    <div slot="content">
                        <ul>
                            <li>
                                <p>el：指令所绑定的元素，可以用来直接操作 DOM</p>
                            </li>
                            <li>
                                <p></p>
                            </li>
                        </ul>
                    </div>
                </Panel>
            </Collapse>
        </Card>
    </div>
</template>

<script>
    import directive1 from '../directives/directive1';

    export default {
        mixins: [directive1],
        name: "custom-instruction",
        data() {
            return {
                explain1: 1
            }
        }
    }
</script>

<style scoped>

</style>
