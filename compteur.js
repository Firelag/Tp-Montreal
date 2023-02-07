var n = 258; // Nombre final du compteur
var cpt = 0; // Initialisation du compteur
var duree = 5; // Durée en seconde pendant laquel le compteur ira de 0 à 15
var delta = Math.ceil((duree * 1000) / n); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var node =  document.getElementById("compteur"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
 
function countdown() {
  node.innerHTML = ++cpt;
  if( cpt < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown, delta);
  }
}
 
setTimeout(countdown, delta);


var n1 = 736; // Nombre final du compteur
var cpt1 = 0; // Initialisation du compteur
var duree1 = 5; // Durée en seconde pendant laquel le compteur ira de 0 à 15
var delta1 = Math.ceil((duree1 * 1000) / n1); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var node1 =  document.getElementById("compteur1"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
 
function countdown1() {
  node1.innerHTML = ++cpt1;
  if( cpt1 < n1 ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown1, delta1);
  }
}
 
setTimeout(countdown1, delta1);

var n2 = 358; // Nombre final du compteur
var cpt2 = 0; // Initialisation du compteur
var duree2 = 5; // Durée en seconde pendant laquel le compteur ira de 0 à 15
var delta2 = Math.ceil((duree2 * 1000) / n2); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var node2 =  document.getElementById("compteur2"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
 
function countdown2() {
  node2.innerHTML = ++cpt2;
  if( cpt2 < n2 ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown2, delta2);
  }
}
 
setTimeout(countdown2, delta2);

var n3 = 35; // Nombre final du compteur
var cpt3 = 0; // Initialisation du compteur
var duree3 = 5; // Durée en seconde pendant laquel le compteur ira de 0 à 15
var delta3 = Math.ceil((duree3 * 1000) / n3); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var node3 =  document.getElementById("compteur3"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
 
function countdown3() {
  node3.innerHTML = ++cpt3;
  if( cpt3 < n3 ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown3, delta3);
  }
}
 
setTimeout(countdown3, delta3);


