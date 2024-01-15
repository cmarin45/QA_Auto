class Person {
    firstName;
    lastName;
    age;

    constructor(firstName,lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    
    sayHello(){
        console.log('Hello '+this.firstName);
    }
}

class Programator extends Person {
    #programmingLanguage;

    constructor(firstName,lastName,age,programmingLanguage) {
        super(firstName,lastName,age);
        this.#programmingLanguage = programmingLanguage;
    }
    getProgrammingLanguage(){
        return this.#programmingLanguage;
    }

    setProgrammingLanguage(newProgrammingLanguage){
        this.#programmingLanguage = newProgrammingLanguage;
    }
}


const obiect1 = new Person("Cezar", "Marin", 35);
const obiect2 = new Person("Irina", "Marin", 33);
const p = new Programator("Vasile", "Ion", 40, 'javascript');
console.log(obiect1.age);
console.log(obiect2.lastName);
obiect1.sayHello();
obiect2.sayHello();
console.log(p.getProgrammingLanguage());
p.setProgrammingLanguage("Python");
console.log(p.getProgrammingLanguage());