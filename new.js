class Person{
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero','balam',20000);
console.log(heroPerson);

const friendlyPerson = new Person('Hero','Kalam',25000);
console.log(friendlyPerson);