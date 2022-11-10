const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {

  const url = req.url;
  let data = '';
  const menu = '<ul><li><a href="/">index</a></li><li><a href="/about">about</a></li><li><a href="/contacts">contacts</a></li></ul>';

  let statusCode = false;

  switch(url) {
    case '/':
      data = '<head><title>Index</title></head>' + menu + '<p>I\'m index!</p>';
      break;
    case '/about':
    case '/about/':
      data = '<head><title>About</title></head>' + menu + '<p>I\'m about page!</p>';
      break;
    case '/contacts':
    case '/contacts/':
      data = '<head><title>Contacts</title></head>' + menu + '<p>I\'m contacts page!</p>';
      break;
    default:
      data = '<head><title>404: not found</title></head>' + menu + '<p>Not found. error 404</p>';
      statusCode = 404;
      break;
  }

  console.log('hi there');
  res.statusCode = statusCode || 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(data);
  // console.log('env',process.env);
  res.end();
});

const port = process.env.port || 5000;

server.listen(port, (err) => {
  if (err) { 
    console.log(err);
  }
  console.log('server is here');
})