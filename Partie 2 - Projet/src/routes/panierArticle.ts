const express = require("express");
const router = express.Router();
const panierArticleController = require("../controllers/panierArticleController");

router.post("/", panierArticleController.createPanierArticle);

router.get("/", panierArticleController.getAllPanierArticles);

router.get("/:id", panierArticleController.getPanierArticleById);

router.put("/:id", panierArticleController.updatePanierArticle);

router.delete("/:id", panierArticleController.deletePanierArticle);

module.exports = router;
