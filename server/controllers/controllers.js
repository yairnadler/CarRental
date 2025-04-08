import carsDictionary from "../model/CarsDataBase.js";
import User from "./model/User.js";

export const signUser = (req, res) => {
  const { name, email } = req.body;
  const user = {
    name: name,
    email: email,
  };
  if (!name || !email) {
    return res.status(400).json({
      message: "Please provide a name and email",
    });
  } else {
    req.session.user = user;
    const user = new User(name, email);
    user.setObserver(user);

    res.json({
      message: "User signed in successfully",
      user: user,
    });
  }
};

export const allCars = (_, res) => {
  const cars = carsDictionary.map((car) => {
    return {
      id: car.id,
      name: car.name,
      price: car.price,
      available: car.available,
    };
  });

  res.json(cars);
}
