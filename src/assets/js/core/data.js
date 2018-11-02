// 各盟市今日案件数量
caseInfo.getBarData = function() {
    var result = [{
        city: '阿拉善',
        total: 3253
    }, {
        city: '乌海',
        total: 4350
    }, {
        city: '鄂尔多斯',
        total: 4530
    }, {
        city: '巴彦淖尔',
        total: 3453
    }, {
        city: '包头',
        total: 4726
    }, {
        city: '呼和浩特',
        total: 1601
    }, {
        city: '乌兰察布',
        total: 3405
    }, {
        city: '锡林郭勒',
        total: 2803
    }, {
        city: '赤峰',
        total: 860
    }, {
        city: '通辽',
        total: 4413
    }, {
        city: '兴安',
        total: 2607
    }, {
        city: '呼伦贝尔',
        total: 3830
    }];
    return result;
}

// 近一个小时案件总量趋势统计
caseInfo.getLineData = function() {
    var result = [4, 8, 10, 8, 0, 4, 6, 0, 8, 6, 8, 5];
    return result;
}

// 地图
caseInfo.getMapData = function() {
    var result = [{
        name: '包头市',
        value: [109.847, 42.06, 100000]
    }, {
        name: '乌海市',
        value: [106.802, 39.66, 80000]
    }, {
        name: '赤峰市',
        value: [118.895, 43.26, 70000]
    }, {
        name: '通辽市',
        value: [122.251, 43.66, 60000]
    }, {
        name: '鄂尔多斯市',
        value: [109.087, 39.61, 90000]
    }, {
        name: '呼伦贝尔市',
        value: [120.772, 49.21, 50000]
    }, {
        name: '呼和浩特市',
        value: [111.058, 40.847, 55555]
    }, {
        name: '巴彦淖尔市',
        value: [107.394, 40.75, 40000]
    }, {
        name: '乌兰察布市',
        value: [111.740, 42.00, 30000]
    }, {
        name: '锡林郭勒盟',
        value: [116.054, 44.94, 100000]
    }, {
        name: '阿拉善盟',
        value: [103.735, 40.86, 10000]
    }, {
        name: '兴安盟',
        value: [121.044, 46.09, 45000]
    }];
    return result;
}
// 全区案件种类统计
caseInfo.getPieData = function() {
    var result = [
                  { value: 110, name: '命案' },
                  { value: 70, name: '抢劫案' },
                  { value: 100, name: '抢夺案' },
                  { value: 60, name: '涉毒案' },
                  { value: 103, name: '伤害案' },
                  { value: 55, name: '盗窃案' },
                  { value: 102, name: '诈骗' },
                  { value: 40, name: '抢劫案' },
                  { value: 103, name: '贪污受贿' },
                  { value: 65, name: '侵犯公民人身权' },
                  { value: 90, name: '危害公共安全' },
                  { value: 60, name: '其他案件' },
              ];
    return result;
}