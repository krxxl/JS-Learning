let shop = {
	apple: 12,
  orange: 55,
  kiwi: 12,
  banana: 33,
};
let n = prompt('quantity?',''); */

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

function getProductByPrice(price){ 
  for(let key in shop){
      if(shop[key] === price){
        alert( `Наименовние товара: ${key} его цена: ${shop[key]}` );
      }else{
        alert('Товара с такой ценой не существует')
      }
    }
}

function getProductByName(name){ 
  for(let key in shop){
      if(key === name){
        alert( `Наименовние товара: ${key} его цена: ${shop[key]}` );
      }else{
        alert('Товара с таким наименованием не существует')
      }
    }
}



let byPrice = +prompt('product price?', '');

getProductByPrice(byPrice); 
  
let byName = prompt('product name?', '');

getProductByName(byName);

function addProduct(name){ 
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
 
 let name = prompt('enter name of product ', '');
 
 addProduct(name); 
 
 
let delNum= +prompt('enter number of product for del ', ''); 


let delname = Object.keys(shop)[delNum]
 for(let key in shop){
   if(key == delname){
    delete shop[key] 
  }
 } 
 
let changePriceNum= +prompt('enter number of product for chenge his price ', ''); 
let newPrice =  +prompt('enter new price','');
 
 
 let changeName = Object.keys(shop)[changePriceNum]
 for(let key in shop){
   if(key == changeName){
    shop[key] =  newPrice;
  }
 }
console.log(shop);
