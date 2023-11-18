{
  //generic constaint  with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship  "; //menually

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends  keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "akm",
    age: 25,
    address: "sylhet",
  };
  const car = {
    model: "toyota",
    year: 2003,
  };


  const result = getPropertyValue(car, 'year')
  //
}
