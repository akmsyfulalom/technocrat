{
    //instanceof guard

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }
        makeSound() {
            console.log("i'm making sound")
        }
    }

    class Dog extends Animal{
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            console.log("I'm Barking ")
        }
    }
    class Cat extends Animal{
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMew() {
            console.log("I'm mew ")
        }
    }
    const isDog = (animal: Animal) : animal is Dog => {
        return animal instanceof Dog
    }

    const isCat = (animal : Animal) : animal is Cat => {
        return  animal instanceof Cat
    }


    const getAnimal = (animal: Animal) => {
        if(isDog(animal)){
            animal.makeBark();

        }else if(isCat(animal)){
            animal.makeMew();
        }else{
            animal.makeSound()
        }
    }



    const  dog = new Dog("dog", "brak")
    const cat = new Cat("cat" , "mew")

    getAnimal( dog)
    //
}