{
  //abstraction
  interface Car1 {
    startEngine(): void;
    stopEmgine(): void;
    move(): void;
  }
  class Car implements Car1 {
    startEngine(): void {
      console.log(`I'm Stating the car engine`);
    }

    stopEmgine(): void {
      console.log(`I'm stoping the car engine`);
    }
    move(): void {
      console.log(`I'm moving the car`);    
    }
    test(){
      console.log(`I'm just testing`)
    }
    
  }
  
  const toyotaCar = new Car();
  toyotaCar.startEngine()



  // abstract class 
 
 abstract class Car2 {
   abstract startEngine(): void 

  abstract  stopEmgine(): void 
  abstract  move(): void 
    test(){
      console.log(`I'm just testing`)
    }
    
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I'm start the car engine`)
    }

    stopEmgine(): void {
      console.log(`I'm stoping the car engine`)
    }
    move(): void {
      console.log(`I'm moving the car`)
    }
  }

  const hondaCar = new Car2();
  hondaCar.startEngine()
  //
}
