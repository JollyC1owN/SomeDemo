(function (w) {
  var message = {}
  var PubSub = {};
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
    message[msg][token] = func
  }
  
  
  function publish(msg, data) {
    // 1. 找到事件名
    var obj = message[msg]
    var func;
    for(var s in obj){
      func = obj[s]
    }
    func(msg, data);
  }
  PubSub.subscribe = subscribe;
  PubSub.publish = publish;
  w.MyPubSub = PubSub;
})(window)
