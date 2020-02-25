//générer un nombre aleatoire situe entre 0 et 1948 qui est la taille de l image
var creerNombreAleatoire = function(dimension){
	return Math.floor(Math.random()*dimension);
};

//caculer la distance entre un évenement de clic et la cible
var calculerDistance = function (evenement, cible) {
	var diffX=evenement.offsetX-cible.x;
	var diffY=evenement.offsetY-cible.y;
	return Math.sqrt((diffX*diffY)+(diffX*diffY));
	};

//générer une chaine de caractere correspondant à la distance
var creerIndiceDistance = function (distance) {
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
var hauteur = 400;
var clics = 0;

//creer la position de la cible de manière aléatoire
 var cible = {
	x: creerNombreAleatoire(largeur),
	y: creerNombreAleatoire(hauteur)
};
//ajouter un gestionnaire de clics à l'evenement img
$("#mairie1948").click(function (evenement){
clics++;
//calculer la distance entre evenement de clic et la cible
var distance = calculerDistance(evenement, cible);
//convertir la distance en un indice au jouuer
var indiceDistance = creerIndiceDistance(distance);
//compléter l'élément #distance avec l'indice au joueur
$("#distance").text(indiceDistance);
//si le clic est très proche de la cible, dire au joueur qu'il a gagné
if(distance <80){
alert("tu as trouvé le trésor en "+clics+" !");
} else {
	alert("continuer ");
}
}
);
