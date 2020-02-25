var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "Turquoise";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.strokeRect(50,50,40,40);
ctx.beginPath();
//dessin du corps
ctx.moveTo(70,90);
ctx.lineTo(70,210);
//dessin du bras gauche
ctx.moveTo(70,140);
ctx.lineTo(30,70);
//dessin du bras droit
ctx.moveTo(70,140);
ctx.lineTo(120,70);
//dessin jambe gauche
ctx.moveTo(70,210);
ctx.lineTo(30,290);
//dessin jambe droite
ctx.moveTo(70,210);
ctx.lineTo(120,290);
ctx.stroke();

