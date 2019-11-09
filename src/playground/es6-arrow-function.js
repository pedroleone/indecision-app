/*const square = function(x) {
    return x*x;
}

console.log(square(3));


// const squareArrow = (x) => { return x*x }

const squareArrow = (x) => x * x;

console.log(squareArrow(3));

*/
// shorthand syntax - o return é implicito
const getFirstName = (n) => n.split(' ')[0];
console.log(getFirstName('Pedro Luiz'));

// regular syntax - contem return
const getFirstNameLong = (n) => {
    return n.split(' ')[0]
};
console.log(getFirstNameLong('Pedro Luiz'));