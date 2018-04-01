function primo(x){
	var t = typeof x;
	var c=0;
	if(t == "string"){
		console.log("Esta funcion no acepta texto como parametro");
	}else if (t == "boolean") {
		console.log("Esta funcion no acepta booleanos como parametro");	
	}else if (t == "number") {
		if (x === parseInt(x)) {
			if (x < 0) {
				console.log("Esta funcion no acepta valores negativos");
			}else{
				for(var i=1; i<=x ;i++){
					if (x%i==0) {
						c++;
					}
				}
				if (c==2) {
					console.log("El numero ingresado es primo");
				}else{
					console.log("El numero ingresado no es primo");
				}
			}
		}else{
			console.log("Esta funcion no acepta numeros decimales");
		}
	}
}