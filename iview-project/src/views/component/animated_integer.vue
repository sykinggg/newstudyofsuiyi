<template>
    <span>{{ tweeningValue }}</span>
</template>

<script>
    import TWEEN from 'tween.js';

    export default {
        name: "animated_integer",
        props: {
            value: {
                type: Number,
                required:true
            }
        },
        data() {
            return {
                tweeningValue: 0
            }
        },
        watch: {
            value: function(newValue, oldValue) {
                this.tween(oldValue, newValue);
            }
        },
        mounted() {
            this.tween(0, this.value);
        },
        methods: {
            tween: function(startValue, endValue) {
                let vm = this;
                function animate() {
                    if(TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }
                new TWEEN.Tween({ tweeningValue: startValue })
                  .to({ tweeningValue: endValue }, 500)
                  .onUpdate(function (object) {
                      // console.log(object);
                      vm.tweeningValue = endValue;
                  })
                  .start()

                animate()
            }
        }
    }
</script>

<style scoped>

</style>
