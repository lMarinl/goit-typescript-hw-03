class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.tenants = [];
        this.key = key;
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
            console.log("Person came in.");
        }
        else {
            console.log("The door is closed. Cannot come in.");
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Door opened.");
        }
        else {
            console.log("Invalid key. Door remains closed.");
        }
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
export {};
//# sourceMappingURL=4.js.map