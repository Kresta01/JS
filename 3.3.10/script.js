let myString = "Hello World";
let myBadString = "    Hello World!  "

console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.charAt(1)); //1 se bere jako 2. znak, zatímco 0 jako první - počítame od nuly
console.log(myString.indexOf("e"));
console.log(myString.replace("H","P"));
console.log(myString.replace("Hello World","Palworld")); // nebo . replace All
console.log(myString.replaceAll("Hello World","Palworld"));

console.log(myBadString);
console.log(myBadString.trim()); // odstranění mezer před a za textovým řetězcem