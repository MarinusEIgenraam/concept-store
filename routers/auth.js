const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authorizationWare = require("../auth/authorizationWare");

const User = require("../models").user;
const router = new Router();

router.get("/test-auth", authorizationWare, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`,
  });
});

router.post("/signup", async (req, res, next) => {
  try {
    // expect some params
    // validate if they are there
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res
        .status(400)
        .send(
          "Missing parameters firstName, lastName, email, password for sign up"
        );
    } else {
      // hash password
      const hashedPassword = bcrypt.hashSync(password, 10);

      console.log("passwords", password, hashedPassword);
      // create user.
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      res.send(newUser);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({
      message: "Please supply a valid email and password",
    });
  } else {
    // 1. find user based on email address
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      res.status(400).send({
        message: "User with that email does not exist",
      });
      // 2. use bcrypt.compareSync to check the recieved password against the stored hash
    } else if (bcrypt.compareSync(password, user.password)) {
      // 3. if the password is correct, return a JWT with the userId of the user (user.id)
      const jwt = toJWT({ userId: user.id });
      res.send({
        jwt,
      });
    } else {
      res.status(400).send({
        message: "Password was incorrect",
      });
    }
  }
});

module.exports = router;
