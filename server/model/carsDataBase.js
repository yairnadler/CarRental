import { Toyota, Honda, Ford, Chevrolet, BMW } from "./Cars.js";

class CarFactory {
  static createCar(brand) {
    const licensePlate = this.generateLicensePlate();

    switch (brand) {
      case "Toyota":
        return new Toyota(licensePlate);
      case "Honda":
        return new Honda(licensePlate);
      case "Ford":
        return new Ford(licensePlate);
      case "Chevrolet":
        return new Chevrolet(licensePlate);
      case "BMW":
        return new BMW(licensePlate);
      default:
        throw new Error("Unknown brand");
    }
  }

  static generateLicensePlate() {
    const digits = Math.floor(100 + Math.random() * 900); // 3 random digits
    const letters =
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      String.fromCharCode(65 + Math.floor(Math.random() * 26)); // 3 random letters
    return `${digits}-${letters}`;
  }
}

const carsDictionary = {};

const brands = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"];

for (let i = 0; i < 100; i++) {
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const car = CarFactory.createCar(brand);
  carsDictionary[car.licensePlate] = car.brand;
}

export default carsDictionary;
