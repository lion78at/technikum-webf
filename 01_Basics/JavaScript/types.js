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

export function showPerson(person) {
    alert(
        JSON.stringify(person, null, 2)
    );
}

export const vip = new Person("John Q.", "Public", new Date(1991, 1, 1), new Address("York Street 1", "10013", "New York City", "US"));