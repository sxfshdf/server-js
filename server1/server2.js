var http = require('http')
var fs = require('fs')

var server = http.createServer((request, response) => {
  console.log(request.url)
  console.log(__dirname + '/static' + request.url)
  try {
    var fileContent = fs.readFileSync(__dirname + '/static' + request.url)
    response.write(fileContent)
  }catch(error){
    response.writeHead(404,'not found')
  }
  response.end()
})

console.log('open http://localhost:9000')
server.listen(9000)
