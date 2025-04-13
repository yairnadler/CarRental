export default class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.rentedCars = []; // Initialize rentedCars as an empty array
  }

  update(car) {
    console.log(`${this.username} has been notified via ${this.email} that ${car.licensePlate} has been returned`)
  }

  getRentedCars() {
    return this.rentedCars;
  }

  addCar(car) {
    this.rentedCars.push(car);
  }

  removeCar(car) {
    this.rentedCars = this.rentedCars.filter((rentedCar) => rentedCar !== car);
  }
}
