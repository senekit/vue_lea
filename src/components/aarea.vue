<template>
  <div id="area"></div>
</template>

<script>
import {Area} from '@antv/g2plot';
export default {
  name: "aarea",
  data(){
    return{
      data: [],
      time: 0
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
      this.area = new Area('area', {
        data : this.data,
        xField: 'date',
        yField: 'value',
        seriesField: 'type',
      });
      this.area.render();
    },
    timer: function () {
      this.countAdd();
    },
    //需要定时执行的方法
    countAdd: function () {
      this.axios.get('http://127.0.0.1:3211/total').then(res => {
        let str = JSON.stringify(res.data)
        var dd = JSON.parse(str)
        var day = new Date();
        this.time++
        this.data.push({
           "type": "TCP",
           "value": dd['TCP'],
           "date": this.time
        }, {
          "type": "UDP",
          "value": dd['UDP'],
          "date": this.time
        }, {
          "type": "ICMP",
          "value": dd['ICMP'],
          "date": this.time
        }, {
          "type": "Other",
          "value": dd['Other'],
          "date": this.time
        }),
        this.area.changeData(this.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
