//Model for a listing	
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var SellSchema= new Schema({
	picture: Object,
	title:  String,
	location: String,
	date: String,
	price: String,
	condition:   String,
	category:   String,
	poster: String,
	description:String

});
module.exports=mongoose.model('Sell',SellSchema);