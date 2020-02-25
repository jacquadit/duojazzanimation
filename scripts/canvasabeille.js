var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var cercle= function(x,y,rayon, cerclePlein) {
	ctx.beginPath();
	ctx.arc(x, y, rayon, 0, Math.PI*2,false);
	
//	if (remplirCercle){
	if(cerclePlein){
		ctx.fill();
	} else {
		ctx.stroke();
	}
	};

var dessinerAbeille=function(x,y){
	ctx.lineWidth=3;
	ctx.strokeStyle="Black";
	ctx.fillStyle="Gold";

	cercle(x,y,8,true);
	cercle(x,y,8,false);
	cercle(x-5, y-11, 5, false);
	cercle(x+5, y-11, 5, false);
	cercle(x-2, y-1, 2 , false);
	cercle(x+2, y-1, 2, false);
	};

var update = function(coordonnee) {
	var ecart = Math.random()*4-2;
	coordonnee += ecart;

	if(coordonnee > 200) {
		coordonnee=0;
	} 
	return coordonnee;
};


var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x=100;
var y=100;

setInterval(function() {
	ctx.clearRect(0,0,200,200);
	dessinerAbeille(x,y);
	x=update(x);
	y=update(y);
	ctx.strokeRect(0,0,200,200);
},30);

