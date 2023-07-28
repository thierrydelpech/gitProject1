function damage(CharacterToDammage, amount) {
    CharacterToDammage.life = amount;
    return CharacterToDammage.life;
}
var resultLife = damage({ life: 50 }, 12);
