var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/chat');

var user_schema = new Schema({
	_id: String,
	first_name: String,
	last_name: String,
	timezone: String,
	locale: String,
	profile_pic: String
});
user_model = mongoose.model('user',user_schema,'user');

module.exports = {
	create: (data,callback)=>{
		var item = {
			_id: data._id,
			first_name: data.first_name,
			last_name: data.last_name,
			timezone: data.timezone,
			locale: data.locale,
			profile_pic: data.profile_pic
		};
		var nuevo = new user_model(item).save();
		callback(item);
	},
	show: (callback)=>{
		user_model.find({},(err,items)=>{
			if(!err){
				callback(JSON.stringify(items));
			}else{
				return console.log(err);
			}
		});
	},
	update:(data,callback)=>{
		user_model.findOne({_id: data._id},(err,item)=>{
			item.first_name = data.first_name;
			item.last_name = data.last_name;
			item.timezone = data.timezone;
			item.locale = data.locale;
			item.profile_pic = data.profile_pic;
			item.save();
			callback(item);
		});
	},
	delete:(_id,callback)=>{
		user_model.findOne({_id: _id},(err,post)=>{
			post.remove();
			callback(_id);
		});
	}
};