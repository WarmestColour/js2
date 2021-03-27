console.log("1. eilė kasoje...");

let n = window.prompt("Kiek prekių perka pirmas pirkėjas?");
console.log("Pirmas pirkėjas perka " + n + " vnt.");

let m = window.prompt("Kiek prekių perka antras pirkėjas?");
console.log("Antras pirkėjas perka " + m + " vnt.");

if (m > n) {
    alert("Ilgiau aptarnaujamas antrasis pirkėjas");
    console.log("antras");
} else if (n > m) {
    alert("Ilgiau aptarnaujamas pirmasis pirkėjas");
    console.log("pirmas");
} else {
    alert("Abu pirkėjai bus aptarnaujami tiek pat laiko");
    console.log("abu vienodai");
}


console.log("2. vyksta šachmatų turnyras...");

let n1 = window.prompt("Kiek taškų surinko Jonas?");
console.log("Jono surinkti taškai: " + n1);

let m1 = window.prompt("Kiek taškų surinko Povilas?")
console.log("Povilo surinkti taškai: " + m1);

if (m1 > n1) {
    alert("Turnyrą laimėjo Povilas");
    console.log("Laimėjo Povilas");
} else if (n1 > m1) {
    alert("Turnyrą laimėjo Jonas");
    console.log("Laimėjo Jonas");
} else {
    alert("Lygiosios");
    console.log("Lygiosios");
}
//NIEKAIP NESUPRANTU, KODĖL NE VISADA VEIKIA.

console.log("3. sveriamų saldainių situacija...");

let m2 = window.prompt("Kiek gramų saldainių perka Martynas?");
console.log("Martyno saldainiai sveria " + m2 + "g");

let k = window.prompt("Kiek gramų saldainių perka Karolis?");
console.log("Karolio saldainiai sveria " + k + "g");

if (m2 > k) {
    alert("Daugiau saldainių pirko Martynas");
    console.log("Martynas daugiau");
} else if (m2 < k) {
    alert("Daugiau saldainių pirko Karolis");
    console.log("Karolis daugiau");
} else {
    alert("Abu draugai pirko vienodai saldainių");
    console.log("Abu vienodai");
}

console.log("4. olimpinės dvasios beieškant...");

const pirmiMetai = 1896;
let kitiMetai = window.prompt("Kelintus metus turite galvoje?");

if (pirmiMetai % 4 == 0) {
    let kelintosZaidynes = ((kitiMetai - pirmiMetai) / 4);
    alert("Olimpinių žaidynių nr.: " + kelintosZaidynes);
    console.log(kelintosZaidynes);
} else {
    alert("Metai neolimpiniai");
    console.log("Neolimpiniai metai");
}
//Kažkas man čia nevisai taip, išmeta ir double :/

console.log("5. laiko peripetijos...");

let laikas = window.prompt("Kiek minučių liko iki pamokos pabaigos?");

if (laikas >= 30) {
    alert("Liko dar labai daug laiko");
    console.log("labai daug...");
} else if (laikas >= 15) {
    alert("Liko dar nemažai laiko");
    console.log("nemažai...");
} else if (laikas >= 7) {
    alert("Liko nedaug laiko");
    console.log("nebedaug...");
} else {
    alert("Pamoka baigiasi");
    console.log("pamoka baigiasi");
}

console.log("6. ta užduotis, kur reikia logikos...");

const keliamieji = 366;
const paprastieji = 365;
let metai = window.prompt("Įveskite metus");

if ((metai % 100 != 0 && metai % 4 == 0) || (metai % 100 == 0 && metai % 400 == 0)) {
    alert("Metai yra keliamieji");
    console.log("keliamieji");
} else if ((metai % 100 == 0 && metai % 400 != 0) || (metai % 100 != 0 && metai % 4 != 0)) {
    alert("Metai yra paprastieji");
    console.log("paprastieji");
} else {
    alert("Baikite vesti netikrus metus!");
    console.log("netikri metai");
}

console.log("7. šeši šeši šeši...");

let sum = 0;
let numeris = window.prompt("Įveskite šešiaženklį skaičių");
console.log("Bilieto numeris: " + numeris);

while (numeris) {
    sum += numeris % 10;
    numeris = Math.floor(numeris/10);
}

console.log("Skaitmenų suma: " + sum);

if (sum % 4 == 0){
    console.log("Bilietas yra laimingas");
    alert("Bilietas yra laimingas");
} else {
    console.log("Pirkite dar vieną mūsų bilietą ir tikrai laimėsite");
    alert("Pirkite dar vieną mūsų bilietą ir tikrai laimėsite");
}

console.log("8. knygos, Jonas, laikas, knygos...");

let visoKnygu = 10; 
let vidPsl = 200; 
let p1 = 20; 
let p2 = 30; 
let p3 = 30; 
let p4 = 20; 
let p5 = 20; 
let s = 11; 


if (((p1+p2+p3+p4+p5)*s) >= (visoKnygu*vidPsl)){
    console.log("Jonas knygas perskaityti spės");
} else {
    console.log("Jonas knygų perskaityti nespės");
}


console.log("9. dešimtukai ir nuliukai...");

let a1 = 1;
let a2 = 1;
let a3 = 1;

if ((a1 && a2 && a3) == 1) {
  console.log("Mokinys dešimtuką gaus");
} else {
  console.log("Mokinys dešimtuko negaus");
}

console.log("10. Jolantos pinigėliai...");

let kiekLitu = window.prompt("Sveiki, Jolanta. Kiek pinigų galite skirti kelionei?");

if (kiekLitu >= 4000){
    console.log("Jolantai geriausiai tiktų pirmos grupės kelionė");
    alert("Jolantai geriausiai tiktų pirmos grupės kelionė");
} else if (kiekLitu >= 3000) {
    console.log("Jolantai geriausiai tiktų antros grupės kelionė");
    alert("Jolantai geriausiai tiktų antros grupės kelionė");
} else if (kiekLitu >= 1000) {
    console.log("Jolantai geriausiai tiktų trečios grupės kelionė");
    alert("Jolantai geriausiai tiktų trečios grupės kelionė");
} else {
    console.log("Jolantai geriausiai tiktų ketvirtos grupės kelionė");
    alert("Jolantai geriausiai tiktų ketvirtos grupės kelionė");
}