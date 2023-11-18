{
//generic type 

type GenericArray<T> = Array<T>

// const rollNumber : number[] = [2,3,5];
const rollNumber :GenericArray<number> = [2,3,5];

// const mentors : string[] = ['x', 'z', 'y'];
const mentors : GenericArray<string> ['x', 'z', 'y'];


// const bullArray : boolean[] = [true, false, true]; 
const bullArray : GenericArray<boolean> = [true, false, true]; 

interface UserInfo {
    name: string;
    age: number
}

const user : GenericArray<UserInfo> = [
    {
        name: "akm",
        age: 23
    },
    {
        name: "s",
        age: 20
    }
]



const add = (x:number, y:number) => x+y;


add(20, 30);


//generic tuple


type GenericTuple<X, Y> = [X, Y]


const manush : GenericTuple<string, string> = ['x', 'y'];



const userWithId: GenericTuple<number, {name: string, email: string}> = [1234, {name: 'akm', email: 'a@a.com'}]





}