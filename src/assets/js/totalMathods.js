
/**参数说明： 
 
 * 根据长度截取先使用字符串，超长部分追加… 
 
 * str 对象字符串 
 
 * len 目标字节长度 
 
 * 返回值： 处理结果字符串 
 
 */
function cutString(str, len) { 
	//length属性读出来的汉字长度为1  
	if(str.length*2 <= len) {  
	  return str;  
	}
	var strlen = 0;  
	var s = ""; 
	for(var i = 0;i < str.length; i++) {  
	  s = s + str.charAt(i);   
	  if (str.charCodeAt(i) > 128) {   
		strlen = strlen + 2;   
		if(strlen >= len){   
		  return s.substring(0,s.length-1) + "...";  
		}  
	  } else {   
		strlen = strlen + 1;  
		if(strlen >= len){  
		  return s.substring(0,s.length-2) + "...";  
		} 
	  }  
	} 
	return s; 
  } 
/**参数说明： 
 
 * 根据关键词截取字符串
 
 * argumentsArr 对象字符串 数组
 
 * 返回值： 处理结果字符串 
 
 */
  function cutStringByKey(str,argumentsArr){
	var flag = 0;
	var index = [];
	var Index;
	for(var i=0,le=argumentsArr.length;i<=le;i++){
	//	console.log(str.indexOf(argumentsArr[i]))
	  if(str.indexOf(argumentsArr[i])== -1){
		flag = 0;
		index.push(999999);
	  }else{
		flag = 1;
		index.push(str.indexOf(argumentsArr[i]));
	  }
	}
	Index = Math.min.apply(null, index);
	var result ='';
	if(flag== 1){
	  result = str;
	}else{
	  result = str.substr(Index);
	}
	return result
  }
/**参数说明： 
 
 * 根据输入信息 返回 随机数
 
 * obj 对象
	obj={
		base:'基础数值',
		max:'最大范围',
		min:'最小范围',
		count:'个数',
		scope:'自定义范围'
	}
	**优先级 优先 max min 
	若max min scope 同时存在，优先max min
 
 * 返回值： 处理结果字符串 
 
 */
function getRandom(obj){

	var res = [];
	var scope=0;
	if(obj.min && obj.max){
		// console.log("min&&max")
		scope = (obj.max-obj.min+1)+obj.min
	}else if(obj.min){
		// console.log("min")
		scope = obj.min+1;
	}else{
		// console.log("others")
		scope = obj.scope
	}
	for(var i=0;i<obj.count;i++){
		res.push(parseInt(obj.base+Math.random()*scope,10))
	}
	return res;
}

export {
	cutStringByKey,
	cutString,
	getRandom
}