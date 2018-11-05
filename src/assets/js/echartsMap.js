// 图标 组合在一起
// 出现的问题是 没办法全部导出
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import store from '@/store/index.js'
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

// 引入 水球
import echartsLiquidfill from 'echarts-liquidfill'//在这里引入
// 引入 武汉 基本地图
import drewWuhanMap from '@/assets/js/wuhanMap.js'
drewWuhanMap.drewWuhanMap();
	//风险企业行业分布
	function drawLine () {
		// const data = JSON.parse(sessionStorage.getItem('toState')); // => 返回testKey对应的值
		var myChart = echarts.init(document.getElementById('line-content'));
		//数据集合
		// var dataObj = {
		// 	'classify':['养老机构','金融业','房地产','虚拟理财','其他','电子商务','融资租赁',
		// 			'地方交易所','担保','非金融机构支付服务','保险','民办教育机构','租赁和商务服务业',
		// 			'私募股权投资基金','小额贷款','其他','网络借贷平台','投资咨询'],
		// 	'count':[1,1,1,3,3,4,4,7,7,7,10,11,24,32,32,4,105,134]
		// };
		const dataObj = JSON.parse(sessionStorage.getItem('hyfb'));
		var option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				top:'0',
				left: '-50',
				right: '0',
				bottom: '3',
				containLabel: true 
			},
			xAxis: {
				show:false,
				type: 'value',
				boundaryGap: [0, 0.01]
			},
			yAxis: {
				type: 'category',
				axisLabel:{
					textStyle: {
						color: '#fff',
						"fontSize": 15
					}
				},
				data:dataObj.classify,
				// data: [
				// 	{"value": "养老机构"},
				// 	{"value": "金融业"},
				// 	{"value": "房地产"},
				// 	{"value": "虚拟理财"},
				// 	{"value": "其他"},
				// 	{"value": "电子商务"},
				// 	{"value": "融资租赁"},
				// 	{"value": "地方交易所"},
				// 	{"value": "担保"},
				// 	{"value": "非金融机构支付服务"},
				// 	{"value": "保险"},
				// 	{"value": "民办教育机构"},
				// 	{"value": "租赁和商务服务业"},
				// 	{"value": "私募股权投资基金"},
				// 	{"value": "小额贷款"},
				// 	{"value": "其他"},
				// 	{"value": "网络借贷平台"},
				// 	{"value": "投资咨询"}
					
				//   ],
				splitLine:{
					show:false	
				},
				// axisLine:{
				// 	show:false	
				// },
				axisTick:{
					show:false	
				},
				/* chm 10.15 */
				axisLine: {
	                lineStyle: {
	                    color: '#fff'
	                }
	            },
			},
			series: [
				{
					name: '数量',
					type: 'bar',
					label:{
						normal:{
							show:true,
							position: 'right',
							textStyle:{
								color:"#fff"
							}
						}
					},
					barWidth:13,
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#05a4f7' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#62bef2' // 100% 处的颜色
							}], false)
						},
						emphasis:{
							color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#05a4f7' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#62bef2' // 100% 处的颜色
							}], false)
						}
					},
					data: dataObj.count
					// data: [1,1,1,3,3,4,4,7,7,7,10,11,24,32,32,4,105,134]
				}
			]
		};
		myChart.setOption(option);
	}

	//分级预警
	function drawRiskNum () {
		// 分级预警 数据
		// var dataLists = {
		// 	'qmpc':{value:80,Fvalue:282},
		// 	'zcjc':{value:23,Fvalue:121},
		// 	'gfxyj':{value:42,Fvalue:214},
		// 	'zdjc':{value:51,Fvalue:331},
		// 	'dcjr':{value:62,Fvalue:3113},
		// 	'ycmd':{value:11,Fvalue:131}
		// };
		const dataLists = JSON.parse(sessionStorage.getItem('fjyj'));

		// 全面排查
		var qmpcChart = echarts.init(document.getElementById("qmpc"));
		// 正常监测
		var zcjcChart = echarts.init(document.getElementById("zcjc"));
		// 高风险预警
	    var gfxyjChart = echarts.init(document.getElementById("gfxyj"));
		// 重点监测
		var zdjcChart = echarts.init(document.getElementById("zdjc"));
		// 调查接入
		var dcjrChart = echarts.init(document.getElementById("dcjr"));
		// 异常企业名单
		var ycmdChart = echarts.init(document.getElementById("ycmd"));
	    
		var qmpcOption = {
			grid: {
				top: '2%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				type: 'liquidFill',
				itemStyle: {
					normal: {
						opacity: 0.4,
						shadowBlur: 0,
						shadowColor: 'blue'
					}
				},
				radius: '80%',
				name: 'nnnnn',
				data: [{
					// value: (dataLists.qmpc.value/dataLists.qmpc.Fvalue),
					value:0.7,
					itemStyle: {
						normal: {
							// 53d5ff原始 颜色
							color: '#e207e9',
							opacity: 0.6
						}
					}
				}],
				period: function (value, index) {
					// This function is called four times, each for a data item in series.
					// `value` is 0.6, 0.5, 0.4, 0.3, and `index` is 0, 1, 2, 3.
					return 1000 * index + 1000;
				},
				// background: '#fff',
				background:'rgba(0,0,0,0.1)',
				color: ['#53d5ff'],
				center: ['50%', '50%'],
				backgroundStyle: {
					// 背景颜色
					color: 'rgba(0,0,0,0.1)'
				},
				label: {
					normal: {
						formatter: '',
						textStyle: {
							fontSize: 12
						}
					}
				},
				outline: {
					itemStyle: {
						borderColor: '#86c5ff',
						borderWidth: 0
					},
					borderDistance: 0
				}
			},{
				type: 'pie',
				silent: true,
				radius: ['80%', '100%'],
				label: {
					normal: {
						show: true,
						position: 'center'
					}
				},
				hoverAnimation: false,
				color:'#486d77',
				data: [{
					value: dataLists.qmpc.value,
					name: '',
					label: {
						normal: {
							formatter: '{d} %',
							textStyle: {
								fontSize: 14,
								// color: "rgba(2, 61, 78,0.75)"
								color: "#fff"
							}
						}
					},
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#d51965'
							}, {
								offset: 1,
								color: '#e207e9'
							}]),
							textStyle: {
								fontSize: "10px"
							}
						}
					}
				}, {
					value: dataLists.qmpc.Fvalue,
					name: '',
					label: {
						normal: {
							show: false
						}
					},
					
					itemStyle: {
						normal: {
							color: "rgba(2, 61, 78,0.75)"
						}
					}
					
				}]
			}]
		};
	            
	    var zcjcOption = {
			grid: {
				top: '2%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				type: 'liquidFill',
				itemStyle: {
					normal: {
						opacity: 0.4,
						shadowBlur: 0,
						shadowColor: 'blue'
					}
				},
				radius: '80%',
				name: 'nnnnn',
				data: [{
					// value: (dataLists.qmpc.value/dataLists.qmpc.Fvalue),
					value:0.55,
					itemStyle: {
						normal: {
							color: '#c12e3b',
							opacity: 0.6
						}
					}
				}],
				period: function (value, index) {
					// This function is called four times, each for a data item in series.
					// `value` is 0.6, 0.5, 0.4, 0.3, and `index` is 0, 1, 2, 3.
					return 1000 * index + 1000;
				},
				// background: '#fff',
				background:'rgba(0,0,0,0.1)',
				color: ['#53d5ff'],
				center: ['50%', '50%'],
				backgroundStyle: {
					// 背景颜色
					color: 'rgba(0,0,0,0.1)'
				},
				label: {
					normal: {
						formatter: '',
						textStyle: {
							fontSize: 12
						}
					}
				},
				outline: {
					itemStyle: {
						borderColor: '#86c5ff',
						borderWidth: 0
					},
					borderDistance: 0
				}
			},{
				type: 'pie',
				silent: true,
				radius: ['80%', '100%'],
				label: {
					normal: {
						show: true,
						position: 'center'
					}
				},
				hoverAnimation: false,
				data: [{
					value: dataLists.zcjc.value,
					name: '',
		
					label: {
						normal: {
							formatter: '{d} %',
							textStyle: {
								fontSize: 12,
								color: '#fff'
							}
						}
					},
		
					itemStyle: {
						normal: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#ed7e5b'
								}, {
									offset: 1,
									color: '#c12e3b'
								}]),
								textStyle: {
									fontSize: "10px",
									color: "#fff"
								}
							}
						}
					}
				}, {
					value: dataLists.zcjc.Fvalue,
					name: '',
					label: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							color: "rgba(2, 61, 78,0.75)"
						}
					},
				}]
			}]
		};
		
	     var gfxyjOption = {
			grid: {
				top: '2%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				type: 'liquidFill',
				itemStyle: {
					normal: {
						opacity: 0.4,
						shadowBlur: 0,
						shadowColor: 'blue'
					}
				},
				radius: '80%',
				name: 'nnnnn',
				data: [{
					// value: (dataLists.qmpc.value/dataLists.qmpc.Fvalue),
					value:0.5,
					itemStyle: {
						normal: {
							color: '#60e3f2',
							opacity: 0.6
						}
					}
				}],
				period: function (value, index) {
					// This function is called four times, each for a data item in series.
					// `value` is 0.6, 0.5, 0.4, 0.3, and `index` is 0, 1, 2, 3.
					return 1000 * index + 1000;
				},
				// background: '#fff',
				background:'rgba(0,0,0,0.1)',
				color: ['#53d5ff'],
				center: ['50%', '50%'],
				backgroundStyle: {
					// 背景颜色
					color: 'rgba(0,0,0,0.1)'
				},
				label: {
					normal: {
						formatter: '',
						textStyle: {
							fontSize: 12
						}
					}
				},
				outline: {
					itemStyle: {
						borderColor: '#86c5ff',
						borderWidth: 0
					},
					borderDistance: 0
				}
			},{
				type: 'pie',
				silent: true,
				radius: ['80%', '100%'],
				label: {
					normal: {
						show: true,
						position: 'center'
					}
				},
				hoverAnimation: false,
				data: [{
					value: dataLists.gfxyj.value,
					name: '',
					label: {
						normal: {
							formatter: '{d} %',
							textStyle: {
								fontSize: 12,
								color: '#fff'
							}
						}
					},
		
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#4b7fc9'
							}, {
								offset: 1,
								color: '#60e3f2'
							}]),
							textStyle: {
								fontSize: "10px"
							}
						}
					}
				}, {
					value: dataLists.gfxyj.Fvalue,
					name: '',
					label: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							color: "rgba(2, 61, 78,0.75)"
						}
					}
				}]
			}]
		};
	    var zdjcOption = {
			grid: {
				top: '2%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				type: 'liquidFill',
				itemStyle: {
					normal: {
						opacity: 0.4,
						shadowBlur: 0,
						shadowColor: 'blue'
					}
				},
				radius: '80%',
				name: 'nnnnn',
				data: [{
					// value: (dataLists.qmpc.value/dataLists.qmpc.Fvalue),
					value:0.33,
					itemStyle: {
						normal: {
							color: '#ef5d61',
							opacity: 0.6
						}
					}
				}],
				period: function (value, index) {
					// This function is called four times, each for a data item in series.
					// `value` is 0.6, 0.5, 0.4, 0.3, and `index` is 0, 1, 2, 3.
					return 1000 * index + 1000;
				},
				// background: '#fff',
				background:'rgba(0,0,0,0.1)',
				color: ['#53d5ff'],
				center: ['50%', '50%'],
				backgroundStyle: {
					// 背景颜色
					color: 'rgba(0,0,0,0.1)'
				},
				label: {
					normal: {
						formatter: '',
						textStyle: {
							fontSize: 12
						}
					}
				},
				outline: {
					itemStyle: {
						borderColor: '#86c5ff',
						borderWidth: 0
					},
					borderDistance: 0
				}
			},{
				type: 'pie',
				silent: true,
				radius: ['80%', '100%'],
				label: {
					normal: {
						show: true,
						position: 'center'
					}
				},
				hoverAnimation: false,
				data: [{
					value: dataLists.zdjc.value,
					name: '',
		
					label: {
						normal: {
							formatter: '{d} %',
							textStyle: {
								fontSize: 12,
								color: '#fff'
							}
						}
					},
		
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#f08f5d'
							}, {
								offset: 1,
								color: '#ef5d61'
							}]),
							textStyle: {
								fontSize: "10px"
							}
						}
					}
				}, {
					value: dataLists.zdjc.Fvalue,
					name: '',
					label: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							color: "rgba(2, 61, 78,0.75)"
						}
					}
				}]
			}]
		};
	    var dcjrOption =  {
			grid: {
				top: '2%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				type: 'liquidFill',
				itemStyle: {
					normal: {
						opacity: 0.4,
						shadowBlur: 0,
						shadowColor: 'blue'
					}
				},
				radius: '80%',
				name: 'nnnnn',
				data: [{
					// value: (dataLists.qmpc.value/dataLists.qmpc.Fvalue),
					value:0.36,
					itemStyle: {
						normal: {
							color: '#51a8c6',
							opacity: 0.6
						}
					}
				}],
				period: function (value, index) {
					// This function is called four times, each for a data item in series.
					// `value` is 0.6, 0.5, 0.4, 0.3, and `index` is 0, 1, 2, 3.
					return 1000 * index + 1000;
				},
				// background: '#fff',
				background:'rgba(0,0,0,0.1)',
				color: ['#53d5ff'],
				center: ['50%', '50%'],
				backgroundStyle: {
					// 背景颜色
					color: 'rgba(0,0,0,0.1)'
				},
				label: {
					normal: {
						formatter: '',
						textStyle: {
							fontSize: 12
						}
					}
				},
				outline: {
					itemStyle: {
						borderColor: '#86c5ff',
						borderWidth: 0
					},
					borderDistance: 0
				}
			},{
				type: 'pie',
				silent: true,
				radius: ['80%', '100%'],
				label: {
					normal: {
						show: true,
						position: 'center'
					}
				},
				hoverAnimation: false,
				data: [{
					value: dataLists.dcjr.value,
					name: '',
		
					label: {
						normal: {
							formatter: '{d} %',
							textStyle: {
								fontSize: 12,
								color: '#fff'
							}
						}
					},
		
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#49c681'
							}, {
								offset: 1,
								color: '#51a8c6'
							}]),
							textStyle: {
								fontSize: "10px",
								color: "#fff"
							}
						}
					}
				}, {
					value: dataLists.dcjr.Fvalue,
					name: '',
					label: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							color: "rgba(2, 61, 78,0.75)"
						}
					}
				}]
			}]
		};
	    var ycmdOption = {
			grid: {
				top: '2%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				type: 'liquidFill',
				itemStyle: {
					normal: {
						opacity: 0.4,
						shadowBlur: 0,
						shadowColor: 'blue'
					}
				},
				radius: '80%',
				name: 'nnnnn',
				data: [{
					// value: (dataLists.qmpc.value/dataLists.qmpc.Fvalue),
					value:0.35,
					itemStyle: {
						normal: {
							color: '#844cdb',
							opacity: 0.6
						}
					}
				}],
				period: function (value, index) {
					// This function is called four times, each for a data item in series.
					// `value` is 0.6, 0.5, 0.4, 0.3, and `index` is 0, 1, 2, 3.
					return 1000 * index + 1000;
				},
				// background: '#fff',
				background:'rgba(0,0,0,0.1)',
				color: ['#53d5ff'],
				center: ['50%', '50%'],
				backgroundStyle: {
					// 背景颜色
					color: 'rgba(0,0,0,0.1)'
				},
				label: {
					normal: {
						formatter: '',
						textStyle: {
							fontSize: 12
						}
					}
				},
				outline: {
					itemStyle: {
						borderColor: '#86c5ff',
						borderWidth: 0
					},
					borderDistance: 0
				}
			},{
				type: 'pie',
				silent: true,
				radius: ['80%', '100%'],
				label: {
					normal: {
						show: true,
						position: 'center'
					}
				},
				hoverAnimation: false,
				data: [{
					value: dataLists.ycmd.value,
					name: '',
		
					label: {
						normal: {
							formatter: '{d} %',
							textStyle: {
								fontSize: 12,
								color: '#fff'
							}
						}
					},
		
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#5e62dd'
							}, {
								offset: 1,
								color: '#844cdb'
							}])
						}
					}
				}, {
					value: dataLists.ycmd.Fvalue,
					name: '',
					label: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							color: "rgba(2, 61, 78,0.75)"
						}
					}
				}]
			}]
		};
		qmpcChart.setOption(qmpcOption);
	    zcjcChart.setOption(zcjcOption);
	    gfxyjChart.setOption(gfxyjOption);
	    zdjcChart.setOption(zdjcOption);
	    dcjrChart.setOption(dcjrOption);
	    ycmdChart.setOption(ycmdOption);
	}
	//风险企业地区分布
	function drawBar () {
		const dataObjBar = JSON.parse(sessionStorage.getItem('dqfb'));
		//数据集合
		// var dataObjBar = {
		// 	'name':['经济技术开发区','蔡甸区','江夏区','东西湖区','青山区','汉阳区','东湖高新区',
		// 			'硚口区','洪山区','江岸区','江汉区'],
		// 	'value':[1,2,5,6,8,16,16,17,27,36,85,208]
		// };
		var myChartBar = echarts.init(document.getElementById('bar-content'));
		var optionBar = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				top:'0%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true 
			},
			xAxis: {
				show:false,
				type: 'value',
				boundaryGap: [0, 0.01],
			},
			yAxis: {
				type: 'category',
				axisLabel:{
					textStyle: {
						color: '#fff',
						"fontSize": 15
					}
				},
				data:dataObjBar.name,
				// data: [
				// 	{value:'经济技术开发区'},
				// 	{value:'蔡甸区'},
				// 	{value:'江夏区'},
				// 	{value:'东西湖区'},
				// 	{value:'青山区'},
				// 	{value:'汉阳区'},
				// 	{value:'东湖高新区'},
				// 	{value:'硚口区 '},
				// 	{value:'洪山区'},
				// 	{value:'江岸区'},
				// 	{value:'江汉区'},
				// 	{value:'武昌区'} 
				// ],
				splitLine:{
					show:false	
				},
				// axisLine:{
				// 	show:false	
				// },
				axisTick:{
					show:false	
				},
				/* chm 10.15 */
				axisLine: {
	                lineStyle: {
	                    color: '#fff'
	                }
	            },
			},
			series: [
				{
					name: '数量',
					type: 'bar',
					label:{
						normal:{
							show:true,
							position: 'right',
							textStyle:{
								color:"#fff"
							}
						}
					},
					barWidth:13,
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#ce3052' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#f37e7f' // 100% 处的颜色
							}], false),
						},
						emphasis:{
							color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#ce3052' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#f37e7f' // 100% 处的颜色
							}], false)
						}
					},
					data:dataObjBar.value
					// data: [250,337,525,675,869, 956,1151,1218,2107,3132] chm 10.19
					// data: [1,2,5,6,8,16,16,17,27,36,85,208]
				}
			]
		};
		myChartBar.setOption(optionBar);
	}
	// 计算时间
	var myDate = new Date();//获取系统当前时间
