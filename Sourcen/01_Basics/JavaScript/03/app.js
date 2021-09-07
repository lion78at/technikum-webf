// concepts: class syntax, getter/setter, default parameter, filter/map/reduce

class Person {
    constructor(firstName, lastName, birthDate, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
    }

    get birthDate() {
        return this._birthDate;
    }

    set birthDate(birthDate) {
        if(birthDate && birthDate.getTime() < Date.now()) {
            this._birthDate = birthDate;
        }
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    getGreeting(greeting = "Hallo") {
        return `${greeting} ${this.firstName}!`;
    }
}

class Address {
    constructor(street, postCode, city, countryCode) {
        this.street = street;
        this.postCode = postCode;
        this.city = city;
        this.countryCode = countryCode;
    }
}

let person = new Person(
    'Markus',
    'Mustermann',
    new Date(1990, 0, 1),
    new Address('Wiener Straße 1', '2325', 'Wien', 'AT')
);
console.log(person.firstName);   // getter
person.lastName = 'Muster';   // setter
console.log(person.fullName);
console.log(person.getGreeting("Lieber"));
console.log(person.address.countryCode);

const persons = [
    person,
    new Person('Martina', 'Musterfrau', new Date(1991, 5, 1), new Address('Berliner Straße 1', '10715', 'Berlin', 'DE')),
    new Person('Maxi', 'Musterkind', new Date(2010, 11, 24), new Address('Linzer Straße 1', '4040', 'Linz', 'AT')),
];

// expected: "Markus Muster, Maxi Musterkind"
const fullNamesOfSortedPersonsFromAT = persons
    .filter(person => person.address.countryCode === "AT")
    .sort((person1, person2) => person1.lastName.localeCompare(person2.lastName))   // ASC
    .map(person => person.fullName)
    .join(", ");   // alternative: .reduce()
console.log(fullNamesOfSortedPersonsFromAT);