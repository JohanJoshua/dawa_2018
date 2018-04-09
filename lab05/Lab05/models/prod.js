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
			nombre: req.query.nombre,
			descripcion: req.query.descripcion,
			precio: req.query.precio
		};
		var nuevo = new prod_model(item).save();
		res.send(nuevo);
	},
	update: (req,res)=>{
		prod_model.findOne({_id: req.query._id},(err,producto)=>{
			producto.nombre = req.query.nombre;
			producto.descripcion = req.query.descripcion;
			producto.precio = req.query.precio;
			producto.save();
			res.send(producto);
		});
	},
	delete: (req,res)=>{
		prod_model.findOne({_id: req.query._id},(err,producto)=>{
			producto.remove();
			res.send({status:true});
		});
	},
};