const readline = require('readline');
const { generateGrid } = require('./generateGrid');
const { movePlayer } = require('./movePlayer');

async function DepGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const width = 5;
  const height = 5;
  const grid = generateGrid(width, height);

  let currentX = 1;
  let currentY = 1;

  console.log(`Position de départ : (${currentX}, ${currentY})`);
  console.log("Tapez 'n', 's', 'e', 'o' pour vous déplacer, ou 'exit' pour quitter.");

  function askQuestion(questionText) {
    return new Promise((resolve) => {
      rl.question(questionText, (userInput) => {
        resolve(userInput.trim());
      });
    });
  }

  while (true) {
    const direction = await askQuestion("Déplacer dans quelle direction ? ");
    if (direction.toLowerCase() === 'exit') {
      console.log("Fin du déplacement !");
      break;
    }

    try {
      const { x: newX, y: newY } = movePlayer(currentX, currentY, direction, width, height);
      currentX = newX;
      currentY = newY;
      console.log(`Déplacement réussi ! Nouvelle position : (${currentX}, ${currentY})`);
    } catch (error) {
      console.error("Erreur :", error.message);
    }
  }

  rl.close();
}

module.exports = { DepGame };
