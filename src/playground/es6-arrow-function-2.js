const add = (a, b) => {
    // arrow functions nao tem o objeto arguments
    // console.log(arguments); 
    return a + b;
}

const user = {
    name: 'Pedro',
    cities: ['Santos','Sao Paulo','Sao Vicente'],
    printPlacesLived() {
        return this.cities.map((city)=> this.name + ' has lived in ' + city)
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [4, 3, 8, 9, 12, 18, 20],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((n)=>n*this.multiplyBy)
    }
}

console.log(multiplier.multiply());