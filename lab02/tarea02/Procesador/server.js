var http = require('http'),
    fs = require('fs'),
    qs = require('querystring'),
    pro = require('./procesador.js'),
    procesador = pro.procesador;

http.createServer(function(req,res){
  fs.readFile('./form.html',function(err,html){
    
    var body = '';
    var html_string = html.toString();
      req.on('data', function(chunk) {
      body += chunk;
      });
      req.on('end', function() {
      var data = qs.parse(body);
      var datos = procesador(data.texto,data.accion);
      console.log(datos);

      html_string = html_string.replace('{accion}',data.accion);
      html_string = html_string.replace('{texto}',data.texto);
      html_string = html_string.replace('{resultado}',datos);

      res.writeHead(200,{'Content-type':'text'});
      res.write(html_string);
      res.end();

      });
 
  });
}).listen(8181);