<template>
  <div id="app">
    <div class="caseinfo-main-container" style="position:relative">
    <!-- 背景图-->
      <caseinfo></caseinfo>
    <!-- 系统title-->
      <div class="caseinfo-header">
        <div class="header-title"><span class="big-title">武汉市金融风险监测预警平台</span></div>
      </div>
    <!-- 图标区域 + 底部时钟 -->
      <echartsline></echartsline>
    </div>
  </div>
</template>

<script>
import caseinfo from './components/caseinfo-main-container'
import echartsline from './components/echartsline'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    caseinfo,
    echartsline
  },
  methods:{
     getInfo () {
      axios.get('api/test.json')
        .then(this.getInfoSucc)
        .catch(function (error) {
          console.log(error)
        })
    },
    getInfoSucc (res) {
      res = res.data
      // 添加数据至 vuex的state
     // this.$store.commit('toState',res);
    //  数据存储至 sessionstroage中
      sessionStorage.setItem('toState',JSON.stringify(res)); 
    }
  },
  mounted:function(){
   //  this.getInfo();
  }
}
</script>

<style>
body{
  background-color: #040b38;
}
#app{
  height: 100%;
  width: 100%;
}
</style>
