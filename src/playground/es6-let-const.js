var nameVar = 'Pedro';
//var nameVar = 'Mari';
console.log('nameVar: ' , nameVar);

let nameLet = 'Angela';
nameLet = 'Nyx';
console.log('nameLet',nameLet);

const nameConst = 'Mystra';
console.log('nameConst',nameConst);

// block scoping
/*
var fullName = 'Pedro Luiz';
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log('firstName',firstName);
}
console.log('firstName',firstName);
// funciona corretamente pois var não é block scoped

*/ 

let fullName = 'Pedro Luiz';
if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log('firstName',firstName);
}
// console.log('firstName',firstName);  
// vai retornar firstName is not defined, pois const e let são block scoped
