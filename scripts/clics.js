var gestionnaireClics = function(evenement) {
	alert("Clic ! " + evenement.pageX+ " "+ evenement.pageY);
	}

$("h1").click(gestionnaireClics);
