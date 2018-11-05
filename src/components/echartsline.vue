<template>
  <div class="caseinfo-content-wrapper">
    <div class="case-left">
      <!-- case-bar -->
      <div class="case-bar">
        <div class="title">风险企业地区分布</div>
        <div id="bar-content" class="bar-content"></div>
      </div>
      <!-- case-line -->
      <div class="case-line">
      <!-- <div class="line-container"> -->
        <div class="title">风险企业行业分布</div>
        <div id="line-content" class="line-content"></div>
      <!-- </div> -->
      </div>
      </div>
      <div class="case-center">
        <div class="monit-num" style="left:0;height:18%;">
          <div class="allnum-bg">
            <div class='allnum-inner-bg'>
              <div class="allnum-title">信息总量</div>
              <div class="allnum-content">
                <h1 style='display:inline-block;padding-right:5px;'>{{allnum | NumFormat}}</h1>
                <span class='allnum-font'>条</span>
              </div>
            </div>
          </div>
          <!-- <div class="" style="height:150%;width:18%;float:left;">
            <div class="bg-monitor">49909</div>
            <div class="monitor-title">监测企业总数</div>
          </div>
          <div class="" style="height:150%;width:18%;float:left;margin-left:40px;">
            <div class="bg-monitor">709</div>
            <div class="monitor-title">风险企业总数</div>
          </div>
          <div class="" style="height:150%;width:18%;float:left;margin-left:40px;">
            <div class="bg-monitor">59</div>
            <div class="monitor-title">高风险企业数</div>
          </div>
          <div class="" style="height:150%;width:18%;float:left;margin-left:40px;">
            <div class="bg-monitor">221</div>
            <div class="monitor-title">重点监测企业总数</div>
          </div> -->
        </div>
          <!-- case-map -->
        <div id="case-map" class="case-map" style="width: 100%;height: 85%;"></div>
      </div>

      <!-- 右侧部分 -->
        <div class="case-right">

          <!-- 右侧上部 -->
          <div class="case-pie"><!-- case-pie开始 -->
            <div class="riskCount">
              <div class="title" style="top:-50px;">监测统计</div>
              <!-- 第一行 -->
              <div class="row" style="height:50%;position:relative;">
               <div class="monit-num-1">
                  <div class="" style="height:150%;width:32%;float:left;margin-left:40px;">
                    <div class="bg-monitor-1">{{totalNum}}</div>
                    <div class="monitor-title-1">监测企业总数</div>
                  </div>
                  <div class="" style="height:150%;width:32%;float:left;margin-left:40px;">
                    <div class="bg-monitor-1">{{fxCount}}</div>
                    <div class="monitor-title-1">风险企业总数</div>
                  </div>
                </div>
              </div>
              <!-- 第二行 -->
              <div class="row" style="height:50%;position:relative;">
                <div class="monit-num-1">
                  <div class="" style="height:150%;width:32%;float:left;margin-left:40px;">
                    <div class="bg-monitor-1">{{zdjcCout}}</div>
                    <div class="monitor-title-1">重点监测企业数</div>
                  </div>
                  <div class="" style="height:150%;width:32%;float:left;margin-left:40px;">
                    <div class="bg-monitor-1">{{gfxCount}}</div>
                    <div class="monitor-title-1">高风险企业数</div>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- case-pie结束 -->

          <!-- 右侧中部 -->
          <div class="case-pie">
            <!-- 2018-11-05  height: 86.8%  style='min-height:280px'-->
            <div class='risktrend noBackImg marginTop56R' style="height: 103%">
              <div class="title">企业风险走势</div>
              <div class="risktrend" id="risktrend" style='min-height:280px'></div>
            </div>
          </div>

          <!-- 右侧底部 -->
          <div class="case-pie">
            <!-- <div class="title">企业规模与风险</div>
            <div class="industryTrends" id="industryTrends"></div> -->
            <div class='industryTrends noBackImg'>
              <div class="riskCount">
                <div class="title" style="top:-50px;">分级预警</div>
                <div class="row itemRow">
                  <!-- 全面排查 -->
                  <!-- 2018 10 25 更改 28% 30%-->
                  <div class="itemFloat" >
                    <div id="qmpc" style="height:60%"></div>
                    <span class="itemFont">建议关注</span>
                  </div>
                  <!-- 正常监测 -->
                  <div class="itemFloat" >
                    <div id="zcjc" style="height:60%"></div>
                    <span class="itemFont">建议核查</span>
                  </div>
                  <!-- 高风险预警 -->
                  <div class="itemFloat" >
                    <div id="gfxyj" style="height:60%"></div>
                    <span class="itemFont">建议约谈</span>
                  </div>
                </div>
                <div class="row itemRow">
                  <!-- 重点监测 -->
                  <div class="itemFloat">
                    <div id="zdjc" style="height:60%"></div>
                    <span class="itemFont">建议移交线索</span>
                  </div>
                  <!-- 调查介入 -->
                  <div class="itemFloat">
                    <div id="dcjr" style="height:60%"></div>
                    <span class="itemFont">风险爆发</span>
                  </div>
                  <!-- 异常名单 -->
                  <div class="itemFloat">
                    <div id="ycmd" style="height:60%"></div>
                    <span class="itemFont">立案侦查</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <div class="caseinfo-footer">
        <div class="timer"></div>
      </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import setTime from '@/assets/js/time.js'
import axios from 'axios'
import {getRandom} from '@/assets/js/totalMathods.js'
// drawIndustryTrends
// drawHeatmap
import {drawRiskNum,drawBar,drawLine,drawRiskTrend,drawIndustryTrends} from '@/assets/js/echartsMap.js'
//import {drawTest} from '@/assets/js/scatter.js'
import drawHeatmap from '@/assets/js/core/hubeiMap.js'
export default {
  name: 'caseinfo',
  props:{
    totalNum:[String],
    gfxCount:[String],
    fxCount:[Number],
    zdjcCout:[String]
  },
  data:function(){
    return{ 
      allnum:2457891//信息总量  
    }
  },
  filters: {
     NumFormat: function (value) {
        if(value!=null){
          value = Number(value);
          return value.toFixed(0).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
        }else{
          return ;
        }
      }
  },
  computed:{},
  methods:{
      setAllNum1:function(){
      this.allnum= getRandom({
					base:2457891,
					max:'',
					min:'',
					count:1,
					scope:10
        }).toString()
    }
  },
  mounted:function(){
    setInterval(this.setAllNum1, 4*1000);
    setTime.setTime();
    setInterval(setTime.setTime, 1000);
    drawRiskNum();
    drawBar();
    drawLine();
    drawRiskTrend();
    // 企业规模与风险
    //drawIndustryTrends();
    //drawTest();
    drawHeatmap.drawHeatmap();
  },
  updated(){
    drawLine();
  }
    
}
</script>


//script
// import echarts from 'echarts'
// import setTime from '@/assets/js/time.js'
// import drawRiskNum from '@/assets/js/core/risknum.js'
// import drawBar from '@/assets/js/core/caseinfo.js'
// import drawLine from '@/assets/js/core/line.js'
// import drawRiskTrend from '@/assets/js/core/riskTrend.js'
// import drawIndustryTrends from '@/assets/js/core/industryTrends.js'
// import drawHeatmap from '@/assets/js/core/mainMap.js'
// import axios from 'axios'

// export default {
//   name: 'echartsline',
//   data(){
//     return{
      
//     }
//   },
//   created(){
//     console.log('========')
//     console.log(this.$store)
//   },
//   methods:{
//      getInfo () {
//        console.log('hhhhjjjh')
//       axios.get('http://localhost:8080/static/mock/test.json')
//         .then(this.getInfoSucc)
//         .catch(function (error) {
//           console.log(error)
//         })
//     },
//     getInfoSucc (res) {
//       res = res.data
//       console.log(res);
//       console.log(this.$store.city)
//       this.$store.commit('toState',res);
//       // if (res.ret && res.data) {
//       //   const data = res.data
//       //   // this.swiperList = data.swiperList
//       //   // this.iconList = data.iconList
//       //   // this.recommendList = data.recommendList
//       //   // this.weekendList = data.weekendList
//       // }
//     }
//   },
//   mounted:function(){
//     setTime.setTime();
//     setInterval(setTime.setTime, 1000);
//     drawRiskNum.drawRiskNum();
//     drawBar.drawBar();
//     drawLine.drawLine();
//     drawRiskTrend.drawRiskTrend();
//     drawIndustryTrends.drawIndustryTrends();
//     drawHeatmap.drawHeatmap();
//     console.log("echartsline组件中-->"+this.$store);
//   }
    
// }
// </script>

<style scoped>
.noBackImg{
  background-image: none !important;
}
.height30{
  height: 30% !important;
}
.marginTop56R{
  margin-top: -56px !important;
}
.pieRow{
  height:50%;margin-left:30px;
}
.pieFloat{
  text-align:center;height:100%;height:100%;width:30%;float:left;
}
.itemRow{
height:50%;margin-left:30px;
}
.itemFloat{
  text-align:center;height:100%;height:100%;width:30%;float:left;
}
.itemFont{
  font-size:20px;color:#fff
}
</style>
