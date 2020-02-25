var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var taille = 0;

setInterval(function() {
	ctx.clearRect(0,0, 300,300);
	ctx.fillRect(0,0, taille, taille);

	taille++;
	if(taille>200){
		taille=0;
	}
},30);
