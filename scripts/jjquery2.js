var texteNouveauTitre = prompt("Veuillez inscrire un nouveau titre :");
$("#titre-principal").text(texteNouveauTitre);
$("body").append("<p>Ceci est un nouveau paragraphe</p>");
$("h1").fadeOut(3000);
$("h1").text("Ce titre va s'estomper").fadeOut(3000);
$("h2").slideUp(1000).slideDown(1000);

