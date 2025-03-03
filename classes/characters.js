class Character {
    constructor(name, characterClass, stats) {
        this.name = name;
        this.characterClass = characterClass;
        this.stats = stats;
        this.inventory = [];
    }

    // Afficher le sommaire des stats du personnages
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

// Stats de bases des classes
const BASE_STATS = {
    guerrier: {
        health: 150, mana: 50, strength: 15, intelligence: 5,
        defense: 12, magicResistance: 6, agility: 8, luck: 5,
        endurance: 10, spirit: 4
    },
    mage: {
        health: 90, mana: 150, strength: 4, intelligence: 15,
        defense: 5, magicResistance: 12, agility: 7, luck: 6,
        endurance: 5, spirit: 10
    },
    voleur: {
        health: 110, mana: 70, strength: 10, intelligence: 7,
        defense: 8, magicResistance: 7, agility: 15, luck: 12,
        endurance: 7, spirit: 6
    }
};

function validateName(name) {
    if (typeof name !== 'string' || name.length < 3 || name.length > 20) {
        throw new Error('Le nom doit comporter entre 3 et 20 caractères.');
    }

    if (!/^[A-Za-z]+$/.test(name)) {
        throw new Error('Le nom ne doit contenir que des lettres.');
    } 
}

// fonction créer un personnage 
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
