function quickSort(arr){
	if(!arr.length)
		return arr
	var pivot = arr.splice(0,1);
	var less = [];
	var greater = [];

	arr.forEach(function(el){
		if(el <= pivot)
			less.push(el);
		else
			greater.push(el);
	});

	return quickSort(less).concat(pivot, quickSort(greater));
}

var array=[];
for (var i=0; i<20; i++){
	array.push(Math.round(Math.random()*100));
}
var res=quickSort(array);
console.log(res);