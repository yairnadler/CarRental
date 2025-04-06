class Car {
  constructor(licensePlate, brand) {
    this.licensePlate = licensePlate;
    this.brand = brand;
    this.isRented = false;
  }

  getDetails() {
    return [this.licensePlate, this.brand];
  }

  getPrice() {
    throw "This method should be implemented in the subclass";
  }
}

export class Toyota extends Car {
  constructor(licensePlate) {
    super(licensePlate, "Toyota");
  }

  getPrice() {
    return 100;
  }
}

export class Honda extends Car {
  constructor(licensePlate) {
    super(licensePlate, "Honda");
  }

  getPrice() {
    return 100;
  }
}

export class Ford extends Car {
  constructor(licensePlate) {
    super(licensePlate, "Ford");
  }

  getPrice() {
    return 120;
  }
}

export class Chevrolet extends Car {
  constructor(licensePlate) {
    super(licensePlate, "Chevrolet");
  }

  getPrice() {
    return 120;
  }
}

export class BMW extends Car {
  constructor(licensePlate) {
    super(licensePlate, "BMW");
  }

  getPrice() {
    return 200;
  }
}
