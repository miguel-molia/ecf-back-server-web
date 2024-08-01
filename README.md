# ecf-back-cda-2024-server

Cette évalution est en deux parties : la première est une suite de questions la deuxième est un projet à coder.

# Modalités d'envoi du projet
Faite un fork de ce repository git et codez votre projet dans le dossier *app*.
![alt text](image.png)
*Voir **fork** en haut à droite*

## Partie 1 - Questions

1. Ecrire la requête SQL qui permet de récupérer tout les produits de la carte.
```sql
SELECT * FROM articles;

```

2. Ecrire la requête SQL qui permet d'ajouter un produit au panier de l'utilisateur.
```sql
INSERT INTO panierArticles (quantite, panierId, articleId) VALUES (2, 1, 5);


```

3. Ecrire la requête SQL qui permet de valider une commande pour qu'elle parte en salle.
```sql
INSERT INTO commandes (montantTotal, clientId) SELECT SUM(articles.price * panierArticles.quantite), paniers.clientId FROM panierArticles INNER JOIN articles ON panierArticles.articleId = articles.id INNER JOIN paniers ON panierArticles.panierId = paniers.id WHERE paniers.id = 1 GROUP BY paniers.clientId;


```

4. Un nouveau burger est arrivé : le DoubleBigMassi. Ecrivez la requête SQL qui permet d'ajouter ce magnifique *burger* à la carte.
```sql
INSERT INTO articles (name, description, price)
VALUES ('DoubleBigMassi', 'Un burger double avec du fromage et des légumes', 10.99);

```

5. Ecrire la requête SQL qui permet de récupérer tout les produits d'une commande en fonction de l'id d'un utilisateur.
```sql
SELECT articles.name, articles.description, commandeArticles.quantite, commandeArticles.prix FROM commandeArticles INNER JOIN articles ON commandeArticles.articleId = articles.id INNER JOIN commandes ON commandeArticles.commandeId = commandes.id WHERE commandes.clientId = 1;


```

## Partie 2 - Projet
### Description du projet
Mettez en place le back-end du système de borne McDonalds de Souillac-les-bains.

- **Le back-end doit au minimum permettre un accès CRUD.**
- Le back-end doit être codé dans un langage fortement typé comme TypeScript, Java ou bien en PHP typé.
- Mcdo ne peut pas se permettre que le back-end plante à la moindre erreur. Mettez en place la gestion des erreurs qui empèche le back-end de planter.
- *Bonus : Sécurité les routes via un système d'authentification.*

Vous avez carte blanche sur la stack et le code tant que les consignes d'en haut sont réspectées.

### Documentations éventuelles
####  Use case
![alt text](use-case-mcdo.png)

#### Exemple de  menu du Mcdo :
- [Table des prix](PRIX-.pdf)
- https://www.mcdonalds.com/ch/fr-ch/menu.html

#### Exemple de commande Mcdo :
Les commandes peuvent être mangées sur place ou à emportée.

![alt text](mcdonald_s_02211300_194510247.jpeg)
