<template>
  <div>

    <el-row :gutter="20">
      <el-col :span="6"><liquid></liquid></el-col>
      <el-col :span="6"><memory></memory></el-col>
      <el-col :span="12"><aarea></aarea></el-col>
    </el-row>


    <plot></plot>
  </div>
</template>

<script>
import plot from "./plot";
import liquid from "./liquid";
import memory from "./memory";
import aarea from "./aarea";
export default {
  name: 'hello',
  components: {
    plot,
    liquid,
    memory,
    aarea
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0
    }
  },created: function () {
    //定时器，时间单位为毫秒
    setInterval(this.timer, 1000);
  },
  methods: {
    timer: function () {
      this.countAdd();
    },
    //需要定时执行的方法
    countAdd: function () {
      this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: chartreuse;
}
</style>
