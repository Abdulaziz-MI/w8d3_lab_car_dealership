const Car = function(make, price, engine)  {
    this.make = make;
    this.price = price;
    this.engine = engine;
}

Car.prototype.getMake = function getMake() { return this.make; }
Car.prototype.getPrice = function getPrice() { return this.price; }
Car.prototype.getEngine = function getEngine() { return this.engine; }

Car.prototype.setMake = function setMake(newMake) { this.make = newMake; }
Car.prototype.setPrice = function setPrice(newPrice) { this.price = newPrice; }
Car.prototype.setEngine = function setEngine(newEngine) { this.engine = newEngine; }



module.exports = Car;



