var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.lineWidth=2;
ctx.strokeStyle = "Green";

ctx.beginPath();
ctx.arc(50,50,20,0, Math.PI /2, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,50, 20, 0, Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(150,50,20,0, Math.PI *2, false);
ctx.stroke();
