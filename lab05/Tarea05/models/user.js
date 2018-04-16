var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/baches');

var user_schema = new Schema({
	nombres:String,
	apellidos:String,
	telefono:Number,
	celular:Number,
	ciudad:String,
	contrasenia:String,
	direccion:String,
	email:String,
	tarjeta:[{
			nro:Number,
			fec_exp:String,
			cod_seg:String,
			clave:String,
			}]
});
user_model = mongoose.model('usuarios',user_schema,'usuarios');

module.exports = {
	show: (req,res)=>{
		user_model.find({},(err,items)=>{
			if (!err) {
				res.render('crud',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create:(req,res)=>{
		var item = {
			nombres: req.body.nombres,
			apellidos: req.body.apellidos,
			telefono: req.body.telefono,
			celular: req.body.celular,
			ciudad: req.body.ciudad,
			contrasenia: req.body.contrasenia,
			direccion: req.body.direccion,
			email: req.body.email,
			tarjeta:[{
				nro: req.body.nro,
				fec_exp: req.body.fec_exp,
				cod_seg: req.body.cod_seg,
				clave: req.body.clave
			}]
		};
		var nuevo = new user_model(item).save();
		res.redirect('/');
	}, 
	update: (req,res)=>{
		user_model.findOne({_id: req.body._id},(err,user)=>{
			user.nombres = req.body.nombres;
			user.apellidos = req.body.apellidos;
			user.telefono = req.body.telefono;
			user.celular = req.body.celular;
			user.ciudad = req.body.ciudad;
			user.contrasenia = req.body.contrasenia;
			user.direccion = req.body.direccion;
			user.email = req.body.email; 
			user.tarjeta[0].nro = req.body.nro;
			user.tarjeta[0].fec_exp = req.body.fec_exp;
			user.tarjeta[0].cod_seg = req.body.cod_seg;
			user.tarjeta[0].clave = req.body.clave;
			user.save();
			res.redirect('/');
		});
	},
	editar: (req,res)=>{
		user_model.findOne({_id: req.body._id},(err,user)=>{
			res.render('editUser',{data: user});
		});
	},
	delete: (req,res)=>{
		user_model.findOne({_id: req.body._id},(err,user)=>{
			user.remove();
			res.redirect('/');
		});
	},
};