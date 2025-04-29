// Factory Pattern
class Car {
  drive() {
    return "Driving a car";
  }
}

class Truck {
  drive() {
    return "Driving a truck";
  }
}

class VehicleFactory {
  static createVehicle(type) {
    switch (type) {
      case "car":
        return new Car();
      case "truck":
        return new Truck();
      default:
        throw new Error("Unknown type");
    }
  }
}

const car = VehicleFactory.createVehicle("car");
console.log(car.drive());
