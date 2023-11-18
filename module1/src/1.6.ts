// Learning function in ts
// normal function
// arrow function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, true);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method

{
const poorUser = {
  name: "akm",
  balance: 0,
  addBalance(balance: number): string {
    return `This is my balace : ${this.balance + balance}`;
  },
};



const arr : number[]  = [1,2,3]

const newArr : number[] = arr.map((ele : number) : number => ele*ele )
console.log(newArr)
}