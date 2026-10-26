class Animal {
    constructor(name) {
        this.name = name;
    
    }

    makesound() {
        console.log(`${this.name} animal is moaning!!!`);
    }
}

class Dog extends Animal {
    makesound() {
        console.log(`${this.name} dog is barking!!!`);
    }
}

class Cat extends Animal {
    makesound() {
        console.log(`${this.name} cat is meowing!!!`)
    }
}

const dog = new Dog ("Pixen");
const cat = new Cat ("Jurj");

const animals = [dog, cat];
for (const animal of animals) {
    animal.makesound();
}