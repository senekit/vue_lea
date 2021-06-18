<template>
  <div>

  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count" class="infinite-list-item">{{ i }} + {{textarea}}</li>
  </ul>


  <el-input
    type="textarea"
    :rows="20"
    placeholder="请输入内容"
    v-model="textarea">
  </el-input>

    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share" @click="appendt_test"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: "testcomponent",
  data() {
    return {
      textarea: '',
      count: 20
    }
  },
  methods:{
    load(){
      this.count += 0
    },
    appendt_test(){
      this.axios.get('http://127.0.0.1:3211/axios').then(res=>{
        let str = JSON.stringify(res.data)
        var dd = JSON.parse(str)
        this.textarea=dd['time'];
      })
    }
  }

}
</script>

<style scoped>

</style>
