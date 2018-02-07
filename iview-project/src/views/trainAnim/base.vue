<template>
    <div>
        <Card class="mar-b-20 mar-t-20">
            <p slot="title">单元素/组件的过渡</p>
            <ul>
                <li>条件渲染 (使用 v-if)</li>
                <li>条件展示 (使用 v-show)</li>
                <li>动态组件</li>
                <li>组件根节点</li>
            </ul>
        </Card>
        <button v-on:click="show = !show">Toggle</button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
        <Card class="mar-b-20 mar-t-20">
            <p slot="title">过渡的类名</p>
            <ul>
                <li>
                    <p>v-enter：定义进入过渡的开始状态。</p>
                    <p>在元素被插入时生效，在下一个帧移除。</p>
                </li>
                <li></li>
            </ul>
        </Card>
    </div>
</template>

<script>
	export default {
		name: 'trainAnimBase',
        data() {
			return {
				show: true
            }
        }
	};
</script>

<style scoped>
    /*fade*/
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>