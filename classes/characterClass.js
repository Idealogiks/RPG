const Personnage = require('./characters.js');

class Guerrier extends Personnage {
  constructor(name) {
    super(name);
    this.characterClass = 'Guerrier';
    this.stats = {
      health: 150,
      mana: 50,
      strength: 15,
      intelligence: 5,
      defense: 12,
      magicResistance: 6,
      agility: 8,
      luck: 5,
      endurance: 10,
      spirit: 4,
    };
  }
}

class Mage extends Personnage {
  constructor(name) {
    super(name);
    this.characterClass = 'Mage';
    this.stats = {
      health: 90,
      mana: 150,
      strength: 4,
      intelligence: 15,
      defense: 5,
      magicResistance: 12,
      agility: 7,
      luck: 6,
      endurance: 5,
      spirit: 10,
    };
  }
}

class Voleur extends Personnage {
  constructor(name) {
    super(name);
    this.characterClass = 'Voleur';
    this.stats = {
      health: 110,
      mana: 70,
      strength: 10,
      intelligence: 7,
      defense: 8,
      magicResistance: 7,
      agility: 15,
      luck: 12,
      endurance: 7,
      spirit: 6,
    };
  }
}

module.exports = {
  Guerrier,
  Mage,
  Voleur,
};
