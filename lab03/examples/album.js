(function(){
	var album_favorito = function(coleccion){
		if(coleccion.length === 0){
		return;
		}
		var mas_reproducido = coleccion[0].tocado,
			mas_indice = 0,
			nombre_album;
		for(var i=0;i<coleccion.length;i++){
			if (coleccion[i].tocado > mas_reproducido) {
				mas_reproducido = coleccion[i].tocado;
				mas_indice = i;
				nombre_album=coleccion[i].nombre;
			}
		}
		return { play: mas_reproducido, 
			     index:mas_indice,
			     nombre:nombre_album};
	};

	var music=[
				{nombre:"Meteora",tocado:5},
				{nombre:"The Black Parade",tocado:6}
			  ];

	var fav = album_favorito(music);

	console.log("Tu album favorito es "+fav.nombre+" y fue tocado "+fav.play+" veces");
}());