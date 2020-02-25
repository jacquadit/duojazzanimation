var chat = {
"pattes" : 3,
"nom":"Harmonie",
"couleur":"Ecaille de tortue"
};
var chien ={};
chien.nom="pancake";
chien.pattes=4;
chien.couleur="marron";

alert(chat["nom"]);
alert(chat.couleur);
alert(chien.nom);
alert(chien.couleur);
var tousLesTitres = Object.keys(chien);
alert(tousLesTitres);
