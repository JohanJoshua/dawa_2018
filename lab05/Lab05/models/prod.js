var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var producto_schema = new Schema({
	nombre: String,
	descripcion: String,
	precio: String
});
prod_model = mongoose.model('producto', producto_schema, 'producto');

module.exports = {
	show: (req,res)=>{
		prod_model.find({},(err,items)=>{
			if (!err) {
				//res.send(items);
				res.render('table',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create: (req,res)=>{
		var item = {
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			precio: req.body.precio
		};
		var nuevo = new prod_model(item).save();
		res.redirect('/producto');
	},
	update: (req,res)=>{
		prod_model.findOne({_id: req.body._id},(err,producto)=>{
			producto.nombre = req.body.nombre;
			producto.descripcion = req.body.descripcion;
			producto.precio = req.body.precio;
			producto.save();
			res.redirect('/producto');
		});
	},
	editar: (req,res)=>{
		prod_model.findOne({_id: req.body._id},(err,producto)=>{
			res.render('editarProducto',{data: producto});
		});
	},
	delete: (req,res)=>{
		prod_model.findOne({_id: req.body._id},(err,producto)=>{
			producto.remove();
			res.redirect('/producto');
		});
	},
};