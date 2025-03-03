class Character {
    constructor(name, characterClass, stats) {
        this.name = name;
        this.characterClass = characterClass;
        this.stats = stats;
        this.inventory = [];
    }

    getSummary() {
        return `
        Nom: ${this.name}
        Classe: ${this.characterClass}
        PV: ${this.stats.health}, PM: ${this.stats.mana}
        Force: ${this.stats.strength}, Intelligence: ${this.stats.intelligence}
        Défense: ${this.stats.defense}, Résistance Magique: ${this.stats.magicResistance}
        Agilité: ${this.stats.agility}, Chance: ${this.stats.luck}
        Endurance: ${this.stats.endurance}, Esprit: ${this.stats.spirit}
        `;
    }
}

function validateName(name) {
    if (typeof name !== 'string' || name.length < 3 || name.length > 20) {
        throw new Error('Le nom doit comporter entre 3 et 20 caractères.');
    }

    if (!/^[A-Za-z]+$/.test(name)) {
        throw new Error('Le nom ne doit contenir que des lettres.');
    } 
}

function createCharacter(name, characterClass) {
    validateName(name); 

    characterClass = characterClass.toLowerCase();
    if (!BASE_STATS[characterClass]) {
        throw new Error(`Classe inconnue : ${characterClass}. Choisissez parmi: Guerrier, Mage, Voleur.`);
    }

    return new Character(name, characterClass, { ...BASE_STATS[characterClass] });
}

module.exports = {
    Character,
    createCharacter, 
    validateName
};
