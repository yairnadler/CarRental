import { Router } from "express";

const router = Router();

router.post("/login", signUser);

router.get("/cars", allCars);

router.get("/users/:email", findUser);

router.get("/users", allUsers);

router.post("/users/:email/rentCar", userRentCar);

router.post("/users/:email/returnCar", userReturnCar);


export default router;