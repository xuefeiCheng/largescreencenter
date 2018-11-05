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
      <echartsline 
        :totalNum="totalNum" 
        :gfxCount='gfxCount'
        :fxCount='fxCount'
        :zdjcCout='zdjcCout'
      ></echartsline>
    </div>
  </div>
</template>

<script>
import caseinfo from './components/caseinfo-main-container'
import echartsline from './components/echartsline'
import axios from 'axios'

export default {
  name: 'App',
  data:function(){
    return {
      totalNum:'0',
      // 高风险企业数  -- 建议约谈
      gfxCount:'0',
      // 风险企业总数 -- !建议关注
      fxCount:0,
      // 重点监测企业数 -- 建议核查
      zdjcCout:'0'
    }
  },
  components: {
    caseinfo,
    echartsline
  },
  methods:{
    getMap_newInfoSucc (res) {
      // console.log("风险企业地区分布");
      res = res.data;
      this.totalNum = res.totalNumMap[0].totalNum;
      var data = {
        name:[],
        value:[]
      };
      // var gfxCount = 0;
      res.allCaseList.map(function(item,index,arr){
        data.name.push(item.dom);
        data.value.push(item.count.count);
        // gfxCount += item.count.count;
        return data;
      })
      // this.gfxCount = gfxCount;
      // 风险企业地区分布
       sessionStorage.setItem('dqfb',JSON.stringify(data)); 
       sessionStorage.setItem('dqfb-map',JSON.stringify(res.caseList)); 
    },
    getMap_newInfo(){
      // 风险企业地区分布
      axios.post('/api/index/map_new',
      {headers:{
        'Content-Type': 'application/x-www-form-urlencoded'  //请求头
        }
      },
      {
        params:{
            //参数 
            prov:'湖北',
            city:'武汉市',
            cityArea:''
        }
      })
      .then(this.getMap_newInfoSucc)
      .catch(function (error) {
          console.log(error)
      })
    },
    getHyInfoSucc(res){
      // console.log("风险企业行业分布");
      res = res.data;
      sessionStorage.setItem('hyfb',JSON.stringify(res)); 
    },
    getHyInfo(){
      // 风险企业行业分布
      axios.post('/api/index/hyfl',
      {headers:{
        'Content-Type': 'application/x-www-form-urlencoded'  //请求头
        }
      },
      {
        params:{
            //参数 
            prov:'湖北',
            city:'武汉市',
            cityArea:'',
            flag:'true',
            title:''
        }
      })
      .then(this.getHyInfoSucc)
      .catch(function (error) {
          console.log(error)
      })
    },
    // 分级预警
    getFjyjInfo(){
      axios.post('/api/index/echartPie_new',
      {headers:{
        'Content-Type': 'application/x-www-form-urlencoded'  //请求头
        }
      },
      {
        params:{
            //参数 
            prov:'湖北',
            city:'武汉市',
            cityArea:''
        }
      })
      .then(this.getFjyjInfoSucc)
      .catch(function (error) {
          console.log(error)
      })
    },
    getFjyjInfoSucc(res){
      // console.log('分级预警');
      // 风险企业总数 -- !建议关注
      // 重点监测企业数 -- 建议核查
      // 高风险企业数  -- 建议约谈
      var totalCount = 0;
      res = res.data;
      for(var k in res){
        if(k != '企业异常名单'){
            totalCount += Number(res[k]);
        }  
      }
      this.gfxCount = res['高风险预警'];
      this.fxCount = totalCount-Number(res['正常监测']);
      this.zdjcCout = res['重点监测'];
      var dataLists = {
			'qmpc':{value:res['正常监测'],Fvalue:totalCount},//建议关注
			'zcjc':{value:res['重点监测'],Fvalue:totalCount},//建议核查
			'gfxyj':{value:res['高风险预警'],Fvalue:totalCount},//建议约谈
			'zdjc':{value:res['调查介入'],Fvalue:totalCount},//建议移交线索
			'dcjr':{value:res['P2P企业异常名单'],Fvalue:totalCount},//风险爆发
			'ycmd':{value:res['立案企业名单'],Fvalue:totalCount}//立案侦查
    };
    sessionStorage.setItem('fjyj',JSON.stringify(dataLists));
    }
    
  },
  mounted:function(){
    // sessionStorage.clear()
    this.getMap_newInfo();
    this.getHyInfo();
    this.getFjyjInfo();

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
