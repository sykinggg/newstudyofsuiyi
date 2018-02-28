<template>
    <div>
        <Card class="mar-b-20 mar-t-20">
            <p slot="title">混入</p>
        </Card>
    </div>
</template>

<script>
    import mixins1 from '../mixins/mixins1';
    import mixins2 from '../mixins/mixins2';

    export default {
        name: "mixins",
        mixins: [mixins1, mixins2],
        mounted() {
            // console.log(mixins1);
            console.log(mixins2.methods);
            mixins2.methods.a();
            mixins2.methods.b();
        }
    }
</script>

<style scoped>

</style>
