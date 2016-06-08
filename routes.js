var routes={};

routes['/']=root;
routes['/admin'] = admin;

function root(res){
  res.writeHead(200,{ 'Content-type':'text/html'});
  res.write('<h1>Welcome to africa</h1>');
  res.end();
}

function admin(res){
  res.writeHead(200, {'Content-type':'text/html'});
  res.write('<h1>Welcome to administradtion</h1>');
  res.end();
}

module.exports.routes=routes;
