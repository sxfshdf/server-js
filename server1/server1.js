var http = require('http')



// var server = http.createServer((request, response) => {
//   console.log('xxxx')
//   response.setHeader('Content-Type', 'text/html;charset=utf-8')
//   response.write('<h1>hello</h1>')
//   response.end()
// })

var server = http.createServer((request,response)=>{
  setTimeout(()=>{
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.writeHead(404, 'Not Found')
    response.write('<html><head><meta charset="gbk" /></head>')
    response.write('<body>')
    response.write('<h1>你好</h1>')
    response.write('</body>')
    response.write('</html>')
    response.end()

  },2000)
})

console.log('open http://localhost:9000')
server.listen(9000)