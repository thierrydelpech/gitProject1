"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afficheNom = void 0;
function afficheNom(nom, prenom) {
    var texte = nom;
    if (prenom) {
        texte += ' ' + prenom;
    }
    alert(texte);
}
exports.afficheNom = afficheNom;
var result1 = afficheNom('Durand');
var result2 = afficheNom('Dupont', 'Marcel');
console.log(result1);
