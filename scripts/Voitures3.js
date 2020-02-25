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

Voiture.prototype.deplacerADroite = function() {
	this.x+= 50;

	this.voitureElement.css({
		left:this.x,
		top:this.y
	});
	};
//------------
Voiture.prototype.deplacerAGauche = function() {
	this.x-= 50;

	this.voitureElement.css({
		left:this.x,
		top:this.y
	});
	};

//------------
Voiture.prototype.deplacerVersHaut = function() {
	this.y-=5;

	this.voitureElement.css({
		left:this.x,
		top:this.y
	});
	};
//--------
Voiture.prototype.deplacerVersBas = function() {
	this.y+=50;

	this.voitureElement.css({
		left:this.x,
		top:this.y
	});
	};
//--------
var tesla = new Voiture(20,20);
var nissan = new Voiture(100,100);


tesla.dessiner();
nissan.dessiner();

tesla.deplacerADroite();
tesla.deplacerADroite();
tesla.deplacerADroite();
tesla.deplacerAGauche();
tesla.deplacerAGauche();
tesla.deplacerAGauche();

tesla.deplacerVersBas();
tesla.deplacerVersBas();
tesla.deplacerVersBas();
tesla.deplacerVersHaut();
tesla.deplacerVersHaut();
tesla.deplacerVersHaut();
tesla.deplacerVersBas();
tesla.deplacerVersBas();
tesla.deplacerVersBas();
tesla.deplacerVersBas();
tesla.deplacerVersBas();
tesla.deplacerVersBas();
