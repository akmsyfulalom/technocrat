{
  //interface
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: 12
  } 


  type UserWithrole1 = User1 & {role: string }
   interface UserWithrole2 extends User1 {
    role: string
   }

  const user1: UserWithrole2 = {
    name: "akm",
    age: 12,
    role: "manager"
  };


  

// js --> object, array -> object -> function  -> object

interface Roll2 {
    [index : number] : number
}



type Roll1 = number[];
const rollNumber1 : Roll2 = [1,2,3]


type Add = (num1: number, num2: number) =>  number

interface Add1 {
(num1: number, num2: number) : number
}

const add: Add1 = (num1, num2) =>  num1+num2

 

  //
}
