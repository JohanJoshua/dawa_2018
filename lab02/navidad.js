function navidad(){
	var navidad = new Date('12/31/2018').getTime();
	var hoy = new Date().getTime();
	var diferencia = navidad - hoy;
	diferencia = ((((diferencia/1000)/60)/60)/24)+1;
	return ("!!!Faltan "+Math.round(diferencia)+" dias para navidad¡¡¡");
}