function validateName(name) {
    if (name.length < 3 || name.length > 20) {
      throw new Error('Le nom doit comporter entre 3 et 20 caractères.');
    }
  
    if (!/^[A-Za-z]+$/.test(name)) {
      throw new Error('Le nom doit être composé seulement de lettres.');
    }
  }
  
  module.exports = { validateName };
  