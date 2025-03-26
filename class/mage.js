const { Character } = require('./character');

class Mage extends Character {
  constructor(name) {
    super(name, 'Mage', {
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
    });
  }
}

module.exports = { Mage };
