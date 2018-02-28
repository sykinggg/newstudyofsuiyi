<template>
    <div>
        <Card class="mar-t-20 mar-b-20">
            <p slot="title">状态动画与侦听器</p>
            <input type="number" v-model.number="number" step="20" maxlength="10">
            <p>{{ animatedNumber }}</p>
        </Card>
        <Card class="mar-b-20">
            <p slot="title">svg 过渡动画</p>
            <svg wdth="200" height="200">
                <polygon :points="points"></polygon>
                <circle cx="100" cy="100" r="90"></circle>
            </svg>
          <label>Sides: {{ sides }}</label>
          <input
            type="range"
            min="3"
            max="500"
            v-model.number="sides">
          <label>Minimum Radius: {{ minRadius }}%</label>
          <input
            type="range"
            min="0"
            max="90"
            v-model.number="minRadius">
          <label>Update Interval: {{ updateInterval }} milliseconds</label>
          <input
            type="range"
            min="10"
            max="2000"
            v-model.number="updateInterval">
        </Card>
        <Card class="mar-b-20">
            <p slot="title">组建的过渡</p>
            <input v-model.number="firstNumber" type="number" step="20" maxlength="5">
            <span>+</span>
            <input v-model.number="secondNumber" type="number" step="20" maxlength="5">
            <span>=</span>
            <span>{{ resultData }}</span>
            <p>
              <animated_integer v-bind:value="firstNumber"></animated_integer> +
              <animated_integer v-bind:value="secondNumber"></animated_integer> =
              <animated_integer v-bind:value="resultData"></animated_integer>
            </p>
        </Card>
    </div>
</template>

<script>
    import animated_integer from '../component/animated_integer';

    export default {
        name: "state-transition",
        components: {
          animated_integer:animated_integer
        },
        data() {
            var defaultSides = 10
            var stats = Array.apply(null, { length: defaultSides })
              .map(function () { return 100 })
            return {
                number: 0,
                animatedNumber: 0,
                stats: stats,
                points: generatePoints(stats),
                sides: defaultSides,
                minRadius: 50,
                interval: null,
                updateInterval: 500,
                firstNumber: 20,
                secondNumber: 40
            }
        },
        watch: {
          number: function(newValue, oldValue) {
            let vm = this
            function animate () {
              if (TWEEN.update()) {
                requestAnimationFrame(animate)
              }
            }

            new TWEEN.Tween({ tweeningNumber: oldValue })
              .easing(TWEEN.Easing.Quadratic.Out)
              .to({ tweeningNumber: newValue }, 500)
              .onUpdate(function () {
                vm.animatedNumber = this.tweeningNumber
              })
              .start()

            animate()
          },

          sides: function (newSides, oldSides) {
            var sidesDifference = newSides - oldSides
            if (sidesDifference > 0) {
              for (var i = 1; i <= sidesDifference; i++) {
                this.stats.push(this.newRandomValue())
              }
            } else {
              var absoluteSidesDifference = Math.abs(sidesDifference)
              for (var i = 1; i <= absoluteSidesDifference; i++) {
                this.stats.shift()
              }
            }
          },
          stats: function (newStats) {
            TweenLite.to(
              this.$data,
              this.updateInterval / 1000,
              { points: generatePoints(newStats) }
            )
          },
          updateInterval: function () {
            this.resetInterval()
          }
        },
        mounted() {
          this.resetInterval()
        },
        methods: {
          randomizeStats: function () {
            var vm = this
            this.stats = this.stats.map(function () {
              return vm.newRandomValue()
            })
          },
          newRandomValue: function () {
            return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius))
          },
          resetInterval: function () {
            var vm = this
            clearInterval(this.interval)
            this.randomizeStats()
            this.interval = setInterval(function () {
              vm.randomizeStats()
            }, this.updateInterval)
          }
        },
        computed: {
            resultData: function() {
                return +this.firstNumber + this.secondNumber
            }
        }
    }

    function valueToPoint (value, index, total) {
      var x     = 0
      var y     = -value * 0.9
      var angle = Math.PI * 2 / total * index
      var cos   = Math.cos(angle)
      var sin   = Math.sin(angle)
      var tx    = x * cos - y * sin + 100
      var ty    = x * sin + y * cos + 100
      return { x: tx, y: ty }
    }

    function generatePoints (stats) {
      var total = stats.length
      return stats.map(function (stat, index) {
        var point = valueToPoint(stat, index, total)
        return point.x + ',' + point.y
      }).join(' ')
    }
</script>

<style scoped>
  svg { display: block; }
  polygon { fill: #41B883; }
  circle {
    fill: transparent;
    stroke: #35495E;
  }
  input[type="range"] {
    display: block;
    width: 100%;
    margin-bottom: 15px;
  }
</style>
