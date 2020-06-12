const express = require("express");
const app = express();
const cors = require("cors");

const corsMiddleware = cors();

const productRouter = require("./routers/product");
const authRouter = require("./routers/auth");
const orderRouter = require("./routers/order");

const PORT = process.env.PORT || 3000;

app.use(corsMiddleware);
app.use(express.json());

app.use("/auth", authRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);

app.listen(PORT, () => console.log("server started"));
