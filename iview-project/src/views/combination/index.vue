<template>
  <div>
    <Menu mode="horizontal" @on-select="openView">
      <MenuItem v-bind:name="item.link" v-for="item in routerArr"
                v-bind:class="{'ivu-menu-item-active ivu-menu-item-selected': thisRoute.path == item.link}">
        <Icon></Icon>
        {{item.name}}
      </MenuItem>
    </Menu>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
          return {
            routerArr: [
              {
                name: '混入',
                link: '/combination/mixins'
              },
              {
                name: '自定义组件',
                link: '/combination/customInstruction'
              },
              {
                name: '渲染',
                link: '/combination/jsx'
              },
              {
                name: '插件',
                link: '/combination/plugIns'
              },
              {
                name: '过滤器',
                link: '/combination/filter'
              }
            ],
            thisRoute: this.$route
          }
        },
        watch: {
          $route(to, form) {
            this.thisRoute = to;
          }
        },
        methods: {
          openView(name) {
            this.$router.push(name);
          }
        }
    }
</script>

<style scoped>

</style>
