var param_replacer = require('./lib/replace');

var objetivo = "%hello% %world%!";
var idioma = "ch";
var reemplazos = {
	"en": {
		"hello": "Hello",
		"world": "World" 
	},
	"es":{
		"hello": "Hola",
		"world": "Mundo"
	},
	"fr":{
		"hello": "Salut",
		"World": "Mondo"
	},
	"it":{
		"hello": "Ciao",
		"world": "Mondo"
	},
	"ch":{
		"hello": "La wea",
		"world": "fome"
	}
};

var resultado = param_replacer.replace(objetivo, reemplazos[idioma]);

console.log(resultado);

/*var _ = require("underscore");

var employeesCollection = [
	{
		"id":1,
		"name":"Soni",
		"designation":"SE",
		"salary":25000
	},
	{
		"id":2,
		"name":"Rohit",
		"designation":"SSE",
		"salary":35000
	},
	{
		"id":3,
		"name":"Akanksha",
		"designation":"Manager",
		"salary":45000
	},
	{
		"id":4,
		"name":"Mohan",
		"designation":"Accountant",
		"salary":30000
	},
	{
		"id":5,
		"name":"Gita",
		"designation":"SSE",
		"salary":35000
	}
];
var cargos = _.map(employeesCollection,function(employee){
	return {
		nombre: employee.name,
		cargo: employee.designation
	};
});

var empleados_sse = _.chain(employeesCollection)
	.filter(function(employee){
		return employee.designation === 'SSE';
	})
	.map(function(employee){
		return{name:employee.name,id:employee.id};
	})
	.value();

	console.log(empleados_sse);*/