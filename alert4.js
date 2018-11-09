iter: for(var i = 2; i < 12; i++){
	for(var j = 2; j < i; j++){
		if (i % j == 0) continue iter;
	}
	alert(i)
}
