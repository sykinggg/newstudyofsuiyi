<template>
    <div>
        <Card style="margin-top: 15px;">
            <p slot="title">Class 与 Style 绑定</p>
            <p v-bind:class="{'active': isActive}">v-bind:class="{'active': isActive}"</p>
            <p v-bind:class="{active: isActive}">v-bind:class="{active: isActive}"</p>
            <span>v-bind:class :前面的是按字符串解析的</span>
            <p v-bind:class="classObject">v-bind:class="classObject"</p>
            <p v-bind:class="[active, active1]">v-bind:class="[active, active1]"</p>
            <p v-bind:class="[isActive ? active: active1]">v-bind:class="[isActive ? active: active1]"</p>
            <p v-bind:style="{color: activeColor, fontSize: fontSize + 'px'}">v-bind:style="{color: activeColor, fontSize: fontSize + 'px'}"</p>
            <p v-bind:style="styleObject">v-bind:style="styleObject"</p>
        </Card>
    </div>
</template>

<script>
	export default {
		name: 'styleComponent',
        data() {
			return {
				isActive: true,
				active: 'active class',
                active1: 'active class1',
				activeColor: 'red',
				fontSize: 30,
                styleObject: {
					color: 'red',
                    fontSize: '13px'
                }
            }
        },
        computed: {
			classObject: function () {
                return {
                    'text-danger': this.active && this.isActive
                }
			}
        }
	};
</script>

<style scoped>

</style>