//variables 

var a; //declarando
var b = 10; // declaramos y asignamos
b = 22; //reasignando
var a = 'aa'; //redeclarando

//Global Scope
var fruit = 'Apple'; //global

function brestFruit() {
    console.log(fruit);
}

brestFruit();

//local Scope que puede llegar a ser global
function countries(){
    country = 'colombia';//global
    console.log(country);
}

countries();
console.log(country);