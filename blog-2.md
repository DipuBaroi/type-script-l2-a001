// Title: OOP pillars in TypeScript for large-scale Applications

// Introduction: Object-oriented Programming (oop) helps manage complexity in large applications. TypeScript support all four oop pillars: Encapsulation, Abstruction, Inheritance and pilymorphism.

// Body

// Encapsulation: Hides internal data and protects it.

```ts
class BankAccount {
    private balance: number = 0;
    deposit(amount:number){
        this.balace += amount;
    }
}

// Abstraction: Shows only essential details.

</> TypeScript 

abstract class shape{
    abstract area(): number;
}

// Inheritance: Reuse exixting code.

</> TypeScript

class Animal {
    move(){
        clg('Moving')
    }
}

class Dog extends Animal{}

// polymorphism: same method, different behavior.

</> TypeScript

class Cat {
    speak(){
        clg('Meow')
    }
}

class Dog {
    speak(){
        clg('Ghew')
    }
}

// Conclusion: Oop principles help structure large TypeScript applications. They improve readablity, reusablity and maintainablity making code easier to scale.