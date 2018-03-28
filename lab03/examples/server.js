const http = require('http');
const fs = require('fs');
http.createServer(function(req,res){
	fs.readFile('./index.html',(err,html)=>{
	res.write(html);
	res.end();
	});
}).listen(8181);
console.log("Runing Server");