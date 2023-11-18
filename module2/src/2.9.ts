{
    //conditional type
    type a1 = number 
    type a2 = undefined 

    type x = a1 extends null ? true : false  // conditional type 
    type Y = a1 extends null ? true : a2 extends  undefined ? undefined : any  // conditional type 







    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

type CheckVehicle<T> = T extends keyof Sheikh ? true : false 

type HasBike = CheckVehicle<"bike">

    //

}