const readline = require('readline');
const { askQuestion } = require('./askQuestion');
const { createCharacter } = require('./createCharacter');

async function startNewGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const name = await askQuestion(rl, "Entrez le nom de votre personnage (3-20 lettres) : ");
    const className = await askQuestion(rl, "Choisissez une classe (Guerrier/Mage/Voleur) : ");

    const hero = createCharacter(name, className);

    console.log("\nPersonnage créé avec succès !\n");
    console.log(hero.getSummary());
  } catch (error) {
    console.error("Erreur :", error.message);
  } finally {
    rl.close();
  }
}

module.exports = { startNewGame };
