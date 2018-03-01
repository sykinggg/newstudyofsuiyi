<template>
    <Card class="mar-t-20 mar-b-20">
        <p slot="title">简介</p>
        <ul>
            <li>
                <p>聚焦输入框(当页面加载时，该元素将获得焦点)</p>
                <p>局部指令(directive1)</p>
                <p>
                    <input type="text" v-focus1>
                </p>
            </li>
        </ul>
    </Card>
</template>

<script>
    import directive1 from '../directives/directive1';

    export default {
        name: "custom-instruction"
    }
</script>

<style scoped>

</style>
