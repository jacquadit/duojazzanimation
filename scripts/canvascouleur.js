var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//1er rectangle de couleur rouge
ctx.fillStyle="Red";
var largeur = 50;
var hauteur =100;
var absc = 20;
var ordo =20;
ctx.fillRect(absc, ordo,largeur, hauteur);
//2ème rectangle de couleur verte
absc=absc+50;
ctx.fillStyle="Green";
ctx.fillRect(absc, ordo,largeur, hauteur);
//3ème rectangle de couleur bleue
absc=absc+50;
ctx.fillStyle="Blue";
ctx.fillRect(absc, ordo, largeur, hauteur);


