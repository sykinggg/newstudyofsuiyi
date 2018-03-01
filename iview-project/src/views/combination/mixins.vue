<template>
    <div>
        <Card class="mar-b-20 mar-t-20">
            <p slot="title">混入</p>
            <p>mixins1、mixins2</p>
            <ul>
                <li>混入对象可以包含任意组件选项</li>
                <li>当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项</li>
            </ul>
        </Card>
        <Card class="mar-b-20">
            <p slot="title">选项合并</p>
            <ul>
                <li>
                    <p>mixins3</p>
                    <p>数据对象在内部会进行浅合并 (一层属性深度)，在和组件的数据发生冲突时以组件数据优先</p>
                </li>
                <li>
                    <p>mixins4</p>
                    <p>同名钩子函数将混合为一个数组，因此都将被调用</p>
                    <p>混入对象的钩子将在组件自身钩子之前调用</p>
                </li>
                <li>
                    <p>mixins5</p>
                    <p>值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象</p>
                    <p>两个对象键名冲突时，取组件对象的键值对</p>
                </li>
            </ul>
        </Card>
        <Card>
            <p slot="title">全局混入</p>
            <ul>
                <li>mixins6</li>
                <li>可以全局注册混入对象</li>
                <li> 一旦使用全局混入对象，将会影响到 所有 之后创建的 Vue 实例</li>
            </ul>
        </Card>
    </div>
</template>

<script>
    import mixins1 from '../mixins/mixins1';
    import mixins2 from '../mixins/mixins2';
    import mixins3 from '../mixins/mixins3';
    import mixins4 from '../mixins/mixins4';
    import mixins5 from '../mixins/mixins5';

    export default {
        name: "mixins",
        mixins: [mixins1, mixins2, mixins3, mixins4, mixins5],
        data: function() {
            return {
                message: 'goodbye',
                bar: 'def'
            }
        },
        created: function() {
            console.log('组件钩子被调用');
        },
        methods: {
            bar1() {
                console.log('bar');
            },
            conflicting() {
                console.log('from self');
            }
        },
        mounted: function() {
            // console.log(mixins1);
            // console.log(mixins2.methods);
            // mixins2.methods.a();
            // mixins2.methods.b();
            console.log(this.$data);
            this.foo1();
            this.bar1();
            this.conflicting();
        },
    }
</script>

<style scoped>

</style>
