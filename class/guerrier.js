const { Character } = require('./character');

class Guerrier extends Character {
  constructor(name) {
    super(name, 'Guerrier', {
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
    });
  }
}

module.exports = { Guerrier };
