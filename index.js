const { createCharacter, validateName  } = require("./classes/characters");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(questionText) {
  return new Promise((resolve) => {
    rl.question(questionText, (userInput) => {
      resolve(userInput);
    });
  });
}

async function startGame() {
  try {
    const name = await askQuestion("Entrez le nom de votre personnage (3-20 lettres) : ");
    validateName(name);
    const characterClass = await askQuestion("Choisissez une classe (Warrior/Mage/Thief) : ");
    const hero = createCharacter(name, characterClass);
    console.log("\nPersonnage créé avec succès !\n");
    console.log(hero.getSummary());

  } catch (error) {
    console.log("Erreur :", error.message);

  } finally {
    rl.close();
  }
}

startGame();
