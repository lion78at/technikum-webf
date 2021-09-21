import PersonWithAddress, { Address, logPerson as log, VIP } from "./types.mjs";

const persons = [
    new PersonWithAddress('Markus', 'Mustermann', new Date(1990, 0, 1), new Address('Wiener Straße 1', '2325', 'Wien', 'AT')),
    new PersonWithAddress('Martina', 'Musterfrau', new Date(1991, 5, 1), new Address('Berliner Straße 1', '10715', 'Berlin', 'DE')),
    new PersonWithAddress('Maxi', 'Musterkind', new Date(2010, 11, 24), new Address('Linzer Straße 1', '4040', 'Linz', 'AT')),
];

persons.forEach(log);

log(VIP);