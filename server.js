var http = require('http');
var urls  = require('url');
var router = require('./router.js');
var routes = require('./routes.js');
var port = 3000;


http.createServer( function(req, res){
  url = urls.parse(req.url).pathname;
  router.router(routes.routes, url, res);
}).listen(port, 'localhost', console.log('Server run port :'+port),
function () {
  console.log('Mensaje desde callback');
});
