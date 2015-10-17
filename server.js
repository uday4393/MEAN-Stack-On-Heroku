
var express = require('express');
var config = require('./config.js');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express();
var path = require('path');

mongoose.connect(config.database, function(err){
     if(err){
     	console.log(err);
     }else{
        console.log('connected with mongolab');
     }
});

app.use(express.static(path.join(__dirname + '/public')));

app.use(morgan('dev'));

app.get('/home', function(req,res){
     
     res.sendFile(__dirname + '/public/index.html');
});

var port_number = app.listen(process.env.PORT || config.port);
app.listen(port_number);



