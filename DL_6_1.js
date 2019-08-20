let block = document.getElementsByClassName('test')[0];

block.addEventListener("click", function(){
  block.style.cssText=`color: red !important;
  background-color: yellow;
  width: 100px;
  text-align: center;
   `;
});

block.onclick = function(){
  block.style = 'font-size: 20px; background : red';
}; 
