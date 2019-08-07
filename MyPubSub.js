
var message = {} // 事件总线对象
var MyPubSub = {}; // 向外暴露的操作对象

// 订阅方法
function subscribe(msg, func) {
  // 1. 验证回调的有效性
  if(!typeof func === 'function'){
    return;
  }
  // 2. 判断之前是否定义过msg事件
  if(!message.hasOwnProperty(msg)){
    message[msg] = {};
  }
  
  // 3. 生成唯一标识字段
  var token = 'aaa'
  // 4. 将自定事件对应的回调和自定义事件名
  message[msg][token] = func
}

// 发布消息的方法
function publish(msg, data) {
  // 1. 找到事件名
  var obj = message[msg]
  var func;
  // 遍历取出自定义事件额回调
  for(var s in obj){
    func = obj[s]
	 // 调用自定义事件的回调
	func(msg, data);
  }
 
}

// 将方法统一添加到暴露对象中： MyPubSub
MyPubSub.subscribe = subscribe;
MyPubSub.publish = publish;
// 向外暴露
export default MyPubSub;