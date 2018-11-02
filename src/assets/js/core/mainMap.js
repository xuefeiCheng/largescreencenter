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
require('echarts/lib/component/tooltip')
require('echarts/lib/component/axisPointer')
require('echarts/lib/component/polar')
require('echarts/lib/component/geo')
require('echarts/lib/component/parallel')
require('echarts/lib/component/singleAxis')
require('echarts/lib/component/brush')
require('echarts/lib/component/calendar')
require('echarts/lib/component/title')
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
drewWuhanMap.drewWuhanMap();
var drawHeatmap = function() {
	// function echartMap () {
    /*$("#mainMap").css({"height":window.innerHeight * 0.75});*/
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
		"新洲区":[114.80,30.85],
		"北京华赢凯来资产管理有限公司":[114.7904,30.85],
		"善林（上海）金融信息服务有限公司":[114.18 ,30.3902],
		"武汉硕维金融服务有限公司":[114.0312 ,29.598],
		"宁夏云数贸贸易有限公司":[114.3310,30.5227],
		"珠海横琴新区盖网科技发展有限公司":[113.5548,30.1192]
	  }
	
	var BJData = [
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'硚口区',value:95}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'武昌区',value:90}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'汉阳区',value:80}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'东西湖区',value:70}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'江夏区',value:60}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'江夏区',value:50}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'新洲区',value:40}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'蔡甸区',value:30}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'江岸区',value:20}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'新洲区',value:10}]
	];
	var SHData = [
		[{name:'善林（上海）金融信息服务有限公司'},{name:'蔡甸区',value:95}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'江岸区',value:90}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'江岸区',value:80}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'新洲区',value:70}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'蔡甸区',value:60}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'新洲区',value:50}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'新洲区',value:40}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'汉阳区',value:30}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'武昌区',value:20}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'蔡甸区',value:10}]
	];
	var SXData = [
		[{name:'武汉硕维金融服务有限公司'},{name:'蔡甸区',value:95}],
		[{name:'武汉硕维金融服务有限公司'},{name:'武昌区',value:90}],
		[{name:'武汉硕维金融服务有限公司'},{name:'新洲区',value:80}],
		[{name:'武汉硕维金融服务有限公司'},{name:'新洲区',value:70}],
		[{name:'武汉硕维金融服务有限公司'},{name:'武昌区',value:60}],
		[{name:'武汉硕维金融服务有限公司'},{name:'武昌区',value:50}],
		[{name:'武汉硕维金融服务有限公司'},{name:'武昌区',value:40}],
		[{name:'武汉硕维金融服务有限公司'},{name:'武昌区',value:30}],
		[{name:'武汉硕维金融服务有限公司'},{name:'蔡甸区',value:20}],
		[{name:'武汉硕维金融服务有限公司'},{name:'汉阳区',value:10}]
	];
	var OEData = [
		[{name:'宁夏云数贸贸易有限公司'},{name:'汉阳区',value:95}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'武昌区',value:90}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'江岸区',value:80}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'汉阳区',value:70}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'江岸区',value:60}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'汉阳区',value:50}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'江岸区',value:40}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'汉阳区',value:30}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'江岸区',value:20}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'汉阳区',value:10}]
	];
	var ZHdata = [
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'江夏区',value:95}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'汉阳区',value:90}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'汉阳区',value:80}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'汉阳区',value:70}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'江夏区',value:60}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'汉阳区',value:50}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'江夏区',value:40}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'汉阳区',value:30}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'江夏区',value:20}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'武昌区',value:10}]
	];
	var companyData = {
		"北京华赢凯来资产管理有限公司":{"mScore":85,"riskDescribe":"1. 存在经营异常。2.存在行政处罚。<br>3.资金去向不透明。4.未在基金业协会备案。<br>5.未向投资人风险提示。6.违规经营。"},
		"善林（上海）金融信息服务有限公司":{"mScore":79,"riskDescribe":"1.存在行政处罚。2.涉嫌自担保。<br>3.涉嫌构建资金池。4.信息披露不透明。<br>5.子公司涉嫌非法集资。"},
		"武汉硕维金融服务有限公司":{"mScore":72,"riskDescribe":"1.经营异常。2.承诺本息保障。<br>3.涉嫌构建资金池。4.警方已介入调查。<br>5.提现困难。6.涉嫌自融自担保。"},
		"宁夏云数贸贸易有限公司":{"mScore":87,"riskDescribe":"1.涉嫌非法传销。2.存在涉诉信息。<br>3.存在大量网络投诉。4.创办人被捕。<br>5.高息利诱。6.涉嫌虚假夸大宣传。"},
		"珠海横琴新区盖网科技发展有限公司":{"mScore":75,"riskDescribe":"1.涉嫌利用原始股的方式诈骗。2.涉嫌传销。<br>3.虚假宣传。"},
	}
	var convertData = function (data) {
		/* 公司 */
		/*
		[{name: "北京华赢凯来资产管理有限公司"}
		{name: "上海", value: 95}]
		*/
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
	var color = ['#ffa022', '#46bee9',"#f37e7f","#0da6f6","#0da6f6"];
	var series = [];
	var len = 0;
	var serdata = [['北京华赢凯来资产管理有限公司', BJData], ['善林（上海）金融信息服务有限公司', SHData],["武汉硕维金融服务有限公司",SXData],["宁夏云数贸贸易有限公司",OEData],["珠海横琴新区盖网科技发展有限公司",ZHdata],];
	serdata.forEach(function (item, i) {
		series.push({
        	name: item[0],
        	type: 'effectScatter',
        	coordinateSystem: 'geo',
        	zlevel: 2,
			tooltip: {
				/*show:true,
				trigger: 'item',*/

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
        	showEffectOn: 'render',
        	itemStyle: {
				normal: {
					color: color[i]
				}
        	},
			data: [{
				name: item[0],
				value: geoCoordMap[item[0]]
			}]
    	},{
			name: item[0],
			type: 'lines',
			zlevel: 1,
			effect: {
				show: true,
				period: 6,
				trailLength: 0.7,
				color: '#fff',
				symbolSize: 3
			},
			lineStyle: {
				normal: {
					color: color[i],
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
					opacity: 0.4,
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
					color: color[i]
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
	console.log(series3);
	
		
	//console.log(series);
	// var rltData = [{
	// 	name: '湖北',
    // 	value: 850.43
	// }, {
	// 	name: '北京',
	// 	value: 54.30
	// }, {
    // 	name: '新疆',
    // 	value: 50.63
	// }, {
    // 	name: '广西',
    // 	value: 74.46
	// }, {
    // 	name: '黑龙江',
    // 	value: 138.39
	// }]
	
	var rltData = [{
		name: '江岸区',
		value: 12,
		level:2
	}, {
		name: '汉阳区',
		value: 12,
		level:1
	}, {
    	name: '东西湖区',
		value: 10,
		level:2
	}, {
    	name: '江夏区',
		value: 5,
		level:3
	}, {
    	name: '黄陂区',
		value: 9,
		level:1
	}]
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
	setMap();
function setMap () {
	var curIndx = 0;
	myChartMap.setOption({
		title:{
			text:"风险企业地图分布",
			textStyle:{
				color:"#fff",
				fontSize:26,
			},
			// left:350,
			left:150,
			top:100
		},
		tooltip:{
			trigger: 'item',
			formatter: function(params) {
				// console.log('---------------')
				// console.log(params)
				var toolTiphtml = ""
				 rltData.map(function(ele){
					if(params.name == ele.name){
						toolTiphtml += ele.name+":<br/>"+"数量："+ele.value
						return	toolTiphtml
					}else{
						return null
					}
				})
				console.log(toolTiphtml)
				return toolTiphtml
				// console.log(result)
				// return  result
				// return '新疆:<br>文科:36<br>理科:31<br>'
				/*if (typeof(params.value)[2] == "undefined") {
					var toolTiphtml = ''
					for(var i = 0;i<toolTipData.length;i++){
						if(params.name==toolTipData[i].name){
							toolTiphtml += toolTipData[i].name+':<br>'
							for(var j = 0;j<toolTipData[i].value.length;j++){
								toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
							}
						}
					}
					console.log(toolTiphtml)
					// console.log(convertData(data))
					return toolTiphtml;
				} else {
					var toolTiphtml = ''
					for(var i = 0;i<toolTipData.length;i++){
						if(params.name==toolTipData[i].name){
							toolTiphtml += toolTipData[i].name+':<br>'
							for(var j = 0;j<toolTipData[i].value.length;j++){
								toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
							}
						}
					}
					console.log(toolTiphtml)
					// console.log(convertData(data))
					return toolTiphtml;
				}*/
			}
		},
		/* chm 10.10 显示公司详情 */
	/* 	tooltip: {
			padding: 5,
			backgroundColor: 'rgba(7, 161, 241,0.5)',
			borderWidth: 1,
			formatter:function(obj){
				var companyName = obj.seriesName;
				return '<div style="border-bottom: 1px solid #cccccc;padding-bottom: 5px; margin-bottom: 5px;font-size:20px;">' + companyName + '</div>'
				+ '<div style="text-align:left;margin-top:10px;"><div style="float:left;margin-right:10px;">'+ companyData[companyName].riskDescribe + '</div>'
				+ '<div style="float:left;width:70px;height:80px;text-align:center;border:1px solid #fba430;background:#fba430;"><div>冒烟指数</div><div style="font-size:26px;margin-top:14px;">' + companyData[companyName].mScore + '</div></div></div>';
			}
		}, */

	
		geo: {
			map: '武汉',
		/* 	label: {
				emphasis: {
					show: false
				}
			}, */
			label: {
                normal: {
                    show: true,
                    textStyle: {
						color: '#fff',
						fontSize:16
                    }
                },
                emphasis: {
                    textStyle: {
						color: '#fff',
						fontSize:16
                    }
                }
			},
			/* 是否开启鼠标缩放和平移漫游 */
			// roam: false,
			roam: true,
			zoom:1.2,
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
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1, 
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
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
		/* chm 10。10 */
		/* 字母公司关系 */
		// series:(function(){
		
		// 	var res = [];
		// 	var len = -1;
		// 	while (len++ < series3.length - 1) {
		// 		if (ifSelecte(len)) {
		// 			return series3[len];
		// 		}
		// 		/*res.push({
		// 			name: rltData[len].name,
		// 			value: rltData[len].value,
		// 			selected: ifSelecte(len)
		// 		});*/
		// 	};
			
		// 	  /*  return res;*/
			
		// })()
		/* chm 坐标圆心 */
		series:[{
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
                normal: {
                    color: function(params){
                        return levelColorMap[params.value[3]];
                    },
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: handleEvents.initSeriesData(rltData)
		}]
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
var curIndx = 0;

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