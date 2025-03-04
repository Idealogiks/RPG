const { askQuestion } = require('./fonction/askQuestion');
const { createCharacter } = require('./fonction/createCharacter');
const { validateName } = require('./fonction/validateName');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function startGame() {
  try {
    const name = await askQuestion(rl, "Entrez le nom de votre personnage (3-20 lettres) : ");
    validateName(name);

    const characterClass = await askQuestion(rl, "Choisissez une classe (Guerrier/Mage/Voleur) : ");
    const hero = createCharacter(name, characterClass);

    console.log("\nPersonnage créé avec succès !\n");
    console.log(hero.getSummary());

  } catch (error) {
    console.log('Erreur :', error.message);
  } finally {
    rl.close();
  }
}

startGame();
