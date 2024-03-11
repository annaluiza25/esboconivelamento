function setup() {
    createCanvas(900, 900) ;
      background("purple");
    
  }
 
 function draw() {
   
   stroke("green");
   fill ("blue");
   
   if(mouseIsPressed){ 
     rect(mouseX, mouseY, 25, 25);
   }
 }
 