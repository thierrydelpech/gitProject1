function damage(CharacterToDammage:{life:number}, amount:number):number {
    CharacterToDammage.life = amount;
    return CharacterToDammage.life;
}

const resultLife = damage({life:100},12);