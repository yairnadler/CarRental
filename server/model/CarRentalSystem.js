import { RentCommand, ReturnCommand } from "./Actions.js";
import carsDictionary from "./CarsDataBase.js";

export default class CarRentalSystem {
  constructor() {
    this.cars = carsDictionary;
    this.observers = [];
  }

  getCars() {
    return this.cars;
  }

  // Rent a car
  rentCar(licensePlate, user) {
    const car = this.cars[licensePlate];
    const rentCommand = new RentCommand(car, user);
    rentCommand.execute();
  }

  // Return a car
  returnCar(licensePlate, user) {
    const car = this.cars[licensePlate];
    const returnCommand = new ReturnCommand(car, user);
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
