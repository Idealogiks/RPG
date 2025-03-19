## Violations des Principes SOLID

### Single Responsibility Principle (SRP)
- La fonction `startNewGame` dans `startNewGame.js` gère plusieurs responsabilités :
  - Gestion de l'interface utilisateur (readline)
  - Validation des entrées
  - Création du personnage
  - Affichage des informations
- La fonction `DepGame` dans `Depgame.js` mélange :
  - Gestion de l'interface utilisateur
  - Logique de déplacement
  - Gestion de la grille
  - Gestion des entrées utilisateur

### Open/Closed Principle (OCP)
- La création des personnages n'est pas extensible pour ajouter de nouvelles classes
- Le système de déplacement est codé en dur avec des directions spécifiques (n, s, e, o)

### Liskov Substitution Principle (LSP)
- Pas de classes de base clairement définies pour les personnages
- Absence de polymorphisme dans la gestion des différents types de personnages

### Interface Segregation Principle (ISP)
- Les interfaces ne sont pas clairement définies
- Les dépendances sont couplées directement aux implémentations

### Dependency Inversion Principle (DIP)
- Utilisation directe de `readline` sans abstraction
- Dépendances directes entre les modules sans injection de dépendances

## Autres Points Importants

### Architecture
- Absence de séparation claire entre la couche présentation et la logique métier
- Manque de structure en couches (MVC, Clean Architecture, etc.)

### Gestion des Erreurs
- Gestion basique des erreurs avec try/catch
- Absence de types d'erreurs personnalisés
- Messages d'erreur non standardisés

### Configuration
- Valeurs codées en dur (taille de la grille, directions possibles)
