// 1. Dviejų draugų bagažas

let b, m1, m2, kb, s;
let n = 2;

m1 = 7; //pirmo draugo kuprinė
m2 = 5; //antro draugo kuprinė

b = 2; //mokestis už kg bagažo

function kiekUzBagaza(draugas1, draugas2, mokestis){
  return (draugas1 + draugas2) * mokestis;
}

kiekUzBagaza(m1, m2, b);

// 1a. Kiek kilogramų vidutiniškai turėjo kiekvienas stovyklautojas

function kiekUzBagaza2(draugas1, draugas2, mokestis){
  console.log("Mokestis: " + ((draugas1 + draugas2) * mokestis) + " kg;");
  console.log("Vidutiniškai kiekvienas turėjo po " + ((draugas1 + draugas2)/2) + " kg.");
}

// 1b. Kieno bagažo masė buvo ne didesnė už 10kg

function kiekUzBagaza2(draugas1, draugas2, mokestis){
  console.log("Mokestis: " + ((draugas1 + draugas2) * mokestis) + " kg;");
  console.log("Vidutiniškai kiekvienas turėjo po " + ((draugas1 + draugas2)/2) + " kg.");
  if ((draugas1 + draugas2 <= 20) && (draugas1 + draugas2 >= 10)){
    console.log("")
  }
}

// 1c. Kaina, vidurkis ir stovyklautojai su bagažu iki 10kg

function kainaVidurkisIki10(kiekDraugu, )
