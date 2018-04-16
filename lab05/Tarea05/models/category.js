var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/baches');

var category_schema = new Schema({
	_id: Number,
	nombre: String,
	subcategorias:[{
		_id: Number,
		nombre: String,
	}]
});
category_model = mongoose.model('categorias',category_schema,'categorias');

module.exports = {
	send: (req,res)=>{
		category_model.find({},(err,items)=>{
			if (!err) {
				res.render('createCategory',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	ajax: (req,res)=>{
		category_model.findOne({_id:req.query._id},(err,items)=>{
			if (!err) {
				res.send(items.subcategorias);
			}else{
				return console.log(err);
			}
		});
	},
	show: (req,res)=>{
		category_model.find({},(err,items)=>{
			if(!err){
				res.render('crudCategories',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create: (req,res)=>{
		var item = {
			_id:req.body._id,
			nombre: req.body.nombre,
			subcategorias:[],
		};
		if (typeof req.body.subcategorias == 'string') {
			item.subcategorias._id=1;
			item.subcategorias.nombre=req.body.subcategorias;
		}else{
			for (var i = 1; i <= req.body.subcategorias.length; i++) {
				var subcategorias = {
				_id:i,
				nombre:req.body.subcategorias[i-1],
				};
				item.subcategorias.push(subcategorias);
			}
		}
		var nuevo = new category_model(item).save();
		res.redirect('/category');
	},
	update: (req,res)=>{
		category_model.findOne({_id: req.body._id},(err,category)=>{
			category._id = req.body._id;
			category.nombre = req.body.nombre;
			var c=1;
			//Check if you have more than one value

			if (typeof req.body.subcategorias == 'string') {
			category.subcategorias._id=req.body.sub_id;
			category.subcategorias.nombre=req.body.subcategorias;
			c++;
			}else{
				for (var i = 0; i < req.body.subcategorias.length; i++) {
				category.subcategorias[i]._id=req.body.sub_id[i];
				category.subcategorias[i].nombre=req.body.subcategorias[i];
				c++;
				}
			}

			//Check if you were send another value
			if (!req.body.newSubcategorias) {

			}else if (typeof req.body.newSubcategorias == 'string') {
			var subcategorias={
				_id:c,
				nombre:req.body.newSubcategorias,
			};
			category.subcategorias.push(subcategorias);
			}else{
				for (var i = 1; i <= req.body.subcategorias.length; i++) {
					var subcategorias = {
					_id:c,
					nombre:req.body.newSubcategorias[i-1],
					};
					category.subcategorias.push(subcategorias);
					c++;
				}
			}
			category.save();
			res.redirect('/category');
		});
	},
	editar: (req,res)=>{
		category_model.findOne({_id: req.body._id},(err,category)=>{
			res.render('editCategory',{data: category});
		});
	},
	delete: (req,res)=>{
		category_model.findOne({_id: req.body._id},(err,category)=>{
			category.remove();
			res.redirect('/category');
		});
	},
};