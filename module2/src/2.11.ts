{
    //utility types
    // pick type 
    type Person ={
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type NameAge  = Pick<Person, "name" | "age">

    //Omit 
    type ContactInfo = Omit<Person, "name" | "age">

    //Require 
    type RequirePerson = Required<Person>

    //pertial 

    type PersonPartial = Partial<Person>

    //readonly

    type PersonReadonly = Readonly<Person>

    // Record 

    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    

    type MyObj = Record<string, string>
const EmpObj : Record<string, unknown> = {}
    const myObj: MyObj = {
        a: "a",
        b: "b",
        c: "c"
    }


    //
}