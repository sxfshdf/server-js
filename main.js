window.jQuery.ajax = function(url,method,body,successFn,failFn){
  let request = new XMLHttpRequest()
  request.open(method,url)
  request.onreadystatechange = function(){
    if(readyState === 4){
      if(request.status >= 200 && request.status <300){
        successFn.call(undefined,request.responseText)
      }else if(request.status >= 400){
        failFn.call(undefined,request)
      }
    }
  }
  request.send(body)
}

myButton.addEventListener('click',function(){
  window.jQuery.ajax(
    '/xxx',
    'post',
    'a=1&b=2',
    (reponseText)=>{console.log(1)},
    (request)=>{console.log(2)}
  )
})



window.jQuery.ajax = function(options){
  let url = options.url
  let method= options.method
  let body = options.body
  let successFn = options.successFn
  let failFn = options.failFn

  let request = new XMLHttpRequest()
  request.open(method,url)
  request.onreadystatechange = function(){
    if(readyState === 4){
      if(request.status >= 200 && request.status <300){
        successFn.call(undefined,request.responseText)
      }else if(request.status >= 400){
        failFn.call(undefined,request)
      }
    }
  }
  request.send(body)
}

myButton.addEventListener('click',function(){
  let obj = {
    url: '/xxx',
    method: 'get',
    successFn: ()=>{},
    failFn:()=>{}
  }
  window.jQuery.ajax(

  )
})

// 简化
myButton.addEventListener('click',function(){
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    successFn: (x)=>{
      console.log(x)
    },
    failFn:(x)=>{
      console.log(x)
      console.log(x.status)
      console.log(x.responseText)
    }
  })
})

// 成功后需要执行两个函数，怎么办
function f1(reponseText){}
function f2(reponseText){}

myButton.addEventListener('click',function(){
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    successFn: (x)=>{
      f1.call(undefined,x)
      f2.call(undefined,x)
    },
    failFn:(x)=>{
      console.log(x)
    }
  })
})

// 设置header
window.jQuery.ajax = function(options){
  let url = options.url
  let method= options.method
  let body = options.body
  let successFn = options.successFn
  let failFn = options.failFn
  let headers = options.headers

  let request = new XMLHttpRequest()
  request.open(method,url)
  for(let key in headers){
    let value = headers[key]
    request.setResponseHeader(key,value)
  }
  request.onreadystatechange = function(){
    if(readyState === 4){
      if(request.status >= 200 && request.status <300){
        successFn.call(undefined,request.responseText)
      }else if(request.status >= 400){
        failFn.call(undefined,request)
      }
    }
  }
  request.send(body)
}

myButton.addEventListener('click',function(){
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    headers: {
      'content-type':'application/x-www-form-urlencoded',
      'frank':'18'
    },
    successFn: (x)=>{
      f1.call(undefined,x)
      f2.call(undefined,x)
    },
    failFn:(x)=>{
      console.log(x)
    }
  })
})


// Promise 一个确定函数形式的规范
// jQuery的ajax
function f1(reponseText){}
function f2(reponseText){}

myButton.addEventListener('click',function(){
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    success: (x)=>{
      f1.call(undefined,x)
      f2.call(undefined,x)
    },
    error:(x)=>{
      console.log(x)
    }
  })
})
// Promise 写法
function success(reponseText){
  console.log(responseText)
}
function fail(reponseText){
  console.log(request)
}

myButton.addEventListener('click',function(){
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
  }).then(success,fail)
})

// Promise 不需要记需要传success还是fail还是其他的，只需要用 .then(success,fail) 就可以了
myButton.addEventListener('click',function(){
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
  }).then(
    (reponseText)=>{console.log(responseText)},
    (request)=>{console.log(request)}
  ) 
})

// then的中文含义：然后 。第一次成功，然后...
myButton.addEventListener('click',function(){
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
  }).then(
    (reponseText)=>{console.log(responseText)},
    (request)=>{console.log(request)}
  ) 
}).then(
  (上一次的处理结果)=>{
    console.log(上一次的处理结果)
  },
  (request)=>{console.log(request)}
)


// Promise 封装  Promise接受一个函数，返回一个含 then 属性 hash ，
// then 接受两个函数 返回一个带 then 的 hash

window.jQuery.ajax = function(url,method,body,headers){
  return new Promise(function(resolve,reject){
    let request = new XMLHttpRequest()
    request.open(method,url)
    for(let key in headers){
      let value = headers[key]
      request.setRequestHeader(key,value)
    }
    request.onreadystatechange = function(){
      if(readyState === 4){
        if(request.status >= 200 && request.status <300){
          resolve.call(undefined,request.responseText)
        }else if(request.status >= 400){
          reject.call(undefined,request)
        }
      }
    }
    request.send(body)
  })
}

