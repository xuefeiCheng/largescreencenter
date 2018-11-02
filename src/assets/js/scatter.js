let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

function drawTest() {
    var dataBJ = [
        [39,55,139,"某某科技"],
        [215,25,11,"某某有限"],
        [56,56,47,"某某养殖"],
        [34,79,72,"某某房产"],
        [61,19,24,"某某绿植"],
        [261,49,34,"某某绿植"],
        [161,33,94,"某某绿植"],
        [11,12,24,"某某绿植"],
        [611,89,24,"某某绿植"],
        [612,54,12,"某某绿植"],
        [31,67,224,"某某绿植"],
        [91,34,24,"某某绿植"],
        [91,42,264,"某某绿植"]
    ];
    
    
    
    var schema = [
        {name: 'date', index: 0, text: '企业规模'},
        {name: 'AQIindex', index: 1, text: '冒烟指数'},
        {name: 'PM25', index: 2, text: '企业风险'}
    ];
    
   
    var itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };
    
    var myChartBar = echarts.init(document.getElementById('industryTrends'));
    var option = {
        // backgroundColor: '#404a59',
        color: [
            '#dd4444', '#fec42c', '#80F1BE'
        ],
        grid: {
            x: '10%',
            x2: 150,
            y: '25%',
            y2: '10%'
        },
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                    + obj.seriesName + ' ：'
                    + value[3]
                    + '</div>'
                    + schema[0].text + '：' + value[0] + '<br>'
                    + schema[1].text + '：' + value[1] + '<br>'
                    + schema[2].text + '：' + value[2] + '<br>';
            }
        },
        xAxis: {
            type: 'value',
            name: '企业规模',
            nameGap: 16,
            nameTextStyle: {
                color: '#fff',
                fontSize: 14
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '冒烟指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            splitLine: {
                show: false
            }
        },
        visualMap: [
            {
                left: 'right',
                top: '10%',
                dimension:2 ,
                min: 0,
                max: 250,
                itemWidth: 15,
                itemHeight: 40,
                calculable: true,
                precision: 0.1,
                text: ['圆形大小：企业规模'],
                textGap: 30,
                textStyle: {
                    color: '#fff'
                },
                inRange: {
                    symbolSize: [10, 70]
                },
                outOfRange: {
                    symbolSize: [10, 70],
                    color: ['rgba(255,255,255,.2)']
                },
                controller: {
                    inRange: {
                        color: ['#c23531']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            },
            {
                left: 'right',
                bottom: '5%',
                dimension: 1,
                min: 0,
                max: 50,
                itemWidth: 15,
                itemHeight: 40,
                calculable: true,
                precision: 0.1,
                text: ['明暗：企业风险'],
                textGap: 30,
                textStyle: {
                    color: '#fff'
                },
                inRange: {
                    colorLightness: [1, 0.5]
                },
                outOfRange: {
                    color: ['rgba(255,255,255,.2)']
                },
                controller: {
                    inRange: {
                        color: ['#c23531']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            }
        ],
        series: [
            {
                name: '企业',
                type: 'scatter',
                itemStyle: itemStyle,
                data: dataBJ
            }
        ]
    };

    myChartBar.setOption(option);
}
export {
    drawTest
}
