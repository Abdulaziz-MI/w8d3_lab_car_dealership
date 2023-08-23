const Dealership = function(name, carCapacity){
    this.name = name;
    this.carCapacity = carCapacity;
    this.carsInStock = [];
}


// methods
Dealership.prototype.addCar = function(car) { 
   if (this.getNumberOfCarsInStock() === this.carCapacity)
   return "Dealership is at max capacity"
   else {this.carsInStock.push(car)}
   
}

Dealership.prototype.removeCar = function(car) {
    this.carsInStock = this.carsInStock.filter(existingCar => existingCar !== car);
}

// getters
Dealership.prototype.getName = function() { return this.name; }

Dealership.prototype.getTotalStockPrice = function() { 
    return this.carsInStock.reduce((totalPrice, car) => totalPrice + car.getPrice(), 0);
 }

Dealership.prototype.getCarCapacity = function() { return this.carCapacity; }

Dealership.prototype.getCarsInStock = function() { return this.carsInStock; }

Dealership.prototype.getNumberOfCarsInStock = function() { return this.getCarsInStock().length; }

// Dealership.prototype.getMakesOfCarsInStock = function() { 
//     const MakesOfCarsInStock = this.carsInStock.map(car => car.getMake());
//     return MakesOfCarsInStock;
// }

Dealership.prototype.getCarsByMake = function(make){
    const carsByMake = this.carsInStock.filter(car => car.getMake() === make);
    return carsByMake;
  }


// setters
Dealership.prototype.setName = function(name) { this.name = name; }
Dealership.prototype.setCarCapacity = function(carCapacity) { this.carCapacity = carCapacity; }
Dealership.prototype.setCarsInStock = function(carsInStock) { this.carsInStock = carsInStock; }


module.exports = Dealership;
