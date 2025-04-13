import carsDictionary from "../model/CarsDataBase.js";
import User from "../model/User.js";

export const signUser = (req, res, carRentalSystem) => {
  const { username, email } = req.body;

  if (email && username) {
    const user = new User(username, email);

    req.session.user = { username: user.username, email: user.email };
    
    res.redirect("/cars");
  } else {
    res.send(400, "Please enter both email and username.");
  }
};

export const showUserRentedCars = (req, res) => {
  const { user } = req.session.user;
  user.getRentedCars();
};

export const rentCar = (req, res) => {
    const { user } = req.session.user;
    const { licensePlate } = req.body;
    const carRentalSystem = req.carRentalSystem;
    console.log(user);
    carRentalSystem.rentCar(licensePlate, user);
    }

export const allCars = (_, res) => {
  res.json(carsDictionary);

  return carsDictionary;
};

export const userLogout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Could not log out. Please try again.");
    }
    // res.redirect("/login");
    return res.status(200).send("Logged out successfully.");
  });
};
