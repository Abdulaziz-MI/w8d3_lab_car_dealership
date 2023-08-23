const Car = require('../Car');
const Dealership = require('../Dealership');

let tesla, prius, dealership;

beforeEach(() => {
    tesla = new Car("Tesla", 30000, "electric");
    prius = new Car("Prius", 3000, "hybrid");

    dealership = new Dealership("the unit", 30);
    dealership.addCar(tesla);
    dealership.addCar(prius);
});



describe('getters', () => {
    test('get name', () => {
        expect(dealership.getName()).toBe("the unit");
    });

    test('get max cap', () => {
        expect(dealership.getCarCapacity()).toBe(30);
    });

    test('get current stock', () => {
        expect(dealership.getCarsInStock()).toEqual([tesla, prius]);
    });

    // test('get makes of cars in stock', () => {
    //     expect(dealership.getMakesOfCarsInStock()).toEqual(["Tesla", "Prius"]);
    // });

    test('get cars by make', () => {
        expect(dealership.getCarsByMake("Tesla")).toEqual([tesla]);
    });

    test('get Number Of Cars In Stock', () => {
        expect(dealership.getNumberOfCarsInStock()).toBe(2);
    });
    test('get total stock price', () => {
        expect(dealership.getTotalStockPrice()).toBe(33000);
    });
    

});

describe('setters', () => {
    test('set name', () => {
        dealership.setName("the big unit");
        expect(dealership.getName()).toBe("the big unit");
    });

    test('set max cap', () => {
        dealership.setCarCapacity(30);
        expect(dealership.getCarCapacity()).toBe(30);
    });

    test('set current stock', () => {
        dealership.setCarsInStock([tesla, prius]);
        expect(dealership.getCarsInStock()).toEqual([tesla, prius]);
    });

    test('add to current stock', () => {
        dealership.addCar( new Car("bmw",5000, "diesel"));
        expect(dealership.getCarsInStock()).toEqual([tesla, prius, new Car("bmw",5000, "diesel")]);
    });
    test('remove from current stock', () => {
        dealership.removeCar(tesla);
        expect(dealership.getCarsInStock()).toEqual([prius]);
    });


});
