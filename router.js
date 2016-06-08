function router(routes, url, res){
  if(typeof routes[url] === 'function'){
    return routes[url](res);
  }else{
    error404(res);
  }
}


function error404(res){
  res.writeHead(404, {'Content-type':'text/html'});
  res.write('<h1>404 Not found</h1>');
  res.end();
}

module.exports.router=router;
