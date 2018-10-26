myButton.addEventListener('click',function(){
  let request = new XMLHttpRequest()
  request.open('get','http://jack.com:8002/xxx')
  request.send()
  request.onreadystatechange = function(){
    if(readyState === 4){
      console.log('相应请求完毕')
      console.log(readyState)
      if(request.status >= 200 && request.status <300){
        console.log('请求成功')
        console.log(request.responseText) // responseText 类型为 string
        let string = request.responseText对象
        // 把符合 JSONP 语法的字符串
        // 转换成 JS 对应的对象
        let object = window.JSON.parse(string)
        // JSON.parse 是浏览器提供的
      }else if(request.status >= 400){
        console.log('请求失败')
      }
    }
  }
})