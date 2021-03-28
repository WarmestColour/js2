console.log("1. Andrius, the kačių kankintojas");

let minPerDiena = [15,12,13,20];
let nDienu = minPerDiena.length;
let visoMin = 0;

for (let i = 0; i < nDienu; i++){
    visoMin += minPerDiena[i];
}

console.log("Per " + nDienu + " dienas Zinas buvo dresuojamas " + visoMin + " minučių. Vidutiniškai per dieną katinas buvo dresuojamas " + (visoMin/nDienu) + " minučių.");

console.log("2. braškių sezonas");

let pirmaDiena = 4;
let d = 5;
let visoDienu = 3;
let visoBraskiu = 0;

for (let j = 0; j < visoDienu; j++){
    visoBraskiu += (pirmaDiena + d);
}

console.log("Per " + visoDienu + " dienas prinoko " + visoBraskiu + " braškės." );

console.log("3. galutinė kaina");

let pradineKaina = 100;
let d2 = [5, 7, 5, 5];
let visoDalyviu = d2.length;
let kg = 0;

for (let k = 0; k < visoDalyviu; k++){
    kg += d2[k];
}

console.log("Galutinė prekės kaina bus " + (kg + pradineKaina) + " litai.");

console.log("4. dar niekada nesutikau tokio tobulo skaičiaus, mielasis");

const skaicius = prompt("Įveskite skaičių.");
let skaitmenys = [];

let daliklis = 0;

for (l = 0; l < skaicius; l++){
    if (skaicius % l == 0){
        skaitmenys[daliklis++] = l;
    }
}

console.log("Dalikliai: " + skaitmenys);

let suma = 0;

for (let m = 0; m < skaitmenys.length; m++){
    if (typeof skaitmenys !== undefined) {
        suma += skaitmenys[m];
    }
}

if (suma == skaicius){
    console.log("Skaičius tobulas");
} else {
    console.log("Skaičiui reikėtų labiau pasistengti");
}


console.log("5. šito tai jau grynai neišspręsiu");

