let menu = document.getElementsByClassName('menu')[0];
 let square = document.createElement('div');
 square.classList.add('square');
 let triangle = document.createElement('div');
 triangle.classList.add('triangle');
 let sqFlag;
 let trFlag;
 let firstCoor;
 let block = document.getElementsByClassName('block')[0];

 document.addEventListener('contextmenu', function(e){
 	e.preventDefault();
 	let x = e.clientX;
  let y = e.clientY;
  menu.style.left = x +'px';
  menu.style.top = y +'px';
  menu.classList.add('menu--active'); 
 })
 
 menu.children[0].addEventListener('click', function(e){
 let x = e.clientX;
 let y = e.clientY;
 if(!sqFlag){
   document.body.append(square);
   sqFlag = true;   
   square.style.left = x +'px';
   square.style.top = y +'px';
   }else{
   	square.remove();
    sqFlag = false; 
   }
 })
 
  menu.children[1].addEventListener('click', function(e){
  	square.classList.add('bounce');
  });
 
 menu.children[2].addEventListener('click', function(e){
 let x = e.clientX;
 let y = e.clientY;
 
 if(!trFlag){
   document.body.append(triangle);
   firstCoor = x;
   trFlag = true;   
   triangle.style.left = (x - 100) +'px';
   triangle.style.top = (y - 100) +'px' ;
   }else{
   	triangle.remove();
    trFlag = false; 
   }
 })
 
 
 
 menu.children[3].onclick = function(){
 		block.addEventListener('mousemove', function(e){
    	let x = e.clientX ;
     	/* console.log(`изначально ${firstCoor}`);
     	      console.log(`dinamyc ${x}`);  */
       console.log(firstCoor - x)
       if((firstCoor - x) < 100 && (firstCoor - x) > -100 ){
          /*   triangle.style.left = (x - 50) +'px'; */
            triangle.style.transform = 'translateX('+ x+'px)'
      }
    })
 }
 
 menu.children[4].addEventListener('click', function(e){
   if(trFlag){
   triangle.remove();
   }
   if(sqFlag){
   square.remove();
   }
   menu.classList.remove('menu--active'); 
});
