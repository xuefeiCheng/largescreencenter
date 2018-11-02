let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
var drawLine = function() {
    //var container = document.querySelector('.line-content');
   	var myChart = echarts.init(document.getElementById('line-content'));
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: {
			top:'0%',
			left: '8%',
			right: '8%',
			bottom: '3%',
			containLabel: true 
		},
		xAxis: {
			show:false,
			type: 'value',
			boundaryGap: [0, 0.01]
		},
		yAxis: {
			type: 'category',
			data: [
				{value:'投资咨询',textStyle:{color:"#fff",fontSize:16}},
				{value:'网络借贷平台',textStyle:{color:"#fff",fontSize:16}},
				{value:'其他',textStyle:{color:"#fff",fontSize:16}},
				{value:'私募股权投资基金',textStyle:{color:"#fff",fontSize:16}},
				{value:'小额贷款',textStyle:{color:"#fff",fontSize:16}},
				{value:'租赁和商务服务业',textStyle:{color:"#fff",fontSize:16}},
				{value:'非金融机构支付服务',textStyle:{color:"#fff",fontSize:16}},
				{value:'担保',textStyle:{color:"#fff",fontSize:16}}, 
				{value:'地方交易所',textStyle:{color:"#fff",fontSize:16}},
				{value:'电子商务',textStyle:{color:"#fff",fontSize:16}},
				{value:'其他',textStyle:{color:"#fff",fontSize:16}},
				{value:'虚拟理财',textStyle:{color:"#fff",fontSize:16}},
				{value:'民办教育机构',textStyle:{color:"#fff",fontSize:16}},
				{value:'融资租赁',textStyle:{color:"#fff",fontSize:16}},
				{value:'房地产',textStyle:{color:"#fff",fontSize:16}},
				{value:'金融业',textStyle:{color:"#fff",fontSize:16}},
				{value:'养老机构',textStyle:{color:"#fff",fontSize:16}},
			],
			//chm 10.19
		/* 	data: [
				{value:'电子商务',textStyle:{color:"#fff",fontSize:16}},
				{value:'保险',textStyle:{color:"#fff",fontSize:16}},
				{value:'高新技术企业',textStyle:{color:"#fff",fontSize:16}},
				{value:'房地产',textStyle:{color:"#fff",fontSize:16}},
				{value:'担保',textStyle:{color:"#fff",fontSize:16}},
				{value:'投资理财',textStyle:{color:"#fff",fontSize:16}},
				{value:'小额贷款',textStyle:{color:"#fff",fontSize:16}},
				{value:'网贷平台',textStyle:{color:"#fff",fontSize:16}}, 
				{value:'投资咨询',textStyle:{color:"#fff",fontSize:16}},
				{value:'私募基金',textStyle:{color:"#fff",fontSize:16}},
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
				// data: [66, 85, 106,123, 210,237,260,1568,1937,2452]
				data: [115.0,75.0,35.0,29.0,17.0,14.0,5.0,5.0,4.0,3.0,3.0,3.0,2.0,2.0,1.0,1.0,1.0]//chm 10.19
			}
		]
	};
	myChart.setOption(option);
}
export default{
	drawLine
}
