var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "Turquoise";
ctx.lineWidth = 4;
//ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(60,60);
ctx.moveTo(60,10);
ctx.lineTo(10,60);
ctx.stroke();

