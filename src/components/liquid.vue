<template>
  <div id="liquidPlot"></div>
</template>

<script>
import { Liquid } from '@antv/g2plot';
export default {
  name: "liquid",
  data(){
    return{
      percent: 0.30
    }
  },
  mounted() {
    var v = this;
    this.$nextTick(() => {
      v.drawChart()
    })
  }
  ,created: function () {
    setInterval(this.timer, 1000);
  },
  methods: {
    drawChart: function ()
    {
      this.liquidChart = new Liquid('liquidPlot', {
        percent: this.percent,
        outline: {
          border: 4,
          distance: 8,
        },
        wave: {
          length: 128,
        },
      });
      this.liquidChart.render();
    },
    timer: function () {
      this.countAdd();
    },
    //需要定时执行的方法
    countAdd: function () {
      this.axios.get('http://127.0.0.1:3211/cpu').then(res => {
        let str = JSON.stringify(res.data)
        var dd = JSON.parse(str)
        this.percent = dd['cpu'];
      })
      this.liquidChart.changeData(this.percent)
    }
  }
}
</script>

<style scoped>

</style>
