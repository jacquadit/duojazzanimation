var gestionnaireClics = function(evenement) {
	alert("Clic ! :  en x :" + evenement.pageX+ " et en y :  "+ evenement.pageY);
	}

$("#lamarina").click(gestionnaireClics);
