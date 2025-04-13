import { Router } from "express";
import { allCars, signUser, userLogout, showUserRentedCars, rentCar } from "../controllers/controllers.js";

const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    res.status(401).send("Unauthorized: Please log in first.");
  }
};

const router = Router();

router.post("/login", (req, res) => {
  const carRentalSystem = req.carRentalSystem;
  signUser(req, res, carRentalSystem);
});

router.get("/cars", isAuthenticated, allCars);

router.get("/myRentedCars", isAuthenticated, showUserRentedCars);

router.get("/logout", isAuthenticated, userLogout);

router.post("/rentCar", isAuthenticated, rentCar);

// TODO: Implement the following routes

// // router.get("/users", allUsers);

// // router.post("/users/:email/rentCar", userRentCar);

// // router.post("/users/:email/returnCar", userReturnCar);

export default router;
