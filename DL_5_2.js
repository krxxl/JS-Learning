let classOfBlock = prompt('Enter class of block','');

let block = document.getElementsByClassName(classOfBlock)[0];

if(block){
  console.log(block);
}else{
  console.log('fu')
}
