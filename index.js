const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

let data = '';
const menu = '<ul><li><a href="/">index</a></li><li><a href="/about">about</a></li><li><a href="/contacts">contacts</a></li></ul>';

app.use(express.static(path.join(__dirname,'pages')));

const people = [
  {
    "name": "game",
    "score": 25
  },
  {
    "name": "psn",
    "score": 125
  }
];

app.get('/game/people',(req,res) => {
  res.json(people);
})

app.get('/',(req,res) => {
  res.set()
  // res.send( '<head><title>Index</title></head>' + menu + '<p>I\'m index page!</p>');
  console.log(path.join(__dirname,'pages','index.html'));
  res.sendFile(path.join(__dirname,'pages','index.html'));
});

app.get('/about',(req,res) => {
  res.send( '<head><title>About</title></head>' + menu + '<p>I\'m about page!</p>');
});

app.get('/contacts',(req,res) => {
  res.send('<head><title>Contacts</title></head>' + menu + '<p>I\'m contacts page!</p>');
});

app.use((req, res, next) => {
  res.status(404).send('<head><title>404: not found</title></head>' + menu + '<p>Not found. error 404</p>')
})



const port = process.env.port || 5000;

app.listen(port, (err) => {
  if (err) { 
    console.log(err);
    return;
  }
  console.log('server is here');
})
