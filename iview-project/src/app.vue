<style scoped>
    @import 'styles/index.less';
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="openView">
                <MenuItem v-for="item in routerArr" v-bind:name="item.link"
                    v-bind:class="{'ivu-menu-item-active ivu-menu-item-selected': thisRoute.path.indexOf(item.link) >= 0}">
                    <!--<Icon type="ios-navigate"></Icon>-->
                    <span>{{item.name}}</span>
                </MenuItem>
                <!--<Submenu name="1">-->
                <!--<template slot="title">-->
                <!--<Icon type="ios-navigate"></Icon>-->
                <!--Item 1-->
                <!--</template>-->
                <!--<MenuItem name="map">-->
                <!--map-->
                <!--</MenuItem>-->
                <!--<MenuItem name="index">index</MenuItem>-->
                <!--</Submenu>-->
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <!--头部-->
            <!--<Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>-->
            <Content :style="{padding: '0 16px 16px'}">
                <!--面包屑-->
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem v-for="item in thisBreadcrumbItem">
                        {{item}}
                    </BreadcrumbItem>
                </Breadcrumb>
                <!--内容区域-->
                <Card>
                    <div style="min-height: 600px">
                        <!--<router-link :to="index">index</router-link>-->
                        <!--<router-link :to="map">map</router-link>-->
                        <router-view></router-view>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
	import VueRouter from 'vue-router';

	export default {
		components: {
			VueRouter
		},
		data() {
			return {
				routerArr: [
					{
						name: '首页',
						link: '/index'
					},
					{
						name: '基础',
						link: '/base'
					},
                    {
                    	name: '过渡&动画',
                        link: '/trainAnim'
                    }
				],
                thisRoute: this.$route,
                thisBreadcrumbItem: []
			};
		},
        watch: {
			$route(to, form) {
				this.thisRoute = to;
				this.thisBreadcrumbItem = this.thisRoute.path.split('/');
            }
        },
		mounted() {
			this.thisBreadcrumbItem = this.thisRoute.path.split('/');
		},
		beforeDestroy() {

		},
		methods: {
			openView(name) {
				this.$router.push(name);
			}
		}
	};
</script>
