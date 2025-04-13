class Command {
  execute() {
    throw "This method should be implemented by the subclasses";
  }
}

export class RentCommand extends Command {
  constructor(car, user) {
    super();
    this.car = car;
    this.user = user;
  }

  execute() {
    let licensePlate = this.car.getDetails()[0];

    if (this.car.isRented) {
      console.log(`${licensePlate} is already rented`);
      return;
    }
    this.user.addCar(this.car);
    this.car.isRented = true;
    console.log(`${licensePlate} has been rented`);
  }
}

export class ReturnCommand extends Command {
  constructor(car, user) {
    super();
    this.car = car;
    this.user = user;
  }

  execute() {
    this.car.isRented = false;
    this.user.removeCar(this.car);
    let licensePlate = this.car.getDetails()[0];
    console.log(`${licensePlate} has been returned`);
  }
}
