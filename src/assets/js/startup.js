$(function() {
    caseInfo.resizePage();
    window.onresize = function() {
        throttle(caseInfo.resizePage);
    }

    function throttle(method, context) {
        clearTimeout(method.tId);
        method.tId = setTimeout(function() {
            method.call(context);
        }, 100);
    }

 //    caseInfo.drawLine();
 //    caseInfo.drawHeatmap();
 //    caseInfo.drawBar();
 //    caseInfo.drawPie();
	// caseInfo.drawRiskTrend();
	// caseInfo.drawIndustryTrends();
});
