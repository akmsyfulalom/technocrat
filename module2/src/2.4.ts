{
    //interface --> generic 
    interface Developer<T, Y = null> {
        name: string; 
        computer: {
            brand: string;
            model: string; 
            releaseYear: number; 
        };
        smartWatch: T;
        bike?: Y;
    }

interface Dev1{
    brand: string;
    model:string;
    display: string
}
const poorDeveloper : Developer<Dev1> ={ 
    name: "akm",
    computer: {
        brand: "asus",
        model: "ak25",
        releaseYear: 2023
    },
    smartWatch:{
        brand: "ab",
        model: "dd25",
        display: "olj"
    }

}

interface Bike {
    model: string;
    engineCapacity: string;
}


type reachDev = {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
}
const reachDeveloper : Developer <reachDev, Bike> ={ 
    name: "am",
    computer: {
        brand: "sus",
        model: "k25",
        releaseYear: 2023
    },
    smartWatch:{
        brand: "a",
        model: "d25",
        display: "lj",
        heartTrack: true,
        sleepTrack: true
    },
   bike:{
    model: "yam,aha",
    engineCapacity: "100CC"
   }
}
    //
}