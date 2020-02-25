var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var absc =0;
var ordo = 0;
while(absc<300){
	ctx.fillRect(absc, ordo, 10,10);
	ordo=ordo +10;
	absc=absc+10;;
	};

