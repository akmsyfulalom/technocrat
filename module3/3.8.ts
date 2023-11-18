{
  //polimorphisom
  class Person {
    getSleep() {
      console.log(`I'm sleeping for 8 hour per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I'm sleeping for 7 hour per day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`I'm sleeoung for 6 hour per day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    redius: number;
    constructor(radius: number) {
      super();
      this.redius = radius;
    }
    getArea(): number {
      return Math.PI * this.redius * this.redius;
    }
  }

  class Rectangle extends Shape {
    heigth: number;
    width: number;
    constructor(heigth: number, width: number) {
      super();
      this.heigth = heigth;
      this.width = width;
    }
    getArea(): number {
      return this.heigth * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };


  const shape1 = new Shape()    
  const shape2 = new Circle(10) 
  const shape3 = new Rectangle(20, 20)

getShapeArea(shape1)
getShapeArea(shape2)
getShapeArea(shape3)



  //
}
