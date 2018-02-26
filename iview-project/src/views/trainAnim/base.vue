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
        <Card class="mar-b-20 mar-t-20">
            <p slot="title">同时使用过渡和动画</p>
            <ul>
                <li>
                  <p class="text-indent-2">可以是 transitionend 或 animationend ，这取决于给元素应用的 CSS 规则</p>
                  <p class="text-indent-2">如果你使用其中任何一种，Vue 能自动识别类型并设置监听</p>
                </li>
            </ul>
        </Card>
        <Card class="mar-b-20">
            <p slot="title">JavaScript 钩子</p>
            <pre>
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
                v-on:enter-cancelled="enterCancelled"

                v-on:before-leave="beforeLeave"
                v-on:leave="leave"
                v-on:after-leave="afterLeave"
                v-on:leave-cancelled="leaveCancelled"

                // --------
                // 进入中
                // --------

                beforeEnter: function (el) {
                  // ...
                },
                // 此回调函数是可选项的设置
                // 与 CSS 结合时使用
                enter: function (el, done) {
                  // ...
                  done()
                },
                afterEnter: function (el) {
                  // ...
                },
                enterCancelled: function (el) {
                  // ...
                },

                // --------
                // 离开时
                // --------

                beforeLeave: function (el) {
                  // ...
                },
                // 此回调函数是可选项的设置
                // 与 CSS 结合时使用
                leave: function (el, done) {
                  // ...
                  done()
                },
                afterLeave: function (el) {
                  // ...
                },
                // leaveCancelled 只用于 v-show 中
                leaveCancelled: function (el) {
                  // ...
                }
            </pre>
        </Card>
        <Card class="mar-b-20">
            <p slot="title">使用 Velocity.js 的简单例子</p>
            <div id="example-4">
                <button @click="example4Show = !example4Show">Toggle</button>
                <transition
                  v-on:before-enter="beforeEnter"
                  v-on:enter="enter"
                  v-on:leave="leave"
                  v-bind:css="false">
                  <p v-if="example4Show">Demo</p>
                </transition>
            </div>
        </Card>
        <Card class="mar-b-20">
          <p slot="title">初始渲染的过渡</p>
          <p>可以通过 appear 特性设置节点在初始渲染的过渡</p>
          <Collapse v-model="collapse1">
            <Panel name="1">
              默认和进入/离开过渡一样，同样也可以自定义 CSS 类名
              <ul slot="content">
                <li>appear</li>
                <li>appear-class="custom-appear-class"</li>
                <li>appear-to-class="custom-appear-to-class" (2.1.8+)</li>
                <li>appear-active-class="custom-appear-active-class"</li>
              </ul>
            </Panel>
            <Panel name="2">
              自定义 JavaScript 钩子
              <ul slot="content">
                <li>appear</li>
                <li>v-on:before-appear="customBeforeAppearHook"</li>
                <li>v-on:appear="customAppearHook"</li>
                <li>v-on:after-appear="customAfterAppearHook"</li>
                <li>v-on:appear-cancelled="customAppearCancelledHook"</li>
              </ul>
            </Panel>
          </Collapse>
        </Card>
        <Card class="mar-b-20">
          <p slot="title">多个元素的过渡</p>
          <div>
            <p>
              当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，
              否则 Vue 为了效率只会替换相同标签内部的内容
            </p>
            <p>给在 transition 组件中的多个元素设置 key 是一个更好的实践</p>
          </div>
        </Card>
        <Card class="mar-b-20">
            <p slot="title">过渡模式</p>
            <div>
                <p>这是 transition 的默认行为 - 进入和离开同时发生</p>
                <ul>
                    <li>in-out：新元素先进行过渡，完成之后当前元素过渡离开。</li>
                    <li>out-in：当前元素先进行过渡，完成之后新元素过渡进入。</li>
                </ul>
                <transition name="fade" mode="out-in">
                    <button v-if="on" key="on" @click="on = false">on</button>
                    <button v-else key="off" @click="on = true">off</button>
                </transition>
            </div>
        </Card>
        <Card class="mar-b-20">
            <p slot="title">列表过渡</p>
            <ul>
                <li>单个节点</li>
                <li>同一时间渲染多个节点中的一个</li>
            </ul>
            <button v-on:click="add">Add</button>
            <button v-on:click="remove">Remove</button>
            <transition-group name="list" tag="p">
                <span v-for="item in items" v-bind:key="item" class="list-item">
                    {{ item }}
                </span>
            </transition-group>
        </Card>
        <Card class="mar-b-20">
            <p slot="title">列表的排序过渡</p>
            <ul>
                <li>transition-group v-move 特性</li>
            </ul>
            <button v-on:click="shuffle">shuffle</button>
            <transition-group name="flip-list" tag="ul">
                <p v-for="item in shuffleItems" v-bind:key="item">
                    {{ item }}
                </p>
            </transition-group>
        </Card>
        <Card class="mar-b-20">
            <p slot="title">列表综合实例</p>
            <button v-on:click="shuffle1">shuffle</button>
            <button v-on:click="add1">add</button>
            <button v-on:click="remove1">remove</button>
            <transition-group name="list-complete1" tag="p">
                <span v-for="item in shuffleItems1" v-bind:key="item" class="list-complete-item1">
                    {{item}}
                </span>
            </transition-group>
            <ul>
                <li>需要注意的是使用 FLIP 过渡的元素不能设置为 display: inline</li>
                <li>作为替代方案，可以设置为 display: inline-block 或者放置于 flex 中</li>
            </ul>
        </Card>
        <Card class="mar-b-20">
            <p slot="title">列表过渡</p>
            <button v-on:click="shuffle2" class="mar-b-20">shuffle</button>
            <transition-group name="list-complete2" tag="div" class="list-complete-item2-box">
                  <p v-for="(item, index) in shuffleItems2" v-bind:key="item" class="list-complete-item2">
                    {{item}}
                  </p>
            </transition-group>
        </Card>
        <!--<Card class="mar-b-20">-->
            <!--<p slot="title">列表的交错过渡</p>-->
            <!--<input v-model="query">-->
            <!--<transition-group-->
                <!--name="staggered-fade"-->
                <!--tag="ul"-->
                <!--v-bind:css="false"-->
                <!--v-on:before-enter="beforeEnter"-->
                <!--v-on:enter="enter"-->
                <!--v-on:leave="leave">-->
                <!--<p-->
                    <!--v-for="(item, index) in computedList"-->
                    <!--v-bind:key="item.msg"-->
                    <!--v-bind:data-index="index">-->
                    <!--{{ item.msg }}-->
                <!--</p>-->
            <!--</transition-group>-->
        <!--</Card>-->
    </div>
</template>

<script>
  import Velocity from 'velocity-animate';
  import _ from 'lodash';

	export default {
		name: 'trainAnimBase',
    data() {
      return {
        show: true,
        showClick: true,
        showBounce: true,
        showOther: true,
        example4Show: false,
        on: true,
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10,
        shuffleItems: [1,2,3,4,5,6,7,8,9],
        shuffleItems1: [1,2,3,4,5,6,7,8,9],
        shuffleItems2: [],
        query: '',
        list: [
          { msg: 'Bruce Lee' },
          { msg: 'Jackie Chan' },
          { msg: 'Chuck Norris' },
          { msg: 'Jet Li' },
          { msg: 'Kung Fury' }
        ]
      }
    },
    mounted () {
        this.defaultShuffleItem2()
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.transformOrigin = 'left'
      },
      enter: function (el, done) {
        Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
        Velocity(el, { fontSize: '1em' }, { complete: done })
      },
      leave: function (el, done) {
        Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
        Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, { complete: done })
      },
      randomIndex: function () {
          return Math.floor(Math.random() * this.items.length)
      },
      add: function () {
          this.shuffleItems.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove: function () {
          this.shuffleItems.splice(this.randomIndex(), 1)
      },
      shuffle: function() {
          this.shuffleItems = _.shuffle(this.shuffleItems);
      },
      add1: function () {
          this.shuffleItems1.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove1: function () {
          this.shuffleItems1.splice(this.randomIndex(), 1)
      },
      shuffle1: function() {
          this.shuffleItems1 = _.shuffle(this.shuffleItems1);
      },
      shuffle2: function() {
          this.shuffleItems2 = _.shuffle(this.shuffleItems2);
      },
      defaultShuffleItem2: function() {
          for(var i = 1; i < 100; i++) {
              this.shuffleItems2.push(i);
          }
      }
    },
    computed: {
        computedList: function () {
            var vm = this
            return this.list.filter(function (item) {
              return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
            })
        }
    },
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

    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        /* .list-leave-active for below version 2.1.8 */
        opacity: 0;
        transform: translateY(30px);
    }

    .flip-list-move {
        transition: transform 1s;
    }

    .list-complete-item1 {
        transition: all 1s;
        display: inline-block;
        margin-right: 10px;
    }
    .list-complete1-enter, .list-complete1-leave-to {
        /* .list-complete-leave-active for below version 2.1.8 */
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete1-leave-active {
        position: absolute;
    }

    .list-complete-item2-box {
      width: 270px;
      height: auto;
    }

    .list-complete-item2 {
        transition: all 1s;
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid #e5e5e5;
        text-align: center;
        line-height: 30px;
    }
</style>
