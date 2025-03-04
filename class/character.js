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
        PV: ${this.stats.health}
        PM: ${this.stats.mana}
        Force: ${this.stats.strength} 
        Intelligence: ${this.stats.intelligence}
        Défense: ${this.stats.defense}
        Résistance Magique: ${this.stats.magicResistance}
        Agilité: ${this.stats.agility}
        Chance: ${this.stats.luck}
        Endurance: ${this.stats.endurance}
        Esprit: ${this.stats.spirit}
      `;
    }
  }

  
  module.exports = { Character };
  