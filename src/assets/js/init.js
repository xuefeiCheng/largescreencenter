(function() {
    window.caseInfo = {};
    caseInfo.getScaleAndLocation = function() {
        // 用于"transform": "scale(" + scale + ")",
        var scale = 1;
        // 缩放后居中的位置,
        var location = {
            x: 0,
            y: 0
        }
        // 2018-10-24 变更
        //获取的是body div的高度
        // var width = document.body.clientWidth;
        //var height = document.body.clientHeight;
        // 获取的是 可见区域的宽高
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        console.log(width)
        console.log(height)
        if (width / height < 1920 / 1080) {
            scale = width / 1920;
             location.y = (height - 1080 * scale) / 2;
             console.log("one ")
        } else {
            scale = height / 1080;
            location.x = (width - 1920 * scale) / 2;
            console.log('two')
        }
        console.log('scale')
        console.log(scale);
        return {
            scale: scale,
            location: location
        };
    }

    caseInfo.resizePage = function() {
        var scaleAndLocation = caseInfo.getScaleAndLocation();
        sessionStorage.setItem('top_localtion',JSON.stringify(scaleAndLocation.location.y));
        sessionStorage.setItem('left_localtion',JSON.stringify(scaleAndLocation.location.x));
        if (scaleAndLocation.scale != 1) {
            $(".caseinfo-main-container").css({
                "transform-origin": "left top",
                "-webkit-transform-origin": "left top",
                "transform": "scale(" + scaleAndLocation.scale + ")",
                "-webkit-transform": "scale(" + scaleAndLocation.scale + ")",
                "transform-origin": "left top",
                "-webkit-transform-origin": "left top",
                "margin-left": scaleAndLocation.location.x + "px",
                "margin-top": scaleAndLocation.location.y + "px"
            });
        }
    }

    caseInfo.configData = {
        drawLineInterval: 300000, //重绘曲线的间隔
        drawLineDur: 2000, //画线用时
        drawBarInterval: 5 //重新绘制柱状图的时间（单位:分钟）
    }

})();
