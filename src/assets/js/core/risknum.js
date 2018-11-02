let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
var drawRiskNum = function () {
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
			top:'2%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true 
		},
        series : [
            {
                type:'pie',
                silent:true,
                radius: ['80%', '100%'],
                label: {
                    normal: {
                        show:true,
                        position: 'center'
                    }
                },
                hoverAnimation: false,
                data:[
                    // chm 10.19 
                    // {value:39049-32927, name:'84.3%',itemStyle:{normal:{color:"rgba(2, 61, 78,0.75)"}},label:{normal:{textStyle:{color:"#fff"}}}},
                    {value:4, name:'95.924%',itemStyle:{normal:{color:"rgba(2, 61, 78,0.75)"}},label:{normal:{textStyle:{color:"#fff"}}}},
                    {value:95.924, name:'',itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#d51965'
                            }, {
                                offset: 1,
                                color: '#e207e9'
                            }]),textStyle:{fontSize:"10px"}}}},
                ]
            }
        ]
    };
            
    var zcjcOption = {
		grid: {
			top:'2%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true 
		},
         series : [
            {
                type:'pie',
                silent:true,
                animation:false,
                radius: ['80%', '100%'],
                label: {
                    normal: {
                        show:true,
                        position: 'center'
                    }
                },
                hoverAnimation: false,
                data:[
                    {value:96.925 , name:'3.075%',itemStyle:{normal:{color:"rgba(2, 61, 78,0.75)"}},label:{normal:{textStyle:{color:"#fff"}}}},
                    {value:3.075, name:'',itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ed7e5b'
                            }, {
                                offset: 1,
                                color: '#c12e3b'
                            }]),textStyle:{fontSize:"10px",color:"#fff"}}}},
                ]
            }
        ]     
    };
     var gfxyjOption = {
		 grid: {
			top:'2%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true 
		},
         series : [
            {
                type:'pie',
                silent:true,
                radius: ['80%', '100%'],
                label: {
                    show:false,
                    normal: {
                        position: 'center'
                    }
                },
                hoverAnimation: false,
                data:[
                    {value:99, name:'0.181%',itemStyle:{normal:{color:"rgba(2, 61, 78,0.75)"}},label:{normal:{textStyle:{color:"#fff"}}}},
                    {value:1, name:'',itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#4b7fc9'
                            }, {
                                offset: 1,
                                color: '#60e3f2'
                            }]),textStyle:{fontSize:"10px"}}}},
                ]
            }
        ]     
    };
    var zdjcOption = {
		 grid: {
			top:'2%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true 
		},
         series : [
            {
                type:'pie',
                silent:true,
                radius: ['80%', '100%'],
                label: {
                    normal: {
                        show:true,
                        position: 'center'
                    }
                },
                hoverAnimation: false,
                data:[
                    {value:39049-167, name:'0.4%',itemStyle:{normal:{color:"rgba(2, 61, 78,0.75)"}},label:{normal:{textStyle:{color:"#fff"}}}},
                    {value:167, name:'',itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f08f5d'
                            }, {
                                offset: 1,
                                color: '#ef5d61'
                            }]),textStyle:{fontSize:"10px"}}}},
                ]
            }
        ]     
    };
    var dcjrOption = {
		grid: {
			top:'2%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true 
		},
         series : [
            {
                type:'pie',
                silent:true,
                radius: ['80%', '100%'],
                label: {
                    normal: {
                        show:true,
                        position: 'center'
                    }
                },
                hoverAnimation: false,
                data:[
                    {value:39049-1598, name:'4.1%',itemStyle:{normal:{color:"rgba(2, 61, 78,0.75)"}},label:{normal:{textStyle:{color:"#fff"}}}},
                    {value:1598, name:'',itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#49c681'
                            }, {
                                offset: 1,
                                color: '#51a8c6'
                            }]),textStyle:{fontSize:"10px",color:"#fff"}}}},
                ]
            }
        ]     
    };
    var ycmdOption = {
		 grid: {
			top:'2%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true 
		},
         series : [
            {
                type:'pie',
                silent:true,
                radius: ['80%', '100%'],
                label: {
                    show:false,
                    normal: {
                        position: 'center'
                    }
                },
                hoverAnimation: false,
                data:[
                    {value:39049-1206, name:'3.1%',itemStyle:{normal:{color:"rgba(2, 61, 78,0.75)"}},label:{normal:{textStyle:{color:"#fff"}}}},
                    {value:1206, name:'',itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#5e62dd'
                            }, {
                                offset: 1,
                                color: '#844cdb'
                            }])}}},
                ]
            }
        ]     
    };
	qmpcChart.setOption(qmpcOption);
    zcjcChart.setOption(zcjcOption);
    gfxyjChart.setOption(gfxyjOption);
    zdjcChart.setOption(zdjcOption);
    dcjrChart.setOption(dcjrOption);
    ycmdChart.setOption(ycmdOption);
}

export default{
  drawRiskNum
}