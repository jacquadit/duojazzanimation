var espaceGauche = 0;
var deplacerTitre = function(){
	$("#titre").offset({ left: espaceGauche });
	espaceGauche++;
	if(espaceGauche >  200) {
		espaceGauche = 0;
		}
	};
setInterval(deplacerTitre, 30);
