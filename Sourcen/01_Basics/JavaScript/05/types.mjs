export default class Person {
    constructor(firstName, lastName, birthDate, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
    }
}

export class Address {
    constructor(street, postCode, city, countryCode) {
        this.street = street;
        this.postCode = postCode;
        this.city = city;
        this.countryCode = countryCode;
    }
}

export function logPerson(person) {
    console.log(
        JSON.stringify(person, null, 2)
    );
}

export const VIP = new Person("John Q.", "Public", new Date(1991, 11, 1), new Address("York Street 1", "10013", "NYC", "US"));