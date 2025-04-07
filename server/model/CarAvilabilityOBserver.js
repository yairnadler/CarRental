export default class CarAvailabilityObserver {
    update(car) {
      console.log(`The car with license plate ${car.licensePlate} is now available for rent.`);
    }
  }