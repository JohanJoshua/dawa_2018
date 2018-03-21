function calculadora(operacion,x,y){
	if(operacion=="suma"){
		var datos = [];
		datos[0] = operacion;
		datos[1] = x;
		datos[2] = y;
		datos[3] = x+y;
		return datos;
	}else if(operacion == "resta"){
		var datos = [];
		datos[0] = operacion;
		datos[1] = x;
		datos[2] = y;
		datos[3] = x-y;
		return datos;
	}else if(operacion == "division"){
		if (y==0) {
			var datos = [];
			datos[0] = operacion;
			datos[1] = x;
			datos[2] = y;
			datos[3] = "No se puede dividir entre 0";
			return datos;
		}else{
		var datos = [];
		datos[0] = operacion;
		datos[1] = x;
		datos[2] = y;
		datos[3] = x/y;
		return datos;
		}
	}else{
		var datos = [];
		datos[0] = operacion;
		datos[1] = x;
		datos[2] = y;
		datos[3] = x*y;
		return datos;
	}

}
module.exports.calculadora = calculadora;
