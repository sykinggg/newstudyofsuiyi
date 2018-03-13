<template>
      <div>
          <Card class="mar-t-20">
              <p slot="title">渲染函数 & JSX</p>
              <p>需要 JavaScript 的完全编程的能力，这就是 render 函数，它比 template 更接近编译器</p>
              <pre>
                  使用
                  anchored-heading :level="1" Hello world! anchored-heading
              </pre>
              <pre>
                  script type="text/x-template" id="anchored-heading-template"
                      h1 v-if="level === 1"
                          slot slot
                      h1
                      h1 v-else-if="level === 2"
                          slot slot
                      h1
                      h1 v-else-if="level === 3"
                          slot slot
                      h1
                      h1 v-else-if="level === 4"
                          slot slot
                      h1
                      h1 v-else-if="level === 5"
                          slot slot
                      h1
                      h1 v-else-if="level === 6"
                          slot slot
                      h1
                      h1 v-else-if="level === 7"
                          slot slot
                      h1
                  script
                  Vue.component('anchored-heading', {
                      template: '#anchored-heading-template',
                      props: {
                          level: {
                              type: Number,
                              required: true
                          }
                      }
                  })
              </pre>
              <h4>使用 render 函数重写</h4>
              <pre>
                  Vue.component('anchored-heading', {
                      render: function (createElement) {
                          return createElement(
                              'h' + this.level,   // tag name 标签名称
                              this.$slots.default // 子组件中的阵列
                          )
                      },
                      props: {
                          level: {
                              type: Number,
                              required: true
                          }
                      }
                  })
              </pre>
              <h3>实例属性</h3>
              <ul>
                  <li>
                      <h4>vm.$data</h4>
                      <p>类型：Object</p>
                      <p>Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象属性的访问</p>
                      <pre>
                          var data = { a: 1 }

                          // 直接创建一个实例
                          var vm = new Vue({
                              data: data
                          })
                          vm.a // => 1
                          vm.$data === data // => true

                          // Vue.extend() 中 data 必须是函数
                          var Component = Vue.extend({
                              data: function () {
                                  return { a: 1 }
                              }
                          })
                      </pre>
                      <h3>注意</h3>
                      <p>不应该对 data 属性使用箭头函数 </p>
                      <p>data: () => { return { a: this.myProp }}</p>
                      <p>箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例</p>
                      <p>this.myProp 将是 undefined</p>
                  </li>
                  <li>
                      <h4>vm.$props</h4>
                      <p>类型：Object</p>
                      <p>当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象属性的访问</p>
                      <pre>
                          // 简单语法
                          Vue.component('props-demo-simple', {
                              props: ['size', 'myMessage']
                          })

                          // 对象语法，提供校验
                          Vue.component('props-demo-advanced', {
                              props: {
                                  // 检测类型
                                  height: Number,
                                  // 检测类型 + 其他验证
                                  age: {
                                      type: Number,
                                      default: 0,
                                      required: true,
                                      validator: function (value) {
                                          return value >= 0
                                      }
                                  }
                              }
                          })
                      </pre>
                      <h4>描述</h4>
                      <p>props 可以是数组或对象，用于接收来自父组件的数据</p>
                      <p>对象允许配置高级选项，如类型检测、自定义校验和设置默认值</p>
                  </li>
                  <li>
                      <h4>vm.$el</h4>
                      <p>类型：HTMLElement</p>
                      <p>Vue 实例使用的根 DOM 元素。</p>
                  </li>
                  <li>
                      <h4>vm.$options</h4>
                      <p>类型：Object</p>
                      <p>用于当前 Vue 实例的初始化选项</p>
                      <pre>
                          new Vue({
                              customOption: 'foo',
                              created: function () {
                                  console.log(this.$options.customOption) // => 'foo'
                              }
                          })
                      </pre>
                  </li>
                  <li>
                      <h4>vm.$parent</h4>
                      <p>类型：Vue instance</p>
                      <p>父实例，如果当前实例有的话</p>
                      <p>指定已创建的实例之父实例，在两者之间建立父子关系</p>
                      <p>子实例可以用 this.$parent 访问父实例</p>
                      <p>子实例被推入父实例的 $children 数组中</p>
                      <h3>注意</h3>
                      <p>节制地使用 $parent 和 $children</p>
                      <p>它们的主要目的是作为访问组件的应急方法</p>
                      <p>推荐用 props 和 events 实现父子组件通信</p>
                  </li>
                  <li>
                      <h4>vm.$children</h4>
                      <p>类型：Array Vue instance</p>
                      <p>当前实例的直接子组件</p>
                      <h3>注意:</h3>
                      <ul>
                          <li>$children 并不保证顺序，也不是响应式的</li>
                          <li>如果你发现自己正在尝试使用 $children 来进行数据绑定</li>
                          <li>考虑使用一个数组配合 v-for 来生成子组件，并且使用 Array 作为真正的来源</li>
                      </ul>
                  </li>
                  <li>
                      <h4>vm.$slots</h4>
                      <p>类型：{ [name: string]: ?Array VNode  }</p>
                      <p>用来访问被插槽分发的内容</p>
                      <ul>
                          <li>每个具名插槽 有其相应的属性 (例如：slot="foo" 中的内容将会在 vm.$slots.foo 中被找到)</li>
                          <li>default 属性包括了所有没有被包含在具名插槽中的节点</li>
                      </ul>
                      <p>在使用渲染函数书写一个组件时，访问 vm.$slots</p>
                      <pre>
                          blog-post>
                              h1 slot="header">
                                About Me
                              /h1>

                              p>Here's some page content, which will be included in vm.$slots.default, because it's not inside a named slot./p>

                              p slot="footer">
                                Copyright 2016 Evan You
                              /p>

                              p>If I have some content down here, it will also be included in vm.$slots.default./p>.
                          /blog-post>

                          Vue.component('blog-post', {
                              render: function (createElement) {
                                  var header = this.$slots.header
                                  var body   = this.$slots.default
                                  var footer = this.$slots.footer
                                  return createElement('div', [
                                      createElement('header', header),
                                      createElement('main', body),
                                      createElement('footer', footer)
                                  ])
                              }
                          })
                      </pre>
                  </li>
                  <li>
                      <h4>vm.$scopedSlots</h4>
                      <p>类型：{ [name: string]: props => VNode | Array VNode  }</p>
                      <p>用来访问作用域插槽</p>
                      <p>对于包括 默认 slot 在内的每一个插槽，该对象都包含一个返回相应 VNode 的函数</p>
                      <p>在使用渲染函数开发一个组件使用</p>
                  </li>
                  <li>
                      <h4>vm.$refs</h4>
                      <p>类型：Object</p>
                      <p>一个对象，持有已注册过 ref 的所有子组件</p>
                      <h3>ref</h3>
                      <p>预期：string</p>
                      <ul>
                          <li>ref 被用来给元素或子组件注册引用信息</li>
                          <li>引用信息将会注册在父组件的 $refs 对象上</li>
                          <li>如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素</li>
                          <li>如果用在子组件上，引用就指向组件实例</li>
                      </ul>
                      <pre>
                          <!-- vm.$refs.p will be the DOM node -->
                          p ref="p">hello/p>

                          <!-- vm.$refs.child will be the child comp instance -->
                          child-comp ref="child">/child-comp>
                      </pre>
                      <p>当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组</p>
                      <h4>ref 注册时间</h4>
                      <p>因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！</p>
                      <p>$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定</p>
                      <h3>子组件引用</h3>
                      <p>尽管有 prop 和事件，但是有时仍然需要在 JavaScript 中直接访问子组件</p>
                      <p>为此可以使用 ref 为子组件指定一个引用 ID</p>
                      <pre>
                          div id="parent">
                              user-profile ref="profile">/user-profile>
                          /div>

                          var parent = new Vue({ el: '#parent' })
                          // 访问子组件实例
                          var child = parent.$refs.profile
                      </pre>
                      <h4>说明</h4>
                      <ul>
                          <li>当 ref 和 v-for 一起使用时，获取到的引用会是一个数组</li>
                          <li>包含和循环数据源对应的子组件</li>
                      </ul>
                      <h3>注意:</h3>
                      <p>$refs 只在组件渲染完成后才填充，并且它是非响应式的</p>
                      <p>仅仅是一个直接操作子组件的应急方案——应当避免在模板或计算属性中使用 $refs</p>
                  </li>
                  <li>
                      <h4>vm.$isServer</h4>
                      <p>类型：boolean</p>
                      <p>当前 Vue 实例是否运行于服务器</p>
                      <h4>Nuxt.js</h4>
                      <a href="https://nuxtjs.org/">Nuxt.js </a>
                      <p>Nuxt 是一个基于 Vue 生态的更高层的框架，为开发服务端渲染的 Vue 应用提供了极其便利的开发体验</p>
                  </li>
                  <li>
                      <h4>vm.$attrs</h4>
                      <p>类型：{ [key: string]: string }</p>
                      <ul>
                          <li>包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)</li>
                          <li>当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)</li>
                          <li>可以通过 v-bind="$attrs" 传入内部组件——可以创建更高层次的组件</li>
                      </ul>
                  </li>
                  <li>
                      <h4>vm.$listeners</h4>
                      <p>类型：{ [key: string]: Function | Array Function> }</p>
                      <p>包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器</p>
                      <p>可以通过 v-on="$listeners" 传入内部组件——可以创建更高层次的组件</p>
                  </li>
              </ul>
              <h3>节点、树以及虚拟 DOM</h3>
              <p>浏览器的工作原理</p>
              <pre>
                  div>
                      h1>My title/h1>
                      Some text content
                      <!-- TODO: Add tagline -->
                  /div>
              </pre>
              <p>建立一个“DOM 节点”树来保持追踪</p>
              <h4>HTML 的 DOM 节点树</h4>
              <img class="max-wid-50-per" src="https://cn.vuejs.org/images/dom-tree.png">
              <pre>
                  //模板里
                  h1>{{ blogTitle }}/h1>

                  //一个渲染函数
                  render: function (createElement) {
                      return createElement('h1', this.blogTitle)
                  }
              </pre>
              <h4>虚拟 DOM</h4>
              <p>Vue 通过建立一个虚拟 DOM 对真实 DOM 发生的变化保持追踪</p>
              <pre>
                  return createElement('h1', this.blogTitle)
              </pre>
              <h3>代码描述</h3>
              <ul>
                  <li>createElement返回的不是一个实际的 DOM 元素</li>
                  <li>虚拟节点 (Virtual Node)”，也常简写它为“VNode”</li>
              </ul>
              <h4>createElement 参数</h4>
              <p>在 createElement 函数中生成模板</p>
              <pre>
                  // @returns {VNode}
                  createElement(
                      // {String | Object | Function}
                      // 一个 HTML 标签字符串，组件选项对象，或者一个返回值
                      // 类型为 String/Object 的函数，必要参数
                      'div',

                      // {Object}
                      // 一个包含模板相关属性的数据对象
                      // 这样，您可以在 template 中使用这些属性。可选参数。
                      {
                          // (详情见下一节)
                      },

                      // {String | Array}
                      // 子节点 (VNodes)，由 `createElement()` 构建而成，
                      // 或使用字符串来生成“文本节点”。可选参数。
                      [
                          '先写一些文字',
                          createElement('h1', '一则头条'),
                          createElement(MyComponent, {
                              props: {
                                  someProp: 'foobar'
                              }
                          })
                      ]
                  )
              </pre>
              <h4>深入 data 对象</h4>
              <p>在模板语法中，v-bind:class 和 v-bind:style</p>
              <p>在 VNode 数据对象中，下列属性名是级别最高的字段</p>
              <p>就像 DOM 属性一样，比如 innerHTML (这会取代 v-html 指令)</p>
              <pre>
                  {
                      // 和`v-bind:class`一样的 API
                      'class': {
                          foo: true,
                          bar: false
                      },
                      // 和`v-bind:style`一样的 API
                      style: {
                          color: 'red',
                          fontSize: '14px'
                      },
                      // 正常的 HTML 特性
                      attrs: {
                          id: 'foo'
                      },
                      // 组件 props
                      props: {
                          myProp: 'bar'
                      },
                      // DOM 属性
                      domProps: {
                          innerHTML: 'baz'
                      },
                      // 事件监听器基于 `on`
                      // 所以不再支持如 `v-on:keyup.enter` 修饰器
                      // 需要手动匹配 keyCode。
                      on: {
                          click: this.clickHandler
                      },
                      // 仅对于组件，用于监听原生事件，而不是组件内部使用
                      // `vm.$emit` 触发的事件。
                      nativeOn: {
                          click: this.nativeClickHandler
                      },
                      // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
                      // 赋值，因为 Vue 已经自动为你进行了同步。
                      directives: [
                          {
                              name: 'my-custom-directive',
                              value: '2',
                              expression: '1 + 1',
                              arg: 'foo',
                              modifiers: {
                                  bar: true
                              }
                          }
                      ],
                      // Scoped slots in the form of
                      // { name: props => VNode | Array VNode  }
                      scopedSlots: {
                          default: props => createElement('span', props.text)
                      },
                      // 如果组件是其他组件的子组件，需为插槽指定名称
                      slot: 'name-of-slot',
                      // 其他特殊顶层属性
                      key: 'myKey',
                      ref: 'myRef'
                  }
              </pre>
              <h4>完整示例</h4>
              <pre>
                  var getChildrenTextContent = function (children) {
                      return children.map(function (node) {
                          return node.children
                              ? getChildrenTextContent(node.children)
                              : node.text
                      }).join('')
                  }

                  Vue.component('anchored-heading', {
                      render: function (createElement) {
                          // create kebabCase id
                          var headingId = getChildrenTextContent(this.$slots.default)
                              .toLowerCase()
                              .replace(/\W+/g, '-')
                              .replace(/(^\-|\-$)/g, '')

                          return createElement(
                              'h' + this.level,
                              [
                                  createElement('a', {
                                      attrs: {
                                          name: headingId,
                                          href: '#' + headingId
                                      }
                                  }, this.$slots.default)
                              ]
                          )
                      },
                      props: {
                          level: {
                              type: Number,
                              required: true
                          }
                      }
                  })
              </pre>
              <h4>约束</h4>
              <p>VNodes 必须唯一</p>
              <pre>
                  //组件树中的所有 VNodes 必须是唯一的
                  render: function (createElement) {
                      var myParagraphVNode = createElement('p', 'hi')
                      return createElement('div', [
                          // 错误-重复的 VNodes
                          myParagraphVNode, myParagraphVNode
                      ])
                  }

                  //可以使用工厂函数来实现
                  render: function (createElement) {
                      return createElement('div',
                          Array.apply(null, { length: 20 }).map(function () {
                              return createElement('p', 'hi')
                          })
                      )
                  }
              </pre>
              <h1>使用 JavaScript 代替模板功能</h1>
              <h3>v-if 和 v-for</h3>
              <p>使用原生的 JavaScript 来实现某些东西很简单</p>
              <p>Vue 的 render 函数没有提供专用的 API</p>
              <pre>
                  //模版
                  ul v-if="items.length">
                      li v-for="item in items">{ { item.name } }/li>
                  /ul>
                  p v-else>No items found./p>

                  //JavaScript代替
                  props: ['items'],
                  render: function (createElement) {
                      if (this.items.length) {
                          return createElement('ul', this.items.map(function (item) {
                              return createElement('li', item.name)
                          }))
                      } else {
                          return createElement('p', 'No items found.')
                      }
                  }
              </pre>
              <h3>v-model</h3>
              <p>render 函数中没有与 v-model 相应的 api - 你必须自己来实现相应的逻辑</p>
              <pre>
                  props: ['value'],
                  render: function (createElement) {
                      var self = this
                      return createElement('input', {
                          domProps: {
                              value: self.value
                          },
                          on: {
                              input: function (event) {
                                  self.$emit('input', event.target.value)
                              }
                          }
                      })
                  }
              </pre>
              <h3>事件 & 按键修饰符</h3>
              <ul>
                  <li>对于 .passive、.capture 和 .once事件修饰符</li>
                  <li>Vue 提供了相应的前缀可以用于 on</li>
              </ul>
              <Table class="max-wid-50-per" :columns="columns1" :data="data1"></Table>
              <pre>
                  on: {
                      '!click': this.doThisInCapturingMode,
                      '~keyup': this.doThisOnce,
                      '~!mouseover': this.doThisOnceInCapturingMode
                  }
              </pre>
              <p>可以在事件处理函数中使用事件方法</p>
              <Table class="max-wid-50-per" :columns="columns2" :data="data2"></Table>
              <p>使用所有修饰符的例子</p>
              <pre>
                  on: {
                      keyup: function (event) {
                          // 如果触发事件的元素不是事件绑定的元素
                          // 则返回
                          if (event.target !== event.currentTarget) return
                          // 如果按下去的不是 enter 键或者
                          // 没有同时按下 shift 键
                          // 则返回
                          if (!event.shiftKey || event.keyCode !== 13) return
                          // 阻止 事件冒泡
                          event.stopPropagation()
                          // 阻止该元素默认的 keyup 事件
                          event.preventDefault()
                          // ...
                      }
                  }
              </pre>
              <h4>插槽</h4>
              <p>可以从 this.$slots 获取 VNodes 列表中的静态内容</p>
              <pre>
                  render: function (createElement) {
                      // `< div >< slot >< /slot >< /div >`
                      return createElement('div', this.$slots.default)
                  }
              </pre>
              <p>从 this.$scopedSlots 中获得能用作函数的作用域插槽，这个函数返回 VNodes</p>
              <pre>
                  props: ['message'],
                  render: function (createElement) {
                      // `< div>< slot :text="message">< /slot>< /div>`
                      return createElement('div', [
                          this.$scopedSlots.default({
                              text: this.message
                          })
                      ])
                  }
              </pre>
              <p>用渲染函数向子组件中传递作用域插槽，可以利用 VNode 数据中的 scopedSlots 域</p>
              <pre>
                  render: function (createElement) {
                      return createElement('div', [
                          createElement('child', {
                              // pass `scopedSlots` in the data object
                              // in the form of { name: props => VNode | Array< VNode> }
                              scopedSlots: {
                                  default: function (props) {
                                      return createElement('span', props.text)
                                  }
                              }
                          })
                      ])
                  }
              </pre>
              <h4>JSX</h4>
              <h5>产生问题（很多 render 函数）</h5>
              <pre>
                  createElement(
                      'anchored-heading', {
                          props: {
                              level: 1
                          }
                      }, [
                          createElement('span', 'Hello'),
                          ' world!'
                      ]
                  )

                  < anchored-heading :level="1">
                      < span>Hello< /span> world!
                  < /anchored-heading>
              </pre>
              <p>Babel 插件</p>
              <pre>
                  import AnchoredHeading from './AnchoredHeading.vue'

                  new Vue({
                      el: '#demo',
                      render: function (h) {
                          return (
                              < AnchoredHeading level={1}>
                                  < span>Hello< /span> world!
                              < /AnchoredHeading>
                          )
                      }
                  })
              </pre>
              <h4>参数描述</h4>
              <p>将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例</p>
              <p>如果在作用域中 h 失去作用，在应用中会触发报错</p>
              <h3>函数式组件</h3>
              <p>标记组件为 functional，这意味它是无状态 (没有 data)，无实例 (没有 this 上下文)</p>
              <pre>
                  // 函数式组件
                  Vue.component('my-component', {
                      functional: true,
                      // 为了弥补缺少的实例
                      // 提供第二个参数作为上下文
                      render: function (createElement, context) {
                          // ...
                      },
                      // Props 可选
                      props: {
                          // ...
                      }
                  })
              </pre>
              <h3>组件需要的一切都是通过上下文传递</h3>
              <ul>
                  <li>props：提供 props 的对象</li>
                  <li>children: VNode 子节点的数组</li>
                  <li>slots: slots 对象</li>
                  <li>data：传递给组件的 data 对象</li>
                  <li>parent：对父组件的引用</li>
                  <li>
                      <p>listeners: (2.3.0+) 一个包含了组件上所注册的 v-on 侦听器的对象</p>
                      <p>只是一个指向 data.on 的别名</p>
                  </li>
                  <li>injections: (2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的属性</li>
              </ul>
              <h4>组件运行描述</h4>
              <p>在添加 functional: true 之后，锚点标题组件的 render 函数之间简单更新增加 context 参数</p>
              <p>this.$slots.default 更新为 context.children</p>
              <p>this.level 更新为 context.props.level</p>
              <h5>优点</h5>
              <p>因为函数式组件只是一个函数，所以渲染开销也低很多</p>
              <h5>缺点</h5>
              <p>对持久化实例的缺乏也意味着函数式组件不会出现在 Vue devtools 的组件树里</p>
              <h4>包装组件时</h4>
              <ul>
                  <li>程序化地在多个组件中选择一个</li>
                  <li>在将 children, props, data 传递给子组件之前操作它们</li>
              </ul>
              <pre>
                  //  依赖传入 props 的值的 smart-list 组件
                  var EmptyList = { /* ... */ }
                  var TableList = { /* ... */ }
                  var OrderedList = { /* ... */ }
                  var UnorderedList = { /* ... */ }

                  Vue.component('smart-list', {
                      functional: true,
                      render: function (createElement, context) {
                          function appropriateListComponent () {
                              var items = context.props.items

                              if (items.length === 0)           return EmptyList
                              if (typeof items[0] === 'object') return TableList
                              if (context.props.isOrdered)      return OrderedList

                              return UnorderedList
                          }

                          return createElement(
                              appropriateListComponent(),
                              context.data,
                              context.children
                          )
                      },
                      props: {
                          items: {
                              type: Array,
                              required: true
                          },
                          isOrdered: Boolean
                      }
                  })
              </pre>
              <h4>向子元素或子组件传递特性和事件</h4>
              <pre>
                  Vue.component('my-functional-button', {
                      functional: true,
                      render: function (createElement, context) {
                          // 完全透明的传入任何特性、事件监听器、子结点等。
                          return createElement('button', context.data, context.children)
                      }
                  })
              </pre>
              <h4>代码描述</h4>
              <p>向 createElement 通过传入 context.data 作为第二个参数</p>
              <p>把 my-functional-button 上面所有的特性和事件监听器都传递下去了</p>
              <p>那些事件甚至并不要求 .native 修饰符</p>
              <h4>如果使用基于模板的函数式组件，那么还需要手动添加特性和监听器</h4>
              <pre>
                  < template functional>
                      < button
                        class="btn btn-primary"
                        v-bind="data.attrs"
                        v-on="listeners">
                          < slot/>
                      < /button>
                  < /template>
              </pre>
              <h4>slots() 和 children 对比</h4>
              <pre>
                  < my-functional-component>
                      < p slot="foo">
                          first
                      < /p>
                      < p>second< /p>
                  < /my-functional-component>
              </pre>
              <h5>代码描述</h5>
              <ul>
                  <li>children 会给你两个段落标签</li>
                  <li>slots().foo 会传递第一个具名段落标签</li>
                  <li>同时拥有 children 和 slots(),可以选择让组件通过 slot() 系统分发或者简单的通过 children 接收，让其他组件去处理</li>
              </ul>
          </Card>
      </div>
</template>

<script>
    export default {
        name: "jsx",
        data: function() {
            return {
                columns1: [
                    {
                        title: 'Modifier(s)',
                        key: 'm'
                    },
                    {
                        title: 'Prefix',
                        key: 'p'
                    }
                ],
                data1: [
                    {
                        m: '.passive',
                        p: '&'
                    },
                    {
                        m: '.capture',
                        p: '!'
                    },
                    {
                        m: '.once',
                        p: '~'
                    },
                    {
                        m: '.capture.once or .once.capture',
                        p: '~!'
                    }
                ],
                columns2: [
                    {
                        title: 'Modifier(s)',
                        key: 'm'
                    },
                    {
                        title: 'Equivalent in Handler',
                        key: 'e'
                    }
                ],
                data2: [
                    {
                        m: '.stop',
                        e: 'event.stopPropagation()'
                    },
                    {
                        m: '.prevent',
                        e: 'event.preventDefault()'
                    },
                    {
                        m: '.self',
                        e: 'if (event.target !== event.currentTarget) return'
                    },
                    {
                        m: 'Keys: .enter, .13',
                        e: 'if (event.keyCode !== 13) return (change 13 to another key code for other key modifiers)'
                    },
                    {
                        m: 'Modifiers Keys: .ctrl, .alt, .shift, .meta',
                        e: 'if (!event.ctrlKey) return (change ctrlKey to altKey, shiftKey, or metaKey, respectively)'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
