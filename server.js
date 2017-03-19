//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/main.html'));
});
app.get('/app', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app.html'));
});
app.get('/miko', function(req, res){
  res.sendFile(path.join(__dirname, 'views/miko.html'));
});
app.get('/vid1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/vid1.html'));
});
app.get('/vid2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/vid2.html'));
});
app.get('/vid3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/vid3.html'));
});
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});