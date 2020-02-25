//générer un nombre aleatoire situe entre 0 et 299
var creerNombreAleatoire = function(299){
	return Math.floor(Math.random()*299);
}

//caculer la distance entre un évenement de clic et la cible
var calculerDistance = function (distance) {
if (distance <10){
	return "tu brules";
}else if (distance<160){
	return "tu chauffes";
} else {
	return "tu geles!";
}
};

//definition des variables
var largeur = 400;
var hauteur = 300;
var clics = 0;

//creer la position de la cible de manière aléatoire
 var cible = {
	x: creerNombreAleatoire(largeur),
	y: creerNombreAleatoire(hauteur)
};

