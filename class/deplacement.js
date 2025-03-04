class Deplacement {
    constructor(X, Y, content) {
        this.X = X; 
        this.Y = Y; 
        this.content = content || []; 
    }
}

function movePlayer(currentX, currentY, direction, gridWidth, gridHeight) {
    let newX = currentX;
    let newY = currentY;
  
    switch (direction.toLowerCase()) {
      case 'N':
        newY -= 1;
        break;
      case 'S':
        newY += 1;
        break;
      case 'E':
        newX += 1;
        break;
      case 'O':
        newX -= 1;
        break;
      default:
        throw new Error("Direction invalide");
    }
  
    if (newX < 0 || newX >= gridWidth || newY < 0 || newY >= gridHeight) {
      throw new Error("Déplacement hors de la grille !");
    }
  
    return { x: newX, y: newY };
  }

  module.exports = {
    Deplacement,
    generateGrid, 
    movePlayer
};

  

