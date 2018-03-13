<template>
      <div>
          <Card class="mar-t-20">
              <p slot="title">过滤器</p>
              <h3>使用注意</h3>
              <p>双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)</p>
              <pre>
                  <!-- 在双花括号中 -->
                  { { message | capitalize }}

                  <!-- 在 `v-bind` 中 -->
                  < div v-bind:id="rawId | formatId">< /div>
              </pre>
              <pre>
                  //  可以在一个组件的选项中定义本地的过滤器
                  filters: {
                      capitalize: function (value) {
                          if (!value) return ''
                          value = value.toString()
                          return value.charAt(0).toUpperCase() + value.slice(1)
                      }
                  }

                  //  或者在创建 Vue 实例之前全局定义过滤器
                  Vue.filter('capitalize', function (value) {
                      if (!value) return ''
                      value = value.toString()
                      return value.charAt(0).toUpperCase() + value.slice(1)
                  })

                  new Vue({
                      // ...
                  })
              </pre>
              <h3>过滤器的详细解释</h3>
              <ul>
                  <li>过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数</li>
                  <li>capitalize 过滤器函数将会收到 message 的值作为第一个参数</li>
              </ul>
              <pre>
                  { { message | filterA | filterB }}
                  { { message | filterA('arg1', arg2) }}
              </pre>
          </Card>
      </div>
</template>

<script>
    export default {
        name: "filter"
    }
</script>

<style scoped>

</style>