var Syear = myDate.getFullYear();
var Smonth = myDate.getMonth() + 1;
var SstrDate = myDate.getDate();
var fo = new Date(myDate.getTime() - (10 * 24 * 60 * 60 * 1000)).toLocaleDateString();
var startTimeArr = fo.split('/');
// 日期格式化
function formatTime(time,spliter){
    var d = new Date(time);
    var year = d.getFullYear();
    var month = d.getMonth() >= 10 ? d.getMonth() : ('0' + d.getMonth());
    var day = d.getDate() >= 10 ? d.getDate() : ('0' + d.getDate());
    // return year+spliter+month+spliter+day;
    return month+spliter+day;
}
// 获取日期
function getdate(){
    var arr=new Array();
    var endTime= new Date(Syear,Smonth,SstrDate).getTime();
    var startTime = new Date(startTimeArr[0],startTimeArr[1],startTimeArr[2]).getTime();
    for( var i = startTime ; i <= endTime ; ){
      arr.push(formatTime(i,'-'));
      i += 24 * 60 * 60 * 1000;
    }
    return arr;
}
	//企业风险走势
	function drawRiskTrend () {
		//数据集合
		var dataRiskTrend  = {
			// 'time':['10/19','10/20','10/21','10/22','10/23','10/24','10/25',
			// 		'10/26','10/27','10/28','10/29'],
			'time':getdate(),
			'value':[78,85,86,78,70,80,85,79,79,80,78],
			'value1':[32,33,32,34,33,34,35,34,33,33,32]
		};
		var myChart = echarts.init(document.getElementById('risktrend'));
		var colors = ['#000','#5793f3', '#d14a61', '#675bba'];
		var option = {
			tooltip: {
				trigger: 'axis'
			},
			xAxis: {
				type: 'category',
				boundaryGap: false, 
				data:dataRiskTrend.time,
				// data: [
				// 	{value:"10/19"},
				//    	{value:"10/20"},
				//    	{value:"10/21"},
				//    	{value:"10/22"},
				//    	{value:"10/23"},
				//    	{value:"10/24"},
				//    	{value:"10/25"},
				// 	{value:"10/26"},
				// 	{value:"10/27"},
				// 	{value:"10/28"},
				// 	{value:"10/29"}
				// ],
				axisLabel :{  
					interval:0 ,
					color:'#fff',
					// 文字倾斜展示
					rotate:30,
					"fontSize": 14
				} ,
				axisLine: {
					lineStyle: {
						//color: colors[0]
						color:"#ccc"
					}
				}
			},
			grid: {
				top:'30%',
				left: '3%',
				right: '4%',
				bottom: '4%',
				containLabel: true 
			},
			yAxis: [{
			    //风险企业数量
				name: '冒烟指数',
				position: 'left',
				type: 'value',
				axisLabel: {
					formatter: '{value}'
				},
				axisLine: {
					lineStyle: {
						//color: colors[0]
						color:"#ccc"
					}
				},
				splitLine: {
					show: false
				},
				axisLabel:{
					formatter: '{value} ',
					textStyle: {
						color: '#fff',
						"fontSize": 14
					}
				},
			//	min: 'dataAverage',
			}, {
			    show:false,
				name: '平均风险指数',
				position: 'right',
				type: 'value',
				axisLabel: {
					formatter: '{value}'
				},
				axisLine: {
					lineStyle: {
						color: colors[1]
					}
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					formatter: '{value} ',
					textStyle: {
						color: '#fff'
					}
				},
			//	min: 'dataMin',
			}],
			series: [{
				name: '',
				yAxisIndex: 0,
				type: 'line',
				smooth: true,
				data:dataRiskTrend.value,
				// data: [78,85,86,78,70,80,85,79,79,80,78],
				animation: false,
				label:{
					normal:{
						show:true,
						textStyle:{
							color:"#fff"
						}
					}
				}
		
			}, {
				name: '',
				yAxisIndex: 0,
				type: 'line',
				smooth: true,
				color: colors[3],
				data:dataRiskTrend.value1,
				// data: [32,33,32,34,33,34,35,34,33,33,32],
				animation: false,
				label:{
					normal:{
						show:true,
						textStyle:{
							color:"#fff"
						}
					}
				}
		
			}]
		};
		myChart.setOption(option);
	}
	//企业规模与风险
	function drawIndustryTrends () {
		var myChart = echarts.init(document.getElementById('industryTrends'));
		var countries = ['硕利链付宝', '佰仟金融', '华赢凯来',
		 '前海', '三三玉', '中赢', '三汇','玖玖金融','诚然投资','慧海资产',
		'信约众盈','金赢家','乐投财富','奥信投资担保'];
		var years = ['2014年', '2015年', '2016年', '2017年'];
		//行业风险 占比 支出（pass） 数据集合
		//风险企业数量  风险指数  冒烟指数 注册资金
		// 10-29更改
		// 企业注册资金 风险指数 冒烟指数
		var data = [
			[
				[1000	,22, 23],
				[900	,33, 59],
				[8030	,16, 73],
				[5000	,12, 85],
				[1300	,33, 78],
				[5002	,23, 47],
				[2000	, 9, 12],
				[202	,99, 87],
				[132	,78, 56],
				[244	,75, 70],
				[535	,23, 34],
				[678	,43, 45],
				[3455	,10,  3]

			],
			[
				[1000	,22, 34],
				[900	,45, 69],
				[8030	,39, 67],
				[5000	,54, 78],
				[1300	,36, 78],
				[5002	,43, 66],
				[2000	,37, 65],
				[202	,12, 11],
				[132	, 3,  1],
				[244	,43, 56],
				[535	,45, 54],
				[678	,76, 88],
				[3455	,45, 66],
			],
			[
				[1000	,35, 23],
				[900	,54, 66],
				[8030	,25, 77],
				[5000	,56, 88],
				[1300	,57, 78],
				[5002	,53, 59],
				[2000	,35, 63],
				[202	,12, 14],
				[132	,22, 34],
				[244	,25, 45],
				[535	,54, 67],
				[678	,45, 46],
				[3455	,77, 89],
			],
			[
				[1000	,46, 34],
				[900	,36, 80],
				[8030	,62, 45],
				[5000	,16, 45],
				[1300	,61, 78],
				[5002	,46, 67],
				[2000	,56, 68],
				[202	,43, 22],
				[132	,15, 23],
				[244	,23, 54],
				[535	,56, 76],
				[678	,66, 87],
				[3455	,68, 99],
			]
		];
		
		// 如果看不懂这段代码，那么就不用这段代码，
		// 自己估计一个最大值也可以。
		function getMax(dim) {
			var max = 0;
			data.forEach(function (dataByYear) {
				dataByYear.forEach(function (item) {
					if (item[dim] > max) {
						max = item[dim];
					}
				});
			});
			var exp = Math.round(Math.log(max) / Math.log(10));
			var exp10 = Math.pow(10, exp);
			max = Math.ceil(max / exp10 * 10) / 10 * exp10;
			return max;
		}
		
		
		var itemStyle = {
			normal: {
				opacity: 0.8,
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowOffsetY: 0,
				shadowColor: 'rgba(0, 0, 0, 0.5)'
			}
		};
		
		var option = {
			baseOption: {
				// 配置 侧边 时间轴
				timeline: {
				    show:false,
					axisType: 'category',
					orient: 'vertical',
					autoPlay: true,
					inverse: true,
					playInterval: 3000,
					left: null,
					right: 10,
					top: 60,
					bottom: 20,
					width: 55,
					height: "65%",
					label: {
						normal: {
							textStyle: {
								color: '#ddd'
							}
						},
						emphasis: {
							textStyle: {
								color: '#fff'
							}
						}
					},
					symbol: 'none',
					lineStyle: {
						color: '#555'
					},
					checkpointStyle: {
						color: '#bbb',
						borderColor: '#777',
						borderWidth: 2
					},
					controlStyle: {
						showNextBtn: false,
						showPrevBtn: false,
						normal: {
							color: '#666',
							borderColor: '#666'
						},
						emphasis: {
							color: '#aaa',
							borderColor: '#aaa'
						}
					},
					data: years
				},
				title:{
					//text:"x 风险企业数量 y风险企业占比 size 平均冒烟指数",
					textStyle:{
						color:"#82c6ec",
						fontSize:16,
						fontWeight:400,
					},
					top:60,
					left:30,
				},
				tooltip: {
					padding: 5,
					backgroundColor: '#222',
					borderColor: '#777',
					borderWidth: 1
				},
				//配置 图表 位置
				grid: {
					top:'25%',
					left: '3%',
					right: '10%',
					bottom: '8%',
					containLabel: true 
				},
				xAxis: {
					type: 'value',
					//行业风险
					// 风险指数(10/29)
					name: '企业注册资金',
					nameGap: 25,
					min: 0,
					max: getMax(0),
					nameLocation: 'middle',
					nameTextStyle: {
						fontSize: 12
					},
					splitLine: {
						show: false
					},
					axisTick: {
						lineStyle: {
							color: '#ddd'
						}
					},
					axisLine: {
						lineStyle: {
							color: '#ddd'
						}
					},
					axisLabel: {
						textStyle: {
							color: '#ddd'
						}
					}
				},
				yAxis: {
					type: 'value',
					//占比
					name: '冒烟指数',
					min: 0,
					max: getMax(1),
					nameTextStyle: {
						color: '#ccc',
						fontSize: 12
					},
					axisLine: {
						lineStyle: {
							color: '#ddd'
						}
					},
					axisTick: {
						lineStyle: {
							color: '#ddd'
						}
					},
					splitLine: {
						show: false
					},
					axisLabel: {
						formatter: '{value}',
						textStyle: {
							color: '#ddd'
						}
					}
				},
				visualMap: [{
					show:false,
					type: 'piecewise',
					dimension: 3,
					categories: countries,
					left: 10,
					bottom: 35,
					calculable: true,
					precision: 0.1,
					textGap: 10,
					itemGap: 3,
					textStyle: {
						color: '#ccc'
					},
					inRange: {
						color: ['#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a', '#376956', '#c3bed4', '#495a80', '#9966cc', '#bdb76a', '#eee8ab', '#a35015', '#04dd98', '#d9b3e6', '#b6c3fc','#315dbc','#c5c975','#476a54','#66e638','#a59619','#822ee2','#49450d','#eeebd4','#2b98dc','#b95c25', '#8f1ec2', '#d50390', '#36a15d', '#edc1a5']
					},
					outOfRange: {
						color: ['#bcd3bb', '#e88f70', '#9dc5c8']
					}
				}, {
					show: false,
					type: 'continuous',
					dimension: 2,
					min: 0,
					max: 100,
					inRange: {
						color: ['#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a', '#376956', '#c3bed4', '#495a80', '#9966cc', '#bdb76a', '#eee8ab', '#a35015', '#04dd98', '#d9b3e6', '#b6c3fc','#315dbc','#c5c975','#476a54','#66e638','#a59619','#822ee2','#49450d','#eeebd4','#2b98dc','#b95c25', '#8f1ec2', '#d50390', '#36a15d', '#edc1a5'],
						symbolSize: [10, 50]
					},
					outOfRange: {
						color: ['#bcd3bb', '#e88f70', '#9dc5c8']
					}
				}],
				series: [{
					type: 'scatter',
					id: 'gridScatter',
					itemStyle: itemStyle,
					data: [],
					tooltip: {
						formatter: function(obj) {
							var value = obj.value;
							return '<div style="border-bottom: 1px solid #555;padding-bottom: 5px; margin-bottom: 5px;">' + value[3] + '</div>'
							    //注册资金 风险指数 冒烟指数 企业名称
								//+ '行业风险：' + value[0] + '<br>'
								//+ '占比：' + value[1] + ' %<br>'
								//+ '支出：' + value[2] + ' 千亿 $<br>';
								+ '注册资金：' + value[0] + '万元<br>'
								+ '冒烟指数：' + value[2] + ' <br>';
						}
					}
				}],
				animationDurationUpdate: 3000,
				animationEasingUpdate: 'quinticInOut'
			},
			options: []
		};
		
		for (var n = 0; n < years.length; n++) {
			option.options.push({
				series: {
					id: 'gridScatter',
					type: 'scatter',
					itemStyle: itemStyle,
					data: data[n].map(function (item, index) {
						return item.concat([countries[index]]);
					}),
				}
			});
		}
		myChart.setOption(option);
	}
	//风向企业地图分布--1
	function drawHeatmap () {
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
		// console.log(series3);
		
			
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
					// console.log(toolTiphtml)
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
				regions: customSettings,
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
				// roam: true,
				// zoom:1.2,
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
		myChartMap.on('click', function (params) {
			//console.log(params);
		});
		
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
	//风向企业地图分布--2
	function echartMapClick (param) {
		if (param.name != "") {
			bMap(param.name);
			return false;
		} else {
			return false;
		}
	}






export {
		drawRiskNum,
    drawBar,
    drawLine,
    drawRiskTrend,
    drawIndustryTrends,
    drawHeatmap}