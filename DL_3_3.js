let shop = {};
let n = prompt('quantity?','');

for(let i = 0; i < n; i++){
  let name = prompt('name', '');
  let price;
  tut: while(true){
    price = +prompt('price', '');
    if(typeof(price) === 'number' && isNaN(price) != true){
      shop[name] = price;	break
      }else{
      alert('price must be a number'); continue
    } 
  }
}

console.log(shop);
