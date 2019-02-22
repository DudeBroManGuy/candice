var greeting;
function setup() {
  img = loadImage('candice_balloon.png');
  img2 = loadImage('fooman3.png');
  createCanvas(400, 400);   
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
        line(xPositions[i], 120, 235, 261);
      image(img, xPositions[i] - 50, 50, 82, 115);
        

      
    
   
}
  image(img2, 200, 210, width / 2, height / 2);
    
  if(i === 0) {
    greeting = "Click Here"
    textSize(20);
text(greeting, 200, 94)
  } else {
    greeting = "Happy Birthday Candice!!!"
    textSize(30);
     fill(250, 0, 0);
text(greeting, 25, 50);

  } 


   
};