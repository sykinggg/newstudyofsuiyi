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
        data() {
          return {
            routerArr: [
              {
                name: 'vuex产生',
                link: '/stateManagement/vuex'
              },
              {
                name: 'vuex描述',
                link: '/stateManagement/describe'
              },
              {
                name: 'state',
                link: '/stateManagement/state'
              },
              {
                name: 'getter',
                link: '/stateManagement/getter'
              },
              {
                name: 'mutation',
                link: '/stateManagement/mutation'
              },
              {
                name: 'action',
                link: '/stateManagement/action'
              },
              {
                name: 'module',
                link: '/stateManagement/module'
              },

            ],
            thisRoute: this.$route
          }
        },
        name: "base",
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
