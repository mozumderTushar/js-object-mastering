const normalPerson = {
    firstName: 'Abdur',
    lastName: 'Razzak',
    job: 'cricketer',
    salary: 50000,
    getFullName: function(){
        console.log(`I am ${this.firstName} ${this.lastName}. I am a ${this.job} & my salary is ${this.salary}`);
    },
    chargeBill(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// normalPerson.getFullName();
normalPerson.chargeBill(10000);
normalPerson.chargeBill(20000);
console.log(normalPerson.salary);