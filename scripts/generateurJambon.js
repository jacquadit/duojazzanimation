var Jambon;
var sansNitrites = ["Rostain labellisée bio", "Biocoop marque Ensemble","Le Bon Paris d'Herta", "Le Supérieur de Fleury Michon", "le jambon de Parme"];

//choisir une marque  au hasard sans nitrite
var sansNitritesAuHasard = sansNitrites[Math.floor(Math.random()*5)];

//donne des jambons sans nitrites au hasard
var JambonSansNitrites = "voici un jambon "+ sansNitritesAuHasard + " qui ne contient pas de nitrites !";
alert(JambonSansNitrites);
