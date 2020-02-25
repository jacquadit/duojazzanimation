var Voiture = function(x,y) {
	this.x = x;
	this.y = y;
};
Voiture.prototype.dessiner = function() {
var voitureHtml = '<img src="images/car.png">';
this.voitureElement=$(voitureHtml);
	this.voitureElement.css({
		position : "absolute",
		left : this.x,
		top : this.y
	});
	$("body").append(this.voitureElement);
	};

var tesla = new Voiture(20,20);
var nissan = new Voiture(100,100);

tesla.dessiner();
nissan.dessiner();


