{
    // mapped type 

const arrayOfNumbers: number[] = [1,2,12,5];


const arrayOfString : string[] = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfString)


type  AreaNumber = {
    heigth: number;
    width: number;
}

type Heigth = AreaNumber['heigth'] // look up type 

type AreaString<T> = {
    [key in keyof T ]: T[key]
}

const area1 : AreaString<{height: string; width: number}> = {
    height: "100",
    width: 100
}

    //
}