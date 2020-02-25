var Voiture = function(x,y) {
	this.x = x;
	this.y = y;
};

var dessinerVoiture= function(voiture) {
var voitureHtml='<img src="images/car.png">';
var voitureElement = $(voitureHtml);
voitureElement.css({
position: "absolute",
left : voiture.x,
top : voiture.y
});
 $("body").append(voitureElement);
};
var tesla = new Voiture(10,20);
var nissan = new Voiture(100,200);
dessinerVoiture(tesla);
dessinerVoiture(nissan);

