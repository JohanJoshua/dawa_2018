var http = require('http'),
    fs = require('fs'),
    qs = require('querystring'),
    cal = require('./calculadora.js'),
    calculadora = cal.calculadora;

http.createServer(function(req,res){
  fs.readFile('./form.html',function(err,html){
    
    var body = '';
    var html_string = html.toString();
      req.on('data', function(chunk) {
      body += chunk;
      });
      req.on('end', function() {
      var data = qs.parse(body);
      var datos = calculadora(data.operacion,parseFloat(data.x),parseFloat(data.y));
      console.log(datos);

      html_string = html_string.replace('{operacion}',datos[0]);
      html_string = html_string.replace('{x}',datos[1]);
      html_string = html_string.replace('{y}',datos[2]);
      html_string = html_string.replace('{resultado}',datos[3]);

      res.writeHead(200,{'Content-type':'text'});
      res.write(html_string);
      res.end();

      });
          
  });
}).listen(8181);