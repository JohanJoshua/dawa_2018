function procesador(texto,accion){
	if (accion=="dividir") {
		var arr = texto.split("");
		var res = "";
		for (var i = 0; i <arr.length; i++) {
			res += arr[i]+" ";
		}
		return res;
	}else if(accion=="eliminar"){
		var res = texto.replace(/\s+/g, '');
		return res;
	}else if (accion=="capitalizar") {
		var res = texto.replace(/\b\w/g, l => l.toUpperCase());
		return res;
	}else if (accion=="minusculas") {
		var res = texto.toLowerCase();
		return res;
	}else if (accion=="mayusculas") {
		var res=texto.toUpperCase();
		return res;
	}else if(accion=="contar"){
		var res = texto.length;
		return res;
	}
}
module.exports.procesador=procesador;