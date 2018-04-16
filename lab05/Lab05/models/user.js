var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var user_schema = new Schema({
	nombre: String,
	clave: String,
});
user_model = mongoose.model('user',user_schema,'user');

module.exports = {
	validate: (req,res)=>{
		console.log(req.body);
		user_model.findOne({
			nombre: req.body.username,
			clave: req.body.password
		},(err,producto)=>{
			if (producto) {
				res.send('Logeado');
			}else{
				res.send('Tu clave o contraseña son incorrectos');
			}
		});
	},
};