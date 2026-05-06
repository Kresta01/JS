alert("funguje")

function dejmi3() {
    return 3;
}

console.log(dejmi3())

// funkce s logem                           
function nasobic(a,b) {
    console.log(5*3)
}

nasobic(5,3);

let r = nasobic(5,3)
console.log(r)

// console.log hodnotu jen vypíše a nelze s ní dál pracovat

// funkce s return
function nasobic2(a,b) {
    return(a*b);
}

let r2 = nasobic2(5,3)
console.log(r2)

// return hodnotu navrátí a lze s ní dál pracovat

// return ukončí funkci

function konec() {
    console.log("A")
    return "Hotovo"
    console.log("B") // toto neprojde
}

let konec2 = konec();
console.log(konec())

// 1) Vytvoř funkci jeSude
// 2) Podmínka jestli je sude vypiš boolean true
// 3) Jestli je liché vypiš boolean false
// Návratová hodnota vrací výsledek

// jeSude(20) --> true
// jeSude(7) ---> fals

// Nápověda: 
// % = vrací zbytek po dělení
// === porovnávání čísel bez převodů JS past

function jeSude(cislo) {
    return cislo % 2 === 0;
}

console.log(jeSude(20))
console.log(jeSude(7))