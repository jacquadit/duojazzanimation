var parler= function() {
	alert("0 "+this.bruit + " ! mon nom est "+this.nom+" !");
}; 


var chat = {
nom : "minou",
age : 12,
bruit : "miaou miaou ",
parler : parler
};

var chien = {
nom : "pancake",
pattes : 4,
estGenial : true,
bruit : "waf waf ",
parler:parler
};
var parler= function() {
	alert("0 "+this.bruit + " ! mon nom est "+this.nom+" !");
}; 

alert("1 "+chien.nom);
alert(" 2 "+chat.nom);
var toutSurChat = Object.keys(chat);
alert("3 "+toutSurChat);
var toutSurChien = Object.keys(chien);
alert("4 "+ toutSurChien);
chien.parler();
chat.parler();

