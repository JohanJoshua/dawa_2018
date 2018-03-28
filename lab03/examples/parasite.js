var Persona = function(nombre,edad){
	return{
		nombre:nombre,
		ingresarEdad: function(e){edad=e;},
		obtenerEdad: function(){return edad;}
	};
};

var Programador = function(nombre,edad,especialidad){
	var e = Persona(nombre, edad);
	e.especialidad = especialidad;
	return e;
};

var aurora = new Persona("Aurora",27);
var sergio = new Programador("Sergio",29,"Javascript");

sergio.ingresarEdad(45);
sergio.obtenerEdad();