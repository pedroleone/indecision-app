class Person {
    
    constructor (name='Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} ${this.age == 1 ? 'year' : 'years'} old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting () {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Pedro Luiz', 34, 'Computer Science');
console.log(me.getDescription());
const other = new Student();
console.log(other.getDescription());
const visitor = new Traveler('Pedro Luiz', 34, 'Santos');
console.log(visitor.getGreeting());


