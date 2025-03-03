// Génération grille
class Deplacement {
    constructor(X, Y, content) {
        this.X = X; 
        this.Y = Y; 
        this.content = content || []; 
    }
}

function generateGrid(width, height) {
    const grid = [];
    
    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        row.push(new Deplacement(x, y, []));
      }
      grid.push(row);
    }
  
    return grid;
  }

function movePlayer(currentX, currentY, direction, gridWidth, gridHeight) {
    let newX = currentX;
    let newY = currentY;
  
    switch (direction.toLowerCase()) {
      case 'north':
        newY -= 1;
        break;
      case 'south':
        newY += 1;
        break;
      case 'east':
        newX += 1;
        break;
      case 'west':
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

  

