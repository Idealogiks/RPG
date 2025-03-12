const { createCharacter } = require('./createCharacter');
const { validateName } = require('./validateName');
const { askQuestion } = require('./askQuestion');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function startNewGame() {
  console.log("Démarrage d’une nouvelle partie !");
  try {
    const name = await askQuestion(rl, "Entrez le nom de votre personnage (3-20 lettres) : ");
    validateName(name); 

    const characterClass = await askQuestion(rl, "Choisissez une classe (Guerrier/Mage/Voleur) : ");
    const hero = createCharacter(name, characterClass); 

    console.log("\nPersonnage créé avec succès !\n");
    console.log(hero.getSummary());
  } catch (error) {
    console.error("Erreur :", error.message);
  } finally {
    rl.close();
  }
}

module.exports = { startNewGame };
