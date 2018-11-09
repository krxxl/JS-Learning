/*pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1*/

function pow(x, n){
	var result = 1;
	for(var i=1; i <= n; i++){
		result*=x
	}
	return result
}

var x = prompt('x?', '')
var n = prompt('x?', '')

alert(pow(x, n))