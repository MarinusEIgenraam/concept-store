const { Router } = require("express");
const Product = require("../models").product;
const Categorie = require("../models").categorie;
const router = Router();

router.get("/products", (request, response, next) => {
  Product.findAll({ include: [Categorie] })
    .then((product) => response.json(product))
    .catch(next);
});

router.get("/products/:productId", (request, response, next) => {
  Product.findByPk(request.params.productId, {
    include: [Categorie],
  })
    .then((product) => {
      if (!product) {
        response.status(404).end();
      } else {
        response.json(product);
      }
    })
    .catch(next);
});

module.exports = router;
