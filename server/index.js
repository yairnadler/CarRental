import express from "express";
import session from "express-session";
import morgan from "morgan";

import router from "./routes/routes.js";
import CarRentalSystem from "./model/CarRentalSystem.js";

const app = express();

const carRentalSystem = new CarRentalSystem();

app.use((req, _, next) => {
  req.carRentalSystem = carRentalSystem;
  next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", router);

app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
