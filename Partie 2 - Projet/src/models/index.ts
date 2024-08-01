const Employe = require("./employe");
const Client = require("./client");
const Article = require("./article");
const Panier = require("./panier");
const Commande = require("./commande");
const CommandeArticle = require("./commandeArticle");
const PanierArticle = require("./panierArticle");

Client.hasMany(Panier, { foreignKey: "clientId" });
Panier.belongsTo(Client, { foreignKey: "clientId" });

Client.hasMany(Commande, { foreignKey: "clientId" });
Commande.belongsTo(Client, { foreignKey: "clientId" });

Commande.belongsToMany(Article, {
  through: CommandeArticle,
  foreignKey: "commandeId",
});
Article.belongsToMany(Commande, {
  through: CommandeArticle,
  foreignKey: "articleId",
});

Panier.belongsToMany(Article, {
  through: PanierArticle,
  foreignKey: "panierId",
});
Article.belongsToMany(Panier, {
  through: PanierArticle,
  foreignKey: "articleId",
});

module.exports = {
  Employe,
  Client,
  Article,
  Panier,
  Commande,
  CommandeArticle,
  PanierArticle,
};
