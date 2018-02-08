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
        <button v-on:click="show = !show">fade</button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
        <Card class="mar-b-20 mar-t-20">
            <p slot="title">过渡的类名</p>
            <ul>
                <li>
                    <p>v-enter：定义进入过渡的开始状态。</p>
                    <p class="text-indent-2">在元素被插入时生效，在下一个帧移除。</p>
                </li>
                <li>
                    <p>v-enter-active：定义过渡的状态。</p>
                    <p class="text-indent-2">在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。</p>
                    <p class="text-indent-2">这个类可以被用来定义过渡的过程时间，延迟和曲线函数。</p>
                </li>
                <li>
                    <p>v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态</p>
                    <p class="text-indent-2">在元素被插入一帧后生效 (与此同时 v-enter 被删除)，在 transition/animation 完成之后移除</p>
                </li>
                <li>
                    <p>v-leave: 定义离开过渡的开始状态</p>
                    <p class="text-indent-2">在离开过渡被触发时生效，在下一个帧移除</p>
                </li>
                <li>
                    <p>v-leave-active：定义过渡的状态</p>
                    <p class="text-indent-2">在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除</p>
                    <p class="text-indent-2">这个类可以被用来定义过渡的过程时间，延迟和曲线函数</p>
                </li>
                <li>
                    <p>v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态</p>
                    <p class="text-indent-2">在离开过渡被触发一帧后生效 (与此同时 v-leave 被删除)，在 transition/animation 完成之后移除</p>
                </li>
            </ul>
        </Card>
        <button @click="showClick = !showClick">
            slide-fade
        </button>
        <transition name="slide-fade">
            <p v-if="showClick">hello</p>
        </transition>
        <button @click="showBounce = !showBounce">
            bounce
        </button>
        <transition name="bounce">
            <p v-if="showBounce">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>
        <Card class="mar-b-20 mar-t-20">
            <p slot="title">自定义过渡的类名</p>
            <ul>
                <li>enter-class</li>
                <li>enter-active-class</li>
                <li>enter-to-class (2.1.8+)</li>
                <li>leave-class</li>
                <li>leave-active-class</li>
                <li>leave-to-class (2.1.8+)</li>
            </ul>
        </Card>
        <button @click="showOther = !showOther">
            showOther
        </button>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight">
          <p v-if="showOther">showOther</p>
        </transition>
        <Card>
            <p slot="title">同时使用过渡和动画</p>
            <ul>
                <li>
                  <p class="text-indent-2">可以是 transitionend 或 animationend ，这取决于给元素应用的 CSS 规则</p>
                  <p class="text-indent-2">如果你使用其中任何一种，Vue 能自动识别类型并设置监听</p>
                </li>
            </ul>
        </Card>
    </div>
</template>

<script>
	export default {
		name: 'trainAnimBase',
        data() {
        return {
              show: true,
              showClick: true,
              showBounce: true,
              showOther: true
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


    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
      /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateX(10px);
      opacity: 0;
    }


    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
</style>
