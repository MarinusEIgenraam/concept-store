const { Router } = require("express");
const Order = require("../models").order;
const User = require("../models").user;
const OrderProducts = require("../models").orderProduct;
const Product = require("../models").product;
const router = new Router();

router.post("/", async (req, res, next) => {
  const { userId, productId } = req.body;
  if (!userId || !productId || !productId.length) {
    res.status(400).send("missing parameters");
  } else {
    try {
      // this part is interesting.
      // we have the id of the user and some productIds.
      // we need to 1st create the Order so we can use the new id
      // when inserting in orderProducts

      const newOrder = await Order.create({ date: "thisShouldBeADate" });

      // we map the array of product Ids into 'creates'. But doing this we are not awaiting
      // correctly. We are going to get back an array of promises.
      const orderProductCreatePromises = productIds.map(
        async (pId) =>
          await OrderProducts.create({ orderId: newOrder.id, productId: pId })
      );

      //Using this we await on the whole array of promises as if it was just one
      await Promise.all(orderProductCreatePromises);

      /*
        this is probably more efficient, first map into objects and use bulkCreate
        so we avoid doing many trips to the DB.
      const productsWithOrder = productIds.map(pId => ({
        productId: pId,
        orderId: newOrder.id,
      }));
      const withBulkCreate = await OrderProducts.bulkCreate(productsWithOrder);
*/

      //we now get again the order but with the products to check
      const orderWithProducts = await Order.findByPk(newOrder.id, {
        include: [Product, User],
      });

      res.send(orderWithProducts);
    } catch (e) {
      next(e);
    }
  }
});

router.get("/", async (req, res, next) => {
  try {
    // just including the user to try it out
    const orders = await Order.findAll({ include: [User] });
    res.json(orders);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
