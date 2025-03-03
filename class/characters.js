const { Guerrier, Mage, Voleur } = require('./characterClass.js');


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
}

function createCharacter(name, className) {
    validateName(name);

    switch (lowerClass) {
      case 'guerrier':
        return new Guerrier(name);
      case 'mage':
        return new Mage(name);
      case 'voleur':
        return new Voleur(name);
      default:
        throw new Error(
          `Classe inconnue : ${className}. Choisissez parmi: Guerrier, Mage, Voleur.`
        );
    }
  }
  

module.exports = {
    Character,
    createCharacter
};
