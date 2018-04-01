(function(){
	
	var MusicBox=function(){
		var music=[];
		return{
			addAlbum:function(a){
				music.push(a.album);
			},
			favoriteAlbum:function(){
				var x;
				for(var i=0;i<music.length-1;i++){
					for(var j=1;j<music.length;j++){
					if (music[i].c<music[j].c) {
						x = music[i];
						music[i]=music[j];
						music[j]=x;
					}
				  }
				}
				return music[0].band+" - "+music[0].name;
			}
		}
	};
	var Album=function(band,name){
		var album={band:band,name:name,c:0};
		return{
			album,
			play:function(){
				console.log("Tocando "+band+" - "+name);
				album.c=album.c+1;
			}
		}
	};
	var box = MusicBox(),
		a1 = Album("The Who","Tommy"),
		a2 = Album("Tom Waits","Closing Time"),
		a3 = Album("John Cale","Paris 1919"),
		favorito;

	box.addAlbum(a1);
	box.addAlbum(a2);
	box.addAlbum(a3);
	a1.play();a2.play();a1.play();
	a3.play();a3.play();a3.play();

	favorito = box.favoriteAlbum();

	console.log("Tu album favorito es "+favorito);
}());