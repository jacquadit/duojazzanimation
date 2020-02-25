
//constructeur Balle
var Balle =  function() {
	this.x=100;
	this.y=100;
	this.xVitesse=-2;
	this.yVitesse=3;
};

//dessiner la balle
var cercle = function(x, y, rayon, cerclePlein){
	ctx.beginPath();
	ctx.arc(x, y, rayon, 0, Math.PI*2, false);
	if(cerclePlein) {
		ctx.fill();
	} else {
		ctx.stroke();
	}
};
//ajout de la méthode "dessiner" à Balle
Balle.prototype.dessiner = function(){
	cercle(this.x, this.y, 3, true);
};

//deplacer la balle
Balle.prototype.deplacer = function() {
	this.x += this.xVitesse;
	this.y += this.yVitesse;
};

//faire rebondir la balle
Balle.prototype.verifierCollision = function() {
	if (this.x < 0 || this.x > 200) {
	this.xVitesse = - this.xVitesse;
	}
	if (this.y <0 || this.y  >200) {
	this.yVitesse = -this.yVitesse;
	}
};
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

    var balle = new Balle(100,100);

//animer la balle
setInterval(function () {
	ctx.clearRect(0,0,200,200);
	balle.dessiner();
	balle.deplacer();
	balle.verifierCollision();
	ctx.strokeRect(0,0,200,200);
}, 30);

