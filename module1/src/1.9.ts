{
    // Type alias

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address: string
    }
 
    const student1: Student = {
        name: "mezba",
        age: 50,
        gender: "male",
        contactNo: "0175215255",
        address: "ctg"

    };

    const student2: Student = {
        name: "mir",
        age: 50,
        gender: "male",
        address: "ctg"

    }


    type UserNmae = string;
    type IsAdmin = boolean;

    const userName: UserNmae = "akash"
    const isAdmin: IsAdmin = true



    type Add = (num1: number, num2: number)=> number;
    const add: Add = (num1, num2) => num1+ num2;







    //
}