class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`${this.name} is meowing.`);
  }
}

const dog = new Dog("Bulldog");
const cat = new Cat("Jurj");

dog.eat();
cat.eat();

dog.bark();
cat.meow();