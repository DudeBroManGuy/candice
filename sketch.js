
if (window.innerWidth < 800) {


var greeting;
function setup() {
  img = loadImage('candice_balloon.png');
  img2 = loadImage('fooman3.png');
  createCanvas(window.innerWidth, window.innerWidth);   
	background(212, 254, 255);

}
var xPositions = [];


var draw = function() {
  background(212, 254, 255);
    if (mouseIsPressed) {
        xPositions.push(mouseX);
    }
  
    
    
    stroke(0, 0, 0);
    fill(250, 0, 0);
    for (var i = 0; i < xPositions.length; i++) { 
       // noStroke();
        line(xPositions[i], innerWidth / 3.333, innerWidth / 1.702, innerWidth / 1.53);
      image(img, xPositions[i] - innerWidth / 8, innerWidth / 8, innerWidth / 4.878, innerWidth / 3.478);
        

      
    
   
}
  image(img2, innerWidth / 2, innerWidth / 1.904, width / 2, height / 2);
    
  if(i === 0) {
    greeting = "Click Here"
    textSize(innerWidth / 20);
text(greeting, innerWidth / 2, innerWidth / 4.25)
  } else {
    greeting = "Happy Birthday Candice!!!"
    textSize(innerWidth / 13.333);
     fill(250, 0, 0);
text(greeting, innerWidth / 16, innerWidth / 8);

  } 


   
};
}
else {
  var screenWidth = 960;
  var greeting;
  function setup() {
    img = loadImage('candice_balloon.png');
    img2 = loadImage('fooman3.png');
    createCanvas(screenWidth, screenWidth);   
    background(212, 254, 255);
  
  }
  var xPositions = [];
  
  
  var draw = function() {
    background(212, 254, 255);
      if (mouseIsPressed) {
          xPositions.push(mouseX);
      }
    
      
      
      stroke(0, 0, 0);
      fill(250, 0, 0);
      for (var i = 0; i < xPositions.length; i++) { 
         // noStroke();
          line(xPositions[i], screenWidth / 3.333, screenWidth / 1.702, screenWidth / 1.53);
        image(img, xPositions[i] - screenWidth / 8, screenWidth / 8, screenWidth / 4.878, screenWidth / 3.478);
          
  
        
      
     
  }
    image(img2, screenWidth / 2, screenWidth / 1.904, width / 2, height / 2);
      
    if(i === 0) {
      greeting = "Click Here"
      textSize(screenWidth / 20);
  text(greeting, screenWidth / 2, screenWidth / 4.25)
    } else {
      greeting = "Happy Birthday Candice!!!"
      textSize(screenWidth / 13.333);
       fill(250, 0, 0);
  text(greeting, screenWidth / 16, screenWidth / 8);
  
    } 
  
  
     
  };


}