function setTime() {
    var mydate = new Date();

    var y = mydate.getFullYear();
    var month = mydate.getMonth() + 1;
    var d = mydate.getDate();
    var week = mydate.getDay();
    var h = mydate.getHours();
    var m = mydate.getMinutes();
    var s = mydate.getSeconds();

    switch (week) {
      case 0 :
        week = "星期日";
        break;
      case 1 :
        week = "星期一";
        break;
      case 2 :
        week = "星期二";
        break;
      case 3 :
        week = "星期三";
        break;
      case 4 :
        week = "星期四";
        break;
      case 5 :
        week = "星期五";
        break;
      case 6 :
        week = "星期六";
        break;
    }


    // var str = y + "年" + month + "月" + d + "日 " + week + " " + zero(h) + ":" + zero(m) + ":" + zero(s);
    var str = y + "年" + month + "月" + d + "日 " + zero(h) + "时" + zero(m) + "分" + zero(s)+"秒";

    // document.body.innerHTML = str; // 稍后讲
    document.querySelector('.timer').innerHTML = str
  }

  // 写一个简单的补零函数
 /* function zero(m) {
    if (m < 10) return "0" + m;
    return m

  }*/
  function zero(m) {
    return m<10 ? "0"+m : m;
  }


  // 可以简单使用一下定时器 让定时器每隔1秒去调用一次函数 重复调用 可以实现在页面时间变化
 export default{
  setTime
 }
  //setTime(); // 直接调用函数

  //setInterval(setTime, 1000);//定时器来调用这个函数