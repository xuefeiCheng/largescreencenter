let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
var drawRiskTrend = function () {
	var myChart = echarts.init(document.getElementById('risktrend'));
	var colors = ['#5793f3', '#d14a61', '#675bba'];
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: [
				{value:"1月",textStyle:{color:"#fff"}},
			   	{value:"2月",textStyle:{color:"#fff"}},
			   	{value:"3月",textStyle:{color:"#fff"}},
			   	{value:"4月",textStyle:{color:"#fff"}},
			   	{value:"5月",textStyle:{color:"#fff"}},
			   	{value:"6月",textStyle:{color:"#fff"}},
			   	{value:"7月",textStyle:{color:"#fff"}},
				{value:"8月",textStyle:{color:"#fff"}},
				{value:"9月",textStyle:{color:"#fff"}},
				{value:"10月",textStyle:{color:"#fff"}},
				{value:"11月",textStyle:{color:"#fff"}},
				{value:"12月",textStyle:{color:"#fff"}},
			],
			axisLabel :{  
				interval:0 ,
				color:'#fff'  
			} ,
		},
		grid: {
			top:'30%',
			left: '3%',
			right: '4%',
			bottom: '10%',
			containLabel: true 
		},
		yAxis: [{
			name: '风险企业数量',
			position: 'left',
			type: 'value',
			axisLabel: {
				formatter: '{value}'
			},
			axisLine: {
				lineStyle: {
					color: colors[0]
				}
			},
			splitLine: {
				show: false
			},
			axisLabel:{
				formatter: '{value} ',
				textStyle: {
					color: '#fff'
				}
			},
			min: 'dataMin',
		}, {
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
			min: 'dataMin',
		}],
		series: [{
			name: '',
			yAxisIndex: 0,
			type: 'line',
			smooth: true,
			data: [35425,36034,37565,37097,38987,39098,37098,36765,36000,35987,35001,35345],
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
			yAxisIndex: 1,
			type: 'line',
			smooth: true,
			data: [28,30,33,36,34,30,28,39,30,32,34,29],
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
};

export default{
	drawRiskTrend
}