function rekniAhoj() {
    console.log("čus bus");
 
}
 
rekniAhoj();
rekniAhoj();
 
let pozdrav = "Pozdrav!";
 
function ukazPozdrav() {
    console.log(pozdrav)
}
 
function testLocal() {
    let localValue = 123;
    console.log(localValue)
}
 
ukazPozdrav();
testLocal();
 
 
// tady byla chyba
 
if (true) {
    var y = "var blok nerespektuje";
}
console.log(y);
   
//Parametr & Argument
 
function sayHello(name) { // name = parametr
     console.log("Ahoj" + name);
}
 
sayHello("Alice");

function scitani(num1, num2) {
    console.log(num1 + num2);
}

function odčítání(num1, num2) {
    console.log(num1 - num2);
}
 
function násobení(num1, num2) {
    console.log(num1 * num2);
} 

function dělení(num1, num2) {
    console.log(num1 / num2);
}

scitani (5,4);
odčítání (3,6);
násobení (6,5);
dělení (25,5);

console.log("nový úkol")

function pořadník(zacatek, konec) {
    for (let a = zacatek; a <= konec; a++) {
        console.log (a)
    }
}

pořadník (5,13)