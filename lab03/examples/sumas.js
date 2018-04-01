(function(){
	var Sumar=function(){
		var datos = [];
		return{
		agregar : function(number){
			datos.push(number);
		},
		obtenerSumaActual : function(){
			var res = 0;
			var str = "";
			if (datos.length < 2) {
				return console.log("Debe ingresar al menos dos valores");
			}
			for(var i =0; i<datos.length;i++){
				res += datos[i];
				if(i==(datos.length-1)){
					str +=datos[i]+"=";
				}else{
					str += datos[i]+"+";	
				}
			}
			return str+res;
		}
	}
};

	var s1 = Sumar();
	var s2 = Sumar();

	s1.agregar(10);
	s1.agregar(20);
	s1.agregar(40);

	s2.agregar(30);
	s2.agregar(70);

	console.log(s1.obtenerSumaActual());
	console.log(s2.obtenerSumaActual());
}());