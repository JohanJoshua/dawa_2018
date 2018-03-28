(function (){
	var mayor = function(o1,o2){
		if(o1.tamano > o2.tamano){
			console.log(o1.tamano+' es mayor que '+o2.tamano);
		}else{
			console.log(o2.tamano+' es mayor que '+o1.tamano);
		}
	};

	var x = {tamano: 16};
	var y = {tamano: 19};
	mayor(x,y);
}());