var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
user = require('./models/user'),
producto = require('./models/prod');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.set('view engine','jade');
app.get('/',(req,res)=>{
	res.send('Hola mundo');
});
app.get('/login',(req,res)=>{
	res.render('login');
});
app.get('/table',(req,res)=>{
	res.render('table');
});

app.post('/login', user.validate);

app.get('/producto/crear',(req,res)=>{
	res.render('crearProducto');
});
app.post('/producto/editar',producto.editar);
app.get('/producto', producto.show);
app.post('/producto', producto.create);
app.post('/producto/update', producto.update);
app.post('/producto/delete', producto.delete);

app.listen(9090,()=>{
	console.log('Iniciando!');
});