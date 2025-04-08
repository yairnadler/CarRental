export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  update(car) {
    console.log(`${this.name} has been notified via ${this.email} that ${car.licensePlate} has been returned`)
  }
}
