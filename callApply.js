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
// normalPerson.chargeBill(10000);
// normalPerson.chargeBill(20000);
// console.log(normalPerson.salary);

const heroPerson = {
    firsName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firsName: 'Hero',
    lastName: 'Gulam',
    salary: 15000
}

const heroParsonBill = normalPerson.chargeBill.bind(heroPerson);

// console.log('heroParsonCharge:',heroParsonBill(5000));
// console.log('heroParsonSalary:',heroPerson.salary);
// console.log('heroParsonCharge:',heroParsonBill(5000));
// console.log('heroParsonSalary:',heroPerson.salary);
// console.log('normalParson:',normalPerson.salary);

const friendlyPersonBill = normalPerson.chargeBill.bind(friendlyPerson);
 console.log(friendlyPersonBill(5000))