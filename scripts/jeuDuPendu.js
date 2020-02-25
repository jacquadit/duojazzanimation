//créer un tableau d'additifs dangereux mais présents même chez les grandes marques
var additifs = [
	"E249",
	"E250",
	"E251",
	"E252",
	"nitrites_jambon",
	"E150c",
	"E150d",
	"Caramels_au_sulfite_d_ammonium",
	"E102",
	"E104",
	"E110",
	"E122",
	"E124",
	"E129"
	]
//mémoriser les additifs dangereux
var additifDangereux = additifs[Math.floor(Math.random() * additifs.length)];

//créer le tableau des mauvaises substances
var tableauDanger = [];
	for(i=0;i<additifDangereux.length;i++) {
	tableauDanger[i]="_";
	}

var nombreLettresManquantes = additifDangereux.length;

//La boucle de jeu
while (nombreLettresManquantes >0) {
	//afficher la progression
	alert(tableauDanger.join(" "));
	//recupérer un essai du joueur
	var reponse = prompt("devine une lettre, un chiffre, ou clique sur Annuler pour quitter la partie ");
	//annuler la partie
	if ( reponse === null) {
	//quitter
	break;
	} else if(reponse.length !== 1){
		alert("tu dois saisir qu'un seul caractere !");
	} else {
		// mettre à jour l'état de la partie
		for (var j=0; j< additifDangereux.length;j++) {
			if (additifDangereux[j] === reponse) {
			tableauDanger[j] = reponse;
			nombreLettresManquantes--;
			}
			}
		}
// fin de la boucle de jeu
}

//afficher l'additif dangereux et féliciter le joueur gagnant
alert(tableauDanger.join(" "));
alert("felicitation, l'additif dangereux est " + additifDangereux);
