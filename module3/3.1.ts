{
    //oop -- class

    class Animal {
 
    constructor(public name: string, public species: string, public sound: string){}
    makeSound() {
        console.log(`The ${this.name} says ${this.sound} `)
    }

    }

    const dog = new Animal("garmen bahi", "Dig", "gew gew");
    const cat = new Animal("cat bahi", "Cat", "mew mew");

    dog.makeSound()
    cat.makeSound()


    //
}