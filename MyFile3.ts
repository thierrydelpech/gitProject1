export function afficheNom(nom: string, prenom?: string): void {
    let texte = nom;
    if (prenom) {
        texte += ' ' + prenom;
    }
    alert(texte);
}
afficheNom('Durand');
afficheNom('Dupont', 'Marcel');


