var http = require('http');
fs = require('fs');

http.createServer(function(solicitud,respuesta){
	if (solicitud.url === '/') {
		fs.readFile('./index.html',function(error,html){
		console.log('Conexion entrante');	
		respuesta.write(html);
		respuesta.end();
	});
	}else
	if (solicitud.url === '/nosotros.html') {
		fs.readFile('./nosotros.html',function(error,html){
		console.log('Conexion entrante');	
		respuesta.write(html);
		respuesta.end();
	});
	}else
	if (solicitud.url === '/servicios.html') {
		fs.readFile('./servicios.html',function(error,html){
		console.log('Conexion entrante');	
		respuesta.write(html);
		respuesta.end();
	});
	}else
	if (solicitud.url === '/catalogo.html') {
		fs.readFile('./catalogo.html',function(error,html){
		console.log('Conexion entrante');	
		respuesta.write(html);
		respuesta.end();
	});
	}else
	if (solicitud.url === '/contactenos.html') {
		fs.readFile('./contactenos.html',function(error,html){
		console.log('Conexion entrante');	
		respuesta.write(html);
		respuesta.end();
	});
	}
}).listen(8080);
console.log('Servidor levantado');