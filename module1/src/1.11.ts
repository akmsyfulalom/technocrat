{
// ternary operetor || optional chaining || nullish coalescing operetor

const age: number = 20;

if(age >= 18){
    console.log("Adult")
}else{
    console.log("Not Adult")
}

const isAdult = age >= 18 ? "Adult" : "Not Adult"

// nullish coalescing operator 
// nullish coalescing operator  use for null | undifined  ----> decisopn making 

const isAuthenticated = null; 

const result1 = isAuthenticated ?? "Guest"
const result2 = isAuthenticated ? isAuthenticated : "Guest"
console.log({result1},{result2} )

type User   = {
    name: string; 
    address: {
        city: string;
        road: string;
        presentaddress: string;
        permanentaddress?: string
    }
}

const user: User ={
    name: 'akm', 
    address:{
        city: 'syl',
        road: "tilagor",
        presentaddress: 'syl towm '
    }
}
const permanentaddress = user?.address?.permanentaddress ?? "No permanent Address"
console.log(permanentaddress)
//



}