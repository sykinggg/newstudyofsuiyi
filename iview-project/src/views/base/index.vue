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
		name: 'index',
		data() {
			return {
				routerArr: [
					{
						name: '模版',
						link: '/base/template'
					},
                    {
                    	name: '计算属性',
                        link: '/base/computationalAttr'
                    },
                    {
                    	name: '样式',
                        link: '/base/style'
                    },
                    {
                    	name: '条件渲染',
                        link: '/base/condition'
                    },
                    {
                    	name: '列表渲染',
                        link: '/base/list'
                    },
                    {
                    	name: '事件处理',
                        link: '/base/function'
                    },
                    {
                    	name: '表单',
                        link: '/base/form'
                    }
				],
				thisRoute: this.$route
			};
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
	};
</script>

<style scoped>

</style>