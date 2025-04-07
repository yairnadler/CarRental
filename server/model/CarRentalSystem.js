import { RentCommand, ReturnCommand } from "./Actions";
import CarAvailabilityObserver from "./carAvilabilityOBserver";
import carsDictionary from "./carsDataBase";

export default class CarRentalSystem {
  constructor() {
    this.cars = carsDictionary;
    this.observers = [];
  }

  // Rent a car
  rentCar(car, user) {
    const rentCommand = new RentCarCommand(car, user);
    rentCommand.execute();
  }

  // Return a car
  returnCar(car, user) {
    const returnCommand = new ReturnCarCommand(car, user);
    returnCommand.execute();
    this.notifyObservers(car);
  }

  // Register observers
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Notify observers about car availability
  notifyObservers(car) {
    this.observers.forEach((observer) => observer.update(car));
  }
}
