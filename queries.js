const Order = require("./models").order;
const Product = require("./models").product;
const User = require("./models").user;

const getOrder = async (id) => {
  try {
    const order = await Order.findByPk(id, { include: [Product] });
    console.log(order.get({ plain: true }));
  } catch (e) {
    console.log(e);
  }
};

const getUserWithOrder = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: [{ model: Order, include: [Product] }],
    });
    console.log(user.get({ plain: true }).orders[0].products);
  } catch (e) {
    console.log(e);
  }
};

getUserWithOrder(1).then((result) => console.log(result));
