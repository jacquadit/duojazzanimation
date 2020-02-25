var nomsCodes = {
	32:"espace",
	37:"gauche",
	38:"haut",
	39:"droite",
	40:"bas"
	};
$("body").keydown(function (evenement) {
console.log(nomsCles[evenement.keyCode]);
});
