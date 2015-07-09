function myCanvas() {
//var c = document.getElementById('myCanvas');
//var ctx = c.getContext("2d");
var drawingCanvas = document.getElementById('myCanvas');
// Check the element is in the DOM and the browser supports canvas
if(drawingCanvas.getContext) {
// Initaliase a 2-dimensional drawing context
var context = drawingCanvas.getContext('2d');
//Canvas commands go here

context.background(32, 170, 212);
context.noStroke();
}
/*
    ctx.rect(40,40,40,40);
    ctx.stroke();
*/
context.background(32, 170, 212);
context.noStroke();

var drawSeaweed = function(weedX, weedH, weedW) {
    var weedWidth = weedW;
    fill(13, 255, 0);
    //noFill();
    beginShape(0);
    curveVertex(weedW, 350);
    curveVertex(weedW + 50, weedH + weedX);
    curveVertex(weedW + 25, weedH + weedX);
    curveVertex(weedW, weedH + weedX);
    curveVertex(weedW + 25, weedH - weedX);
    curveVertex(weedW + 50, weedH - weedX);
    curveVertex(weedW + 75, weedH - weedX);
    curveVertex(weedW + weedH, 350);
    endShape(0);
};
ctx.drawSeaweed(25, 257, 87);
drawSeaweed(112, 258, 29);
drawSeaweed(43, 225, 46);
drawSeaweed(104, 225, 46);

//var colorWheel = (random(200, 400));
var drawPebs = function(xCoord) {
    ellipse(xCoord, random(350, 400), 10, 10);
    fill(random(0,255), random(0,255), random(0,255));
};

var draw = function() {
    drawPebs(random(0, 400));
};


noStroke();
var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor, tailWidth, eyeColor) {
    
//var centerX = 200;
//var centerY = 100;
//var bodyLength = 118;
//var bodyHeight = 74;
//var bodyColor = color(162, 0, 255);

fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
//var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(eyeColor);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
}; 
/* Fishes Here */
drawFish(200, 100, 118, 74, color(162, 0, 255), 40, color(122, 17, 17));
drawFish(220, 150, -20, 20, color(31, 41, 173), -20, color(201, 217, 20));
drawFish(318, 293, 75, 45, color(168, 24, 60), 110, color(199, 48, 199));
}
