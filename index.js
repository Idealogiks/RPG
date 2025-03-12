const { startNewGame } = require('./fonction/start/startNewGame');
const { DepGame } = require('./fonction/deplacement/Depgame');

async function main() {
    await startNewGame();
    await DepGame();
}

main();
