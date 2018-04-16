var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/baches');

var price_schema = new Schema({
	_id:Number,
	precio:Number,
});
price_model = mongoose.model('precios',price_schema,'precios');
module.exports = {
	show: (req,res)=>{
		price_model.find({},(err,items)=>{
			if (!err) {
				res.render('crudPrice',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create:(req,res)=>{
		var item = {
			_id:req.body._id,
			precio:req.body.precio,
		};
		var nuevo = new price_model(item).save();
		res.redirect('/price');
	},
	editar:(req,res)=>{
		price_model.findOne({_id:req.body._id},(err,price)=>{
			res.render('editPrice',{data: price});
		});
	},
	update:(req,res)=>{
		price_model.findOne({_id: req.body._id},(err,price)=>{
			price._id = req.body._id;
			price.precio = req.body.precio;
			price.save();
			res.redirect('/price');
		});
	},
	delete:(req,res)=>{
		price_model.findOne({_id: req.body._id},(err,price)=>{
			price.remove();
			res.redirect('/price');
		});
	},
}