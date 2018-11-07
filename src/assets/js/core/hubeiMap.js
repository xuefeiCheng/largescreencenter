// caseInfo.drawHeatmap = function() {
// 	echartMap();
// };

let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
require('echarts/lib/chart/scatter')
require('echarts/lib/chart/radar')
require('echarts/lib/chart/map')
require('echarts/lib/chart/treemap')
require('echarts/lib/chart/graph')
require('echarts/lib/chart/gauge')
require('echarts/lib/chart/funnel')
require('echarts/lib/chart/parallel')
require('echarts/lib/chart/sankey')
require('echarts/lib/chart/boxplot')
require('echarts/lib/chart/candlestick')
require('echarts/lib/chart/effectScatter')
require('echarts/lib/chart/lines')
require('echarts/lib/chart/heatmap')
require('echarts/lib/chart/pictorialBar')
require('echarts/lib/chart/themeRiver')
require('echarts/lib/chart/custom')
require('echarts/lib/component/graphic')
require('echarts/lib/component/grid')
require('echarts/lib/component/legendScroll')
require('echarts/lib/component/axisPointer')
require('echarts/lib/component/polar')
require('echarts/lib/component/geo')
require('echarts/lib/component/parallel')
require('echarts/lib/component/singleAxis')
require('echarts/lib/component/brush')
require('echarts/lib/component/calendar')
require('echarts/lib/component/dataZoom')
require('echarts/lib/component/visualMap')
require('echarts/lib/component/markPoint')
require('echarts/lib/component/markLine')
require('echarts/lib/component/markArea')
require('echarts/lib/component/timeline')
require('echarts/lib/component/toolbox')
require('zrender/lib/vml/vml')

// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import drewWuhanMap from '@/assets/js/wuhanMap.js'
import {cutStringByKey,cutString} from '@/assets/js/totalMathods.js'
drewWuhanMap.drewWuhanMap();
var drawHeatmap = function() {
	var myChartMap = echarts.init(document.getElementById('case-map'));
	var geoCoordMap = {
        "江岸区":[114.30 ,30.60],
        "江汉区":[114.27 ,30.60],
        "硚口区":[114.27 ,30.57],
        "汉阳区":[114.27 ,30.55],
        "武昌区":[114.30,30.57],
        "青山区":[114.38 ,30.63],
        "洪山区":[114.33,30.50],
        "东西湖区":[114.13 ,30.62],
        "汉南区":[114.08 ,30.32],
        "蔡甸区":[114.03 ,30.58],
        "江夏区":[114.32,30.35],
        "黄陂区":[114.37 ,30.87],
		"新洲区":[114.80,30.85]
	  };
	  var rltData = [
		  {name: '江岸区',value: 12,level:2},
		  {name: '江汉区',value: 12,level:1}, 
		  {name: '硚口区',value: 10,level:2}, 
		  {name: '汉阳区',value: 5,level:3},
		  {name: '武昌区',value: 9,level:1},
		  {name: '青山区',value: 12,level:2},
		  {name: '洪山区',value: 12,level:2},
		  {name: '东西湖区',value: 12,level:2},
		  {name: '汉南区',value: 12,level:2},
		  {name: '蔡甸区',value: 12,level:2},
		  {name: '江夏区',value: 12,level:2},
		  {name: '黄陂区',value: 12,level:2},
		  {name: '新洲区',value: 12,level:2},
		  {name: '东湖高新区',value: 12,level:2},
		  {name: '经济技术开发区',value: 12,level:2},
		  {name: '屯口区',value: 12,level:2}
		]
	  var companyData = {};
	  var companyPosition = {};
	  var serdata =[];
	  var innerArr = [];
	  var middeleArr = [];
	//   var serdata = 
	// 	[
	// 		[
	// 			'硕利链付宝（武汉）网络科技有限公司', 
	// 			[
	// 				[{name:'硕利链付宝（武汉）网络科技有限公司'}, {name:'蔡甸区',value:95}]
	// 			]
	// 		],
	// 		[
	// 			'深圳市佰仟金融服务有限公司武汉分公司', 
	// 			[[{name:'深圳市佰仟金融服务有限公司武汉分公司'},{name:'蔡甸区',value:95}]]],
	// 		[
	// 			"北京华赢凯来资产管理有限公司武汉第一分公司",
	// 			[[{name:'北京华赢凯来资产管理有限公司武汉第一分公司'},{name:'蔡甸区',value:95}]]],
	// 		[
	// 			"深圳前海全民通金融资本控股集团有限公司武昌分公司",
	// 			[[{name:'深圳前海全民通金融资本控股集团有限公司武昌分公司'},{name:'汉阳区',value:95}]]],
	// 		[
	// 			"武汉三三玉茶坊企业管理有限公司",
	// 			[[{name:'武汉三三玉茶坊企业管理有限公司'},{name:'汉阳区',value:95}]]]
	// 	];
	  const dataObjBar = JSON.parse(sessionStorage.getItem('dqfb-map'));
	//   console.log(dataObjBar);
	  for(var k in geoCoordMap){
		// console.log(k)
		dataObjBar.forEach(function(currentValue, index, arr){
			if(currentValue._id == k){
				if(currentValue.resObjs.length!=0){
					// resObjs中多个企业 暂时取第一家
					var currentValue = currentValue.resObjs[0];
						var resultDData = cutStringByKey(currentValue.abstract,['企业主要风险点：','企业主要风险点为：','风险点：','风险点:']);
				// currentValue.abstract = currentValue.abstract=='' ? '暂无数据' :currentValue.abstract
				currentValue.abstract = resultDData == '' ? currentValue.abstract : resultDData;
				companyData[currentValue.name] = {
					mScore:currentValue.score,
					// riskDescribe:cutString(currentValue.abstract,50)
					// 文本 输入有换行 则展示换行
					riskDescribe:currentValue.abstract.replace(/\n/g, "<br/>")
				}
				companyPosition[currentValue.name] = geoCoordMap[k];
				// serdata1.push()
				innerArr=[ [{name:currentValue.name},{name:'蔡甸区',value:95}] ];
				middeleArr = [currentValue.name,innerArr];
				serdata.push(middeleArr)
			}
		}
		})
	  }


	/**
	 * 
	 * 
					currentValue.resObjs.forEach(function(cur,i,item){
						console.log(cur);
						var resultDData = cutStringByKey(cur.abstract,['企业主要风险点：','企业主要风险点为：','主要风险点:','该企业主要风险点：']);
				// currentValue.abstract = currentValue.abstract=='' ? '暂无数据' :currentValue.abstract
				cur.abstract = resultDData == '' ? cur.abstract : resultDData;
				companyData[cur.name] = {
					mScore:cur.score,
					// riskDescribe:cutString(currentValue.abstract,50)
					// 文本 输入有换行 则展示换行
					riskDescribe:cur.abstract.replace(/\n/g, "<br/>")
				}
				companyPosition[cur.name] = geoCoordMap[k];
				// serdata1.push()
				innerArr=[ [{name:cur.name},{name:'蔡甸区',value:95}] ];
				middeleArr = [cur.name,innerArr];
				serdata.push(middeleArr)
					});
	 * 
	 * 
	 */
	//   var companyPosition = {
    //     "硕利链付宝（武汉）网络科技有限公司":[114.7904,30.85],
    //     "深圳市佰仟金融服务有限公司武汉分公司":[114.18 ,30.3902],
    //     "北京华赢凯来资产管理有限公司武汉第一分公司":[114.32,30.35],
    //     "深圳前海全民通金融资本控股集团有限公司武昌分公司":[114.3310,30.5227],
    //     "武汉三三玉茶坊企业管理有限公司":[114.08 ,30.32]
	//   }
	geoCoordMap = $.extend({}, geoCoordMap, companyPosition);
	// 地图 tip展示 数据
	// var companyData = {
	// 	"硕利链付宝（武汉）网络科技有限公司":{"mScore":75,"riskDescribe":"1、帮呗经营模式涉嫌传销2.涉嫌庞氏骗局<br> 3.涉嫌违规经营<br> 4.存在经营异常"},
	// 	"深圳市佰仟金融服务有限公司武汉分公司":{"mScore":74,"riskDescribe":"1.频繁变更工商信息2.存在涉诉信息3.存在失信被执行人信息<br> 4.网曝涉嫌诈骗"},
	// 	"北京华赢凯来资产管理有限公司武汉第一分公司":{"mScore":59,"riskDescribe":"1.存在经营异常,通过登记的住所或者经营场所无法联系；<br> 2.存在大量负面舆情"},
	// 	"深圳前海全民通金融资本控股集团有限公司武昌分公司":{"mScore":73,"riskDescribe":"1.总公司存在涉诉信息2.总公司涉嫌向不特定对象宣传募集资金<br> 3.总公司银监异常 4.建议锁定<br> 5.机制不健全6.总公司存在行政处罚"},
	// 	"武汉三三玉茶坊企业管理有限公司":{"mScore":85,"riskDescribe":"1.涉嫌利用原始股的方式诈骗。2.涉嫌传销。<br>3.虚假宣传。"},
	// 	}
	var convertData = function (data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
				res.push([{
					coord: fromCoord,
				}, {
					coord: toCoord
				}]);
			}
		}
		return res;
	};
	var levelColorMap = {
        '1': 'rgba(241, 109, 115, .8)',
        '2': 'rgba(255, 235, 59, .7)',
        '3': 'rgba(147, 235, 248, 1)'
    };
	var handleEvents = {
        initSeriesData: function(data){
            var temp = [];
            for(var i = 0;i < data.length;i++){
                var geoCoord = geoCoordMap[data[i].name];
                if(geoCoord){
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value, data[i].level)
                    });
                }
            };
            return temp;
        },
    }
	var color = ['#ffa022',"#f37e7f","#cddc39","#ff5722","#b73e43"];
	var series = [];
	var len = 0;
	serdata.forEach(function (item, i) {
		series.push({
        	name: item[0],
        	type: 'effectScatter',
        	coordinateSystem: 'geo',
        	zlevel: 2,
			tooltip: {
				/*show:true,
				trigger: 'item',*/
//				formatter: function() {
//					/*var value = obj.value;*/
//					return '<div style="border-bottom: 1px solid #555;padding-bottom: 5px; margin-bottom: 5px;">' + item[0] + '</div>'
//						+ '行业风险：' + item[0] + '<br>'
//						+ '占比：' + item[0] + ' %<br>'
//						+ '支出：' + item[0] + ' 千亿 $<br>';
//				}
			},
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: false,
					position: 'right',
					formatter: '{b}',
					textStyle:{
						fontSize:24
					}
				}
			},
			symbolSize: function(val) {
				return 10;
			},
        	 type: 'effectScatter',
            // type: 'scatter',
            coordinateSystem: 'geo',
            // symbol: 'diamond',
            showEffectOn: 'render',
              //波纹效果
            rippleEffect: {
                period: 15,
                scale: 6,
                brushType: 'fill'
                // brushType: 'stroke'
            },
            hoverAnimation: true,
        	itemStyle: {
        		// 在此处 可设置 动态线条的 颜色 为透明色
				normal: {
					color: color[i]
				}
        	},
			data: [{
				name: item[0],
				value: geoCoordMap[item[0]].concat([100])
			}]
    	},{
			name: item[0],
			type: 'lines',
			zlevel: 1,
			effect: {
				show: true,
				period: 6,
				trailLength: 0.7,
				color: '#3330',
				symbolSize: 3
			},
			lineStyle: {
				normal: {
					color: '#3330',
					width: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		},
		{
			name: item[0],
			type: 'lines',
			zlevel: 2,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: "none",
				symbolSize: 15
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 1,
					opacity: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		},
		{
			name: item[0],
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
			symbolSize: function (val) {
				return 5;
			},
			itemStyle: {
				normal: {
					color: "#3330"
				}
			},
			data: item[1].map(function (dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});
	//var series1 = [series[0],series[1],series[2]];
	//var series2 = [series[3],series[4],series[5]];
	//var series4 = [series[6],series[7],series[8]];
	var series3 = [];
	var series5 = [];
	series.forEach(function(item,i){
		series5.push(item);
		if ((i +1) % 4 == 0) {
			series3.push(series5);
			series5 = [];
		}
	});
	// console.log(series3);
	//console.log(series);
var curIndx = 0;
timeTicket();
setInterval(timeTicket, 4000);
function timeTicket() {
	var customSettings = [];
    customSettings.push(
        {name: '江岸区',itemStyle: {normal: {areaColor:"#2e52df"}}},
        {name: '江汉区',itemStyle: {normal: {areaColor:"#54a5fd"}}},
        {name: '硚口区',itemStyle: {normal: {areaColor:"#4685fe"}}},
        {name: '汉阳区',itemStyle: {normal: {areaColor:"#519ffe"}}},
        {name: '武昌区',itemStyle: {normal: {areaColor:"#304fff"}}},
        {name: '青山区',itemStyle: {normal: {areaColor:"#54a5fd"}}},
        {name: '洪山区',itemStyle: {normal: {areaColor:"#4077fe"}}},
        {name: '东西湖区',itemStyle: {normal: {areaColor:"#5bb3fd"}}},
        {name: '汉南区',itemStyle: {normal: {areaColor:"#5bb3fd"}}},
        {name: '蔡甸区',itemStyle: {normal: {areaColor:"#4179fe"}}},
        {name: '黄陂区',itemStyle: {normal: {areaColor:"#0e62e2"}}},
        {name: '江夏区',itemStyle: {normal: {areaColor:"#304fff"}}},
        {name: '新洲区',itemStyle: {normal: {areaColor:"#4685fe"}}},
        {name: '屯口区',itemStyle: {normal: {areaColor:"#304fff"}}}
    )
    myChartMap.setOption({
		title:{
			text:"风险企业地图分布",
			textStyle:{
				color:"#fff",
				fontSize:26,
			},
			left:150,
            top:100
		},
		tooltip: {
			padding: 5,
			// rgba(234, 166, 38,0.9)
			backgroundColor: '#b56f11',
			/*borderColor: '#777',*/
			borderWidth: 1,
			formatter:function(obj){
				var companyName = obj.seriesName;
				return '<div style="border-bottom: 1px solid #cccccc;padding-bottom: 5px; margin-bottom: 5px;font-size:20px;">' + companyName + '</div>'
				// width:500px;overflow:hidden;
				+ '<div style="text-align:left;margin-top:10px;"><div style="width:598px;white-space: pre-wrap;word-wrap: break-word;word-break: break-all;float:left;margin-right:10px;">'+ companyData[companyName].riskDescribe + '</div>'
				+ '<div style="float:right;width:70px;height:80px;text-align:center;border:1px solid #fba430;background:#fba430;"><div>冒烟指数</div><div style="font-size:26px;margin-top:14px;">' + companyData[companyName].mScore + '</div></div></div>';
			}
		},
		geo: {
			map: '武汉',
			label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize:16
                    }
                },
                emphasis: {
                	show: false,
                    textStyle: {
                        color: '#fff',
                        fontSize:16
                    }
                }
            },
			regions: customSettings,
			// 地图控制 是否缩放+拖拽 move 和 scale
			roam: false,
			zoom:1.1,
			itemStyle: {
                normal: {
                    // borderColor: 'rgba(147, 235, 248, 1)',
                    borderColor:'#006be1',
                    // borderColor:'rgba(59,152,197,1)',
                    borderWidth: 2,
                    areaColor: {
                        // type: 'radial',
                        type: 'linear',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0, 
                            color: 'rgba(9, 21, 61, 0.3)' // 0% 处的颜色
                        }, {
                            offset: 1, 
                            color: 'rgba(9, 21, 61, .5)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    // shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowColor: 'rgba(67,165,217, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                    // shadowBlur: 90
                },
                emphasis: {
                    // areaColor: '#389BB7',
                    // areaColor:"rgba(59,152,197,1)",
                    areaColor:'rgba(0,11,55,1)',
                    borderWidth: 0
                }
            /* 
                normal: {
                    areaColor: 'rgba(50, 60, 72,0)',
                    borderColor: '#3b98c5',
                    borderWidth:4,
                },
                emphasis: {
                    areaColor: 'rgba(50, 60, 72,0)'
                } */
            }
		},
		series:(function(){
			var res = [];
			var len = -1;
			while (len++ < series3.length - 1) {
				if (ifSelecte(len)) {
					return series3[len];
				}
				res.push({
					name: rltData[len].name,
					value: rltData[len].value,
					selected: ifSelecte(len)
				});
			}
              /*  return res;*/
			
		})()
    },true);
	var len1 = -1;
	while (len1++ < series3.length - 1) {
		if (ifSelecte(len1)) {
			dispatch(myChartMap,series3[len1][0].name);
		}
	}
	function dispatch(myChartMap,name) {
		myChartMap.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			//name:series3[len1][0].name
			name:name
		});
	}
    var flag = false;
    function ifSelecte(num) {
        if (num == curIndx) {
            flag = true
        } else {
            flag = false
        }
        return flag;
    }
    curIndx = (curIndx + 1) % series3.length;
	}

}
/* echarts Map click to bMap */
function echartMapClick (param) {
	if (param.name != "") {
		bMap(param.name);
		return false;
	} else {
		return false;
	}
}

export default {
	drawHeatmap
}