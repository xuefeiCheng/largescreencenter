caseInfo.drawHeatmap = function() {
	echartMap();
};
function echartMap () {
    /*$("#mainMap").css({"height":window.innerHeight * 0.75});*/
	var myChartMap = echarts.init(document.getElementById('case-map'));
	var geoCoordMap = {
		'上海': [121.4648,31.2891],
		'东莞': [113.8953,22.901],
		'东营': [118.7073,37.5513],
		'中山': [113.4229,22.478],
		'临汾': [111.4783,36.1615],
		'临沂': [118.3118,35.2936],
		'丹东': [124.541,40.4242],
		'丽水': [119.5642,28.1854],
		'乌鲁木齐': [87.9236,43.5883],
		'佛山': [112.8955,23.1097],
		'保定': [115.0488,39.0948],
		'兰州': [103.5901,36.3043],
		'包头': [110.3467,41.4899],
		'北京': [116.4551,40.2539],
		'北海': [109.314,21.6211],
		'南京': [118.8062,31.9208],
		'南宁': [108.479,23.1152],
		'南昌': [116.0046,28.6633],
		'南通': [121.1023,32.1625],
		'厦门': [118.1689,24.6478],
		'台州': [121.1353,28.6688],
		'合肥': [117.29,32.0581],
		'呼和浩特': [111.4124,40.4901],
		'咸阳': [108.4131,34.8706],
		'哈尔滨': [127.9688,45.368],
		'唐山': [118.4766,39.6826],
		'嘉兴': [120.9155,30.6354],
		'大同': [113.7854,39.8035],
		'大连': [122.2229,39.4409],
		'天津': [117.4219,39.4189],
		'太原': [112.3352,37.9413],
		'威海': [121.9482,37.1393],
		'宁波': [121.5967,29.6466],
		'宝鸡': [107.1826,34.3433],
		'宿迁': [118.5535,33.7775],
		'常州': [119.4543,31.5582],
		'广州': [113.5107,23.2196],
		'廊坊': [116.521,39.0509],
		'延安': [109.1052,36.4252],
		'张家口': [115.1477,40.8527],
		'徐州': [117.5208,34.3268],
		'德州': [116.6858,37.2107],
		'惠州': [114.6204,23.1647],
		'成都': [103.9526,30.7617],
		'扬州': [119.4653,32.8162],
		'承德': [117.5757,41.4075],
		'拉萨': [91.1865,30.1465],
		'无锡': [120.3442,31.5527],
		'日照': [119.2786,35.5023],
		'昆明': [102.9199,25.4663],
		'杭州': [119.5313,29.8773],
		'枣庄': [117.323,34.8926],
		'柳州': [109.3799,24.9774],
		'株洲': [113.5327,27.0319],
		'武汉': [114.3896,30.6628],
		'汕头': [117.1692,23.3405],
		'江门': [112.6318,22.1484],
		'沈阳': [123.1238,42.1216],
		'沧州': [116.8286,38.2104],
		'河源': [114.917,23.9722],
		'泉州': [118.3228,25.1147],
		'泰安': [117.0264,36.0516],
		'泰州': [120.0586,32.5525],
		'济南': [117.1582,36.8701],
		'济宁': [116.8286,35.3375],
		'海口': [110.3893,19.8516],
		'淄博': [118.0371,36.6064],
		'淮安': [118.927,33.4039],
		'深圳': [114.5435,22.5439],
		'清远': [112.9175,24.3292],
		'温州': [120.498,27.8119],
		'渭南': [109.7864,35.0299],
		'湖州': [119.8608,30.7782],
		'湘潭': [112.5439,27.7075],
		'滨州': [117.8174,37.4963],
		'潍坊': [119.0918,36.524],
		'烟台': [120.7397,37.5128],
		'玉溪': [101.9312,23.8898],
		'珠海': [113.7305,22.1155],
		'盐城': [120.2234,33.5577],
		'盘锦': [121.9482,41.0449],
		'石家庄': [114.4995,38.1006],
		'福州': [119.4543,25.9222],
		'秦皇岛': [119.2126,40.0232],
		'绍兴': [120.564,29.7565],
		'聊城': [115.9167,36.4032],
		'肇庆': [112.1265,23.5822],
		'舟山': [122.2559,30.2234],
		'苏州': [120.6519,31.3989],
		'莱芜': [117.6526,36.2714],
		'菏泽': [115.6201,35.2057],
		'营口': [122.4316,40.4297],
		'葫芦岛': [120.1575,40.578],
		'衡水': [115.8838,37.7161],
		'衢州': [118.6853,28.8666],
		'西宁': [101.4038,36.8207],
		'西安': [109.1162,34.2004],
		'贵阳': [106.6992,26.7682],
		'连云港': [119.1248,34.552],
		'邢台': [114.8071,37.2821],
		'邯郸': [114.4775,36.535],
		'郑州': [113.4668,34.6234],
		'鄂尔多斯': [108.9734,39.2487],
		'重庆': [107.7539,30.1904],
		'金华': [120.0037,29.1028],
		'铜川': [109.0393,35.1947],
		'银川': [106.3586,38.1775],
		'镇江': [119.4763,31.9702],
		'长春': [125.8154,44.2584],
		'长沙': [113.0823,28.2568],
		'长治': [112.8625,36.4746],
		'阳泉': [113.4778,38.0951],
		'青岛': [120.4651,36.3373],
		'韶关': [113.7964,24.7028],
		"北京华赢凯来资产管理有限公司":[116.4881,39.8585],
		"善林（上海）金融信息服务有限公司":[121.4737,31.2303],
		"武汉硕维金融服务有限公司":[114.5038,30.5557],
		"宁夏云数贸贸易有限公司":[106.3028,38.5032],
		"珠海横琴新区盖网科技发展有限公司":[113.5548,22.1192]
	};
	var BJData = [
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'上海',value:95}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'广州',value:90}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'大连',value:80}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'南宁',value:70}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'南昌',value:60}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'拉萨',value:50}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'长春',value:40}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'包头',value:30}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'重庆',value:20}],
		[{name:'北京华赢凯来资产管理有限公司'}, {name:'常州',value:10}]
	];
	var SHData = [
		[{name:'善林（上海）金融信息服务有限公司'},{name:'包头',value:95}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'昆明',value:90}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'广州',value:80}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'郑州',value:70}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'长春',value:60}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'重庆',value:50}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'长沙',value:40}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'北京',value:30}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'丹东',value:20}],
		[{name:'善林（上海）金融信息服务有限公司'},{name:'大连',value:10}]
	];
	var SXData = [
		[{name:'武汉硕维金融服务有限公司'},{name:'包头',value:95}],
		[{name:'武汉硕维金融服务有限公司'},{name:'昆明',value:90}],
		[{name:'武汉硕维金融服务有限公司'},{name:'广州',value:80}],
		[{name:'武汉硕维金融服务有限公司'},{name:'郑州',value:70}],
		[{name:'武汉硕维金融服务有限公司'},{name:'长春',value:60}],
		[{name:'武汉硕维金融服务有限公司'},{name:'重庆',value:50}],
		[{name:'武汉硕维金融服务有限公司'},{name:'长沙',value:40}],
		[{name:'武汉硕维金融服务有限公司'},{name:'北京',value:30}],
		[{name:'武汉硕维金融服务有限公司'},{name:'丹东',value:20}],
		[{name:'武汉硕维金融服务有限公司'},{name:'大连',value:10}]
	];
	var OEData = [
		[{name:'宁夏云数贸贸易有限公司'},{name:'包头',value:95}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'昆明',value:90}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'广州',value:80}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'郑州',value:70}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'长春',value:60}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'重庆',value:50}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'长沙',value:40}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'北京',value:30}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'丹东',value:20}],
		[{name:'宁夏云数贸贸易有限公司'},{name:'大连',value:10}]
	];
	var ZHdata = [
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'包头',value:95}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'昆明',value:90}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'广州',value:80}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'郑州',value:70}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'长春',value:60}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'重庆',value:50}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'长沙',value:40}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'北京',value:30}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'丹东',value:20}],
		[{name:'珠海横琴新区盖网科技发展有限公司'},{name:'大连',value:10}]
	];
	var companyData = {
		"北京华赢凯来资产管理有限公司":{"mScore":85,"riskDescribe":"1. 存在经营异常。2.存在行政处罚。<br>3.资金去向不透明。4.未在基金业协会备案。<br>5.未向投资人风险提示。6.违规经营。"},
		"善林（上海）金融信息服务有限公司":{"mScore":79,"riskDescribe":"1.存在行政处罚。2.涉嫌自担保。<br>3.涉嫌构建资金池。4.信息披露不透明。<br>5.子公司涉嫌非法集资。"},
		"武汉硕维金融服务有限公司":{"mScore":72,"riskDescribe":"1.经营异常。2.承诺本息保障。<br>3.涉嫌构建资金池。4.警方已介入调查。<br>5.提现困难。6.涉嫌自融自担保。"},
		"宁夏云数贸贸易有限公司":{"mScore":87,"riskDescribe":"1.涉嫌非法传销。2.存在涉诉信息。<br>3.存在大量网络投诉。4.创办人被捕。<br>5.高息利诱。6.涉嫌虚假夸大宣传。"},
		"珠海横琴新区盖网科技发展有限公司":{"mScore":75,"riskDescribe":"1.涉嫌利用原始股的方式诈骗。2.涉嫌传销。<br>3.虚假宣传。"},
	}
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
	var color = ['#ffa022', '#46bee9',"#f37e7f","#0da6f6","#0da6f6"];
	var series = [];
	var len = 0;
	var serdata = [['北京华赢凯来资产管理有限公司', BJData], ['善林（上海）金融信息服务有限公司', SHData],["武汉硕维金融服务有限公司",SXData],["宁夏云数贸贸易有限公司",OEData],["珠海横琴新区盖网科技发展有限公司",ZHdata],];
	serdata.forEach(function (item, i) {
		console.log(convertData(item[1]))
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
        	showEffectOn: 'render',
        	itemStyle: {
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
	var rltData = [{
		name: '湖北',
    	value: 850.43
	}, {
		name: '北京',
		value: 54.30
	}, {
    	name: '新疆',
    	value: 50.63
	}, {
    	name: '广西',
    	value: 74.46
	}, {
    	name: '黑龙江',
    	value: 138.39
	}]
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
			left:350,
			top:100
		},
		tooltip: {
			padding: 5,
			backgroundColor: 'rgba(7, 161, 241,0.5)',
			/*borderColor: '#777',*/
			borderWidth: 1,
			formatter:function(obj){
				var companyName = obj.seriesName;
				return '<div style="border-bottom: 1px solid #cccccc;padding-bottom: 5px; margin-bottom: 5px;font-size:20px;">' + companyName + '</div>'
				+ '<div style="text-align:left;margin-top:10px;"><div style="float:left;margin-right:10px;">'+ companyData[companyName].riskDescribe + '</div>'
				+ '<div style="float:left;width:70px;height:80px;text-align:center;border:1px solid #fba430;background:#fba430;"><div>冒烟指数</div><div style="font-size:26px;margin-top:14px;">' + companyData[companyName].mScore + '</div></div></div>';
			}
		},
		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: false,
			itemStyle: {
				normal: {
					areaColor: 'rgba(50, 60, 72,0)',
					borderColor: '#3b98c5',
					borderWidth:2,
				},
				emphasis: {
					areaColor: 'rgba(50, 60, 72,0)'
				}
			}
		},
		series:(function(){
			var res = [];
			var len = -1;
			while (len++ < series3.length - 1) {
				if (ifSelecte(len)) {
					return series3[len];
				}
				/*res.push({
					name: rltData[len].name,
					value: rltData[len].value,
					selected: ifSelecte(len)
				});*/
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
var curIndx = 0;
var timeTicket = setInterval(function() {
    myChartMap.setOption({
		title:{
			text:"风险企业地图分布",
			textStyle:{
				color:"#fff",
				fontSize:26,
			},
			left:350,
			top:100
		},
		tooltip: {
			padding: 5,
			backgroundColor: 'rgba(7, 161, 241,0.5)',
			/*borderColor: '#777',*/
			borderWidth: 1,
			formatter:function(obj){
				var companyName = obj.seriesName;
				return '<div style="border-bottom: 1px solid #cccccc;padding-bottom: 5px; margin-bottom: 5px;font-size:20px;">' + companyName + '</div>'
				+ '<div style="text-align:left;margin-top:10px;"><div style="float:left;margin-right:10px;">'+ companyData[companyName].riskDescribe + '</div>'
				+ '<div style="float:left;width:70px;height:80px;text-align:center;border:1px solid #fba430;background:#fba430;"><div>冒烟指数</div><div style="font-size:26px;margin-top:14px;">' + companyData[companyName].mScore + '</div></div></div>';
			}
		},
		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: false,
			itemStyle: {
				normal: {
					areaColor: 'rgba(50, 60, 72,0)',
					borderColor: '#3b98c5',
					borderWidth:2,
				},
				emphasis: {
					areaColor: 'rgba(50, 60, 72,0)'
				}
			}
		},
		series:(function(){
			var res = [];
			var len = -1;
			while (len++ < series3.length - 1) {
				if (ifSelecte(len)) {
					return series3[len];
				}
				/*res.push({
					name: rltData[len].name,
					value: rltData[len].value,
					selected: ifSelecte(len)
				});*/
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
	}, 4000);
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