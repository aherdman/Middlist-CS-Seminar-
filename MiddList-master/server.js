var express= require('express');
var nodemailer = require("nodemailer"); //
var app=express();
var port=process.env.PORT||8080;
var morgan= require('morgan');
var mongoose= require('mongoose');
var bodyParser = require('body-parser');
var router=express.Router();
var appRoutes= require('./app/routes/api')(router);
var path= require('path');
var fs = require('file-system');
var bcrypt = require('bcrypt-nodejs');
var nev = require("email-verification")(mongoose);
var multer = require('multer');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.use('/api', appRoutes);




mongoose.connect('mongodb://localhost:27017/middlistdb', function(err){
	if(err){
		console.log("cannot connect the database");

	}
	else{
		console.log("we are connected  to our database");

	}
}); 


app.get('*', function(req,res){
	res.sendFile(path.join(__dirname+'/public/app/views/index.html'));

});

app.listen(port, function () {
	console.log("running the server on port"+port);
});



