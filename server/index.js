import express from "express";
import CarRentalSystem from "./model/CarRentalSystem.js";
import User from "./model/User.js";

const app = express();

app.get("/", (req, res) => {
  const carRentalSystem = new CarRentalSystem();

  // Create users (observers)
  const user1 = new User("Alice", "alice@gmail.com");
  const user2 = new User("Bob", "bob@gmail.com");

  // Add users as observers
  carRentalSystem.addObserver(user1);
  carRentalSystem.addObserver(user2);

  // Rent a car
  console.log("Renting a car...");
  carRentalSystem.rentCar(carRentalSystem.getCars()[0], user1);

  // Return the car
  console.log("\nReturning the car...");
  carRentalSystem.returnCar(carRentalSystem.getCars()[0], user1);

  res.send(carRentalSystem.observers);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
