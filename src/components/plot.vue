<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="src"
      label="来源"
      width="400">
    </el-table-column>
    <el-table-column
      prop="dst"
      label="目的地"
      width="400">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型">
    </el-table-column>
    <el-table-column
      prop="len"
      label="长度">
    </el-table-column>
  </el-table>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
import {Liquid} from "@antv/g2plot";
export default {
  methods: {
    tableRowClassName({row,rowIndex}) {

      if (rowIndex == 2048) {
        return 'warning-row';
      } else {
        return 'success-row';
      }
      return '';
    },
    timer: function () {
      this.countAdd();
    },
    //需要定时执行的方法
    countAdd: function () {
      this.axios.get('http://127.0.0.1:3211/catch').then(res => {
        let str = JSON.stringify(res.data);
        var dd = JSON.parse(str);
        console.log(dd)
        this.tableData.push(dd)
      })
    }
  },
  data() {
    return {
      tableData: []
    }
  },created: function () {
    setInterval(this.timer, 1000);
  }
}
</script>
