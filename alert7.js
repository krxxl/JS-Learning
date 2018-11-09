/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}*/

function checkAge(age) {
 /*(age >18) ? return true || return confirm('Родители разрешили?'));*/
 return (age >18) || confirm('Родители разрешили?');
}

var answer = checkAge(18)
alert(answer)