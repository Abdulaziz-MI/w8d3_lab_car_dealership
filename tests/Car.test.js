const Car = require("../Car");

const prius = new Car("Toyota", 3000, "hybrid")

describe('getters', () => { 

    test('get make', () => {
      expect(prius.getMake()).toBe("Toyota");
    });
    test('get price', () => {
      expect(prius.getPrice()).toBe(3000);
    });
    test('get engine', () => {
      expect(prius.getEngine()).toBe("hybrid");
    });
  
});


describe('setters', () => { 

  test('set make', () => {
    prius.setMake("ford")
    expect(prius.getMake()).toBe("ford");
  });
  test('set price', () => {
    prius.setPrice(100)
    expect(prius.getPrice()).toBe(100);
  });
  test('set engine', () => {
    prius.setEngine("electric")
    expect(prius.getEngine()).toBe("electric");
  });


  
});