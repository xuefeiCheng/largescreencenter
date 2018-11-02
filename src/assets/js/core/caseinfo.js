let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/scatter')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
var drawBar = function() {
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
			data: [
				{value:'武昌区',textStyle:{color:"#fff",fontSize:15}},
				{value:'江汉区',textStyle:{color:"#fff",fontSize:15}},
				{value:'江岸区',textStyle:{color:"#fff",fontSize:15}},
				{value:'洪山区',textStyle:{color:"#fff",fontSize:15}},
				{value:'硚山区',textStyle:{color:"#fff",fontSize:15}},
				{value:'东湖开发',textStyle:{color:"#fff",fontSize:15}},
				{value:'东湖新技',textStyle:{color:"#fff",fontSize:15}},
				{value:'汉阳区 ',textStyle:{color:"#fff",fontSize:15}},
				{value:'青山区',textStyle:{color:"#fff",fontSize:15}},
				{value:'东湖高新',textStyle:{color:"#fff",fontSize:15}},
				{value:'江夏区',textStyle:{color:"#fff",fontSize:15}} 
			],
			//chm 10.19
			/* data: [
				{value:'江汉区',textStyle:{color:"#fff",fontSize:15}},
				{value:'东西湖区',textStyle:{color:"#fff",fontSize:15}},
				{value:'新洲区',textStyle:{color:"#fff",fontSize:15}},
				{value:'黄陂区',textStyle:{color:"#fff",fontSize:15}},
				{value:'江蔡甸区',textStyle:{color:"#fff",fontSize:15}},
				{value:'桥口区',textStyle:{color:"#fff",fontSize:15}},
				{value:'江岸区',textStyle:{color:"#fff",fontSize:15}},
				{value:'洪山区 ',textStyle:{color:"#fff",fontSize:15}},
				{value:'青山区',textStyle:{color:"#fff",fontSize:15}},
				{value:'武昌区',textStyle:{color:"#fff",fontSize:15}}, 
			], */
			/* data: [
				{value:'贵州',textStyle:{color:"#fff",fontSize:15}},
				{value:'宁夏',textStyle:{color:"#fff",fontSize:15}},
				{value:'湖南',textStyle:{color:"#fff",fontSize:15}},
				{value:'湖北',textStyle:{color:"#fff",fontSize:15}},
				{value:'江苏',textStyle:{color:"#fff",fontSize:15}},
				{value:'山东',textStyle:{color:"#fff",fontSize:15}},
				{value:'浙江',textStyle:{color:"#fff",fontSize:15}},
				{value:'上海',textStyle:{color:"#fff",fontSize:15}},
				{value:'广东',textStyle:{color:"#fff",fontSize:15}},
				{value:'北京',textStyle:{color:"#fff",fontSize:15}}, 
			], */
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
				// data: [250,337,525,675,869, 956,1151,1218,2107,3132] chm 10.19
				data: [205,52,26,10,6,4,3,3,3,2,1]
			}
		]
	};
	myChartBar.setOption(optionBar);
}
// caseInfo.drawPie = function() {
//     caseInfo.drawRiskNum();
// }

export default{
	drawBar
}
