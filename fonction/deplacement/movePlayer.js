function movePlayer(currentX, currentY, direction, gridWidth, gridHeight) {
    let newX = currentX;
    let newY = currentY;
  
    switch (direction.toLowerCase()) {
      case 'n':
        newY += 1;
        break;
      case 's':
        newY -= 1;
        break;
      case 'e':
        newX += 1;
        break;
      case 'o':
        newX -= 1;
        break;
      default:
        throw new Error("Direction invalide : utilisez N, S, E ou O");
    }
  
    if (newX < 0 || newX >= gridWidth || newY < 0 || newY >= gridHeight) {
      throw new Error("Déplacement hors de la grille !");
    }
  
    return { x: newX, y: newY };
  }
  
  module.exports = {
    movePlayer,
  };
  