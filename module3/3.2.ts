{
    //oop inheritence 

    class Person  {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age:number,   address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numbersOfHour: number){
            console.log(`${this.name} will sleep for ${numbersOfHour}`)
        }
    }








    class Student extends Person{
        
        constructor(name: string, age:number,   address: string){
            super(name, age, address)
        }
        
    }


    const student1 = new Student("AKM ", 25, "BD")
    student1.



    class Teacher extends Person{
        designation: string
        constructor(name: string, age:number,   address: string, designation: string){
            super(name, age, address)   
            this.designation = designation
           
        }
       
        takeClass(numberOfClass: number){
            console.log(`${this.name} will take  ${numberOfClass}`)

        }
    }

    const teacher = new Teacher("AKM ", 25, "BD", 'english teacher')
    teacher.

    //
}