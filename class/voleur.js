const { Character } = require('./character');

class Voleur extends Character {
  constructor(name) {
    super(name, 'Voleur', {
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
    });
  }
}

module.exports = { Voleur };
