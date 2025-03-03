const { createCharacter, validateName  } = require("./classes/characters");
const { generateGrid, movePlayer } = require("./classes/deplacement")
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
    const characterClass = await askQuestion("Choisissez une classe (Guerrier/Mage/Voleur) : ");
    const hero = createCharacter(name, characterClass);
    console.log("\nPersonnage créé avec succès !\n");
    console.log(hero.getSummary());

  } catch (error) {
    console.log("Erreur :", error.message);

  } finally {
    rl.close();
  }
}


const grid = generateGrid(5, 5);

let playerX = 2;
let playerY = 2;

try {
  const { x: newX, y: newY } = movePlayer(playerX, playerY, 'north', 5, 5);
  playerX = newX;
  playerY = newY;
  console.log(`Nouvelles coordonnées du joueur : (${playerX}, ${playerY})`);
} catch (err) {
  console.error(err.message);
}

startGame();


