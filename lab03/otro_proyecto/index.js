var _ = require('miranda-urday-johan-joshua');
var palabra = "%Hola%";
var reemplazos = {
	"en":{
		"Hola":"Hello"
	}
}
var res = _.replace("%Hola%",reemplazos["en"]);
console.log(res);
