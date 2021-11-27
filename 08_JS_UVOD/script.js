console.log("Pozdrav iz js datoteke");

//aritmetika

//let x = 3;
//console.log(x); //ovo je greska jer je vec x deklarisan u index.html
//js datoteka nije nezavisna, obuhvata i iz index i script.js zapise

let a = 3, b = 6; // u jednoj liniji koda zarezom odvojene dve let vrednosti
console.log(a * b);
console.log("Pera" + " Antic"); //jedino plus se prilagodjava tipu podataka
console.log("Pera" * " Antic"); //NuN

b = b / a;
console.log(a, b); // a ostaje isto, b se promenilo = 2
a = b * a + a;
console.log(a, b); // a = 8, b = 2
b = (a - 2 * b) / b; // (9 - 2 *2)/ 2 = (9 -4)/ 2 = 5/2 =2.5
console.log(a, b);


//menjanje vrednosti

//a = a + 10; // 9 + 10 = 19
a += 10; // skracen zapis, a se uvecava za tu vrednost
console.log(a); // = 19
b /= a // a ovo za deljenje: b = b / a
console.log(b);

//a = a + 1;
//a += 1;
a++; // sva 3 isto uvecavaju za 1
console.log(a);

++a; //nije greska, uvecava za 1
//a + 1 = a ne moze da se pise, greska
console.log(a);

let c = 5;
console.log(c++);

