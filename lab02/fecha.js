var http = require('http'),
	fs = require('fs'),
	parser = require('./parser_vars.js'),
	p = parser.parse_vars;
	datos = parser.batman;
		
var registro = new Date();
var hours = registro.getHours();
var minutes = registro.getMinutes();
var seconds = registro.getSeconds();
var date = hours+":"+minutes+":"+seconds;
console.log(date);

http.createServer(function(req,res){
	fs.readFile('./form.html',function(err,html){
		var html_string = html.toString();

		var respuesta = p(req),
		parametros = respuesta['parametros'],
		valores = respuesta['valores'];
		var html_string = html_string.replace('{'+parametros[0]+'}',valores[0]);
		//Codigo de la Fecha
		var fecha = valores[0];		
		var actual = new Date();
		var dd = actual.getDate();
		var mm = actual.getMonth()+1;
		var yyyy = actual.getFullYear();
		if(dd<10){
		    dd='0'+dd;
		} 
		if(mm<10){
		    mm='0'+mm;
		} 
		var actual = mm+'/'+dd+'/'+yyyy;

		var today = new Date().getTime();
	
		var another = new Date(fecha).getTime();

		var diference = (another - today);
		
		var diference = ((((diference/1000)/60)/60)/24)+1;
		html_string = html_string.replace('{actual}',actual);
		html_string = html_string.replace('{diference}',Math.round(diference));
		//Codigo de la Hora
		var registro = new Date();
		var hours = registro.getHours();
		var minutes = registro.getMinutes();
		var seconds = registro.getSeconds();
		var date = hours+":"+minutes+":"+seconds;
		html_string = html_string.replace('{hora}',date);

		var days = new Date(diference).getDate();
		res.writeHead(200,{'Content-type':'text'});
		res.write(html_string);
		res.end();
	});
}).listen(8181);