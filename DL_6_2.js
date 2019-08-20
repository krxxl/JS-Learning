let div = document.createElement('div');
let flag ;

div.classList.add('new');
div.style ='background: orange; height: 3em';


block.addEventListener("click", function(){
  if(!flag){
    document.body.append(div);
    flag = true
  }
});
