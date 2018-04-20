var express = require('express'),
app = express(),
http = require('http').Server(app),
port = process.env.PORT || 3000,
io = require('socket.io')(http),
user = require('./models/user');

io.on('connection',(socket)=>{
	console.log('Usuario conectado!');
	user.show((data)=>{
		socket.emit('listar',data);
	});
	//evento de edicion
	socket.on('actualizar',(data)=>{
		console.log(data);
		user.update(data,(rpta)=>{
			io.emit('nuevo',rpta);
			io.emit('edit_message',{
				_id:rpta._id,
				type:'editado'});
		});
	});
	//evento de creacion
	socket.on('crear',(data)=>{
		user.create(data,(rpta)=>{
			io.emit('nuevo',rpta);
			io.emit('create_message',{
				_id:rpta._id,
				type:'creado'});
		});
	});
	socket.on('eliminar',(data)=>{
		user.delete(data,(rpta)=>{
			io.emit('borrado',rpta);
		});
	});

	socket.on('disconnect',()=>{
		console.log('Usuario desconectado!');
	});
});

app.set('view engine','jade');
app.use('/static',express.static('public'));

app.get('/',(req,res)=>{
	res.render('main');
});

http.listen(port,()=>{
	console.log('Servidor conectado en *:'+port);
});