var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle="SkyBlue";
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100,60);
ctx.lineTo(130,30);
ctx.lineTo(160,60);
ctx.lineTo(160,100);
ctx.lineTo(100,100);
//remplir le dessin avec une couleur
ctx.fill();