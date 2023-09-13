export function afficheNom(nom: string, prenom?: string): void {
    let texte = nom;
    if (prenom) {
        texte += ' ' + prenom;
    }
    alert(texte);
}
const result1 = afficheNom('Durand');
const result2 = afficheNom('Dupont', 'Marcel');
console.log(result1);


