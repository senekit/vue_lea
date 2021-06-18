<template>
 <div id="area"></div>
</template>

<script>
import {Area, Liquid} from '@antv/g2plot';
export default {
  name: "area",
  data(){
    return{
      data: [{ "country": "北美", "date": 1965, "value": 1390.5 },
        { "country": "北美", "date": 1966, "value": 1469.5 },
        { "country": "北美", "date": 1967, "value": 1521.7 },
        { "country": "北美", "date": 1968, "value": 1615.9 },
        { "country": "北美", "date": 1969, "value": 1703.7 },
        { "country": "北美", "date": 1970, "value": 1767.8 },
        { "country": "北美", "date": 1971, "value": 1806.2 },
        { "country": "北美", "date": 1972, "value": 1903.5 },
        { "country": "北美", "date": 1973, "value": 1986.6 },
        { "country": "北美", "date": 1974, "value": 1952 }]
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
        seriesField: 'country',
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
        console.log(dd)

      })
    }
  }
}
</script>

<style scoped>

</style>
