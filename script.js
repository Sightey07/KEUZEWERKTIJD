var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 800, 200);
grd.addColorStop(0, "teal");
grd.addColorStop(1, "lime");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 800, 400);

// Lines
ctx.moveTo(0, 0);
ctx.lineTo(800, 400);
ctx.moveTo(0, 400); 
ctx.lineTo(800, 0);
ctx.stroke();

// Circles
ctx.beginPath();
ctx.arc(560, 200, 160, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(240, 200, 160, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(400, 360, 160, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(400, 40, 160, 0, 2 * Math.PI);
ctx.stroke();

// Text
ctx.fillStyle = "black";
ctx.font = "32px Arial";
ctx.fillText("Geometric Canvas", 10, 50);

// picture
var img = document.getElementById("mobius");
ctx.drawImage(img, 150, 150);

