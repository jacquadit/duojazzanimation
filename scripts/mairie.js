//afficher clic adresse
var gestionnaireClics= function(evenement){
console.log("clic sur valeur x : "+evenement.pageX+" et sur valeur y : "+evenement.pageY);
}
$("#mairie1948").click(gestionnaireClics);
