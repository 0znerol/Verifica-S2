/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("ES.1");
console.log("--------------------------------------");
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
console.log("--------------------------------------");
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ES.2");
console.log("--------------------------------------");
pets.sort();
console.log(pets);
console.log("--------------------------------------");
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("ES.3");
console.log("--------------------------------------");
pets.reverse();
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
console.log("--------------------------------------");
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ES.4");
console.log("--------------------------------------");
// let firstElement = ;
pets.push(pets.shift());
console.log(pets);

console.log("--------------------------------------");

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("ES.5");
console.log("--------------------------------------");
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "aa1234ff";
}

console.log(cars);
console.log("--------------------------------------");

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("ES.6");
console.log("--------------------------------------");
let newObj = {
  brand: "brand",
  model: "model",
  color: "color",
  trims: ["life", "style", "r-line"],
  licensePlate: "ab1234ff",
};
cars.push(newObj);
let trim = [];
for (let i = 0; i < cars.length; i++) {
  trim.push(cars[i].trims);
  delete cars[i].trims;
}

console.log(cars);
console.log("--------------------------------------");

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("ES.7");
console.log("--------------------------------------");
let justTrims = [];
for (let i = 0; i < trim.length; i++) {
  justTrims.push(trim[i][0]);
}
console.log(justTrims);
console.log("--------------------------------------");

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("ES.8");
console.log("--------------------------------------");
for (let i = 0; i < cars.length; i++) {
  let selectedCarColor = cars[i].color;
  if (selectedCarColor.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
console.log("--------------------------------------");

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("ES.9");
console.log("--------------------------------------");
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i = 0;
let x;
while (x !== 32) {
  console.log(numericArray[i]);
  x = numericArray[i];
  i++;
}
console.log("--------------------------------------");

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("ES.10");
console.log("--------------------------------------");
let newArr = [];
const charactersArray = ["g", "n", "u", "z", "d"];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a": {
      newArr.push(1);
      break;
    }
    case "b": {
      newArr.push(2);
      break;
    }
    case "c": {
      newArr.push(3);
      break;
    }
    case "d": {
      newArr.push(4);
      break;
    }
    case "e": {
      newArr.push(5);
      break;
    }
    case "f": {
      newArr.push(6);
      break;
    }
    case "g": {
      newArr.push(7);
      break;
    }
    case "h": {
      newArr.push(8);
      break;
    }
    case "i": {
      newArr.push(9);
      break;
    }
    case "j": {
      newArr.push(10);
      break;
    }
    case "k": {
      newArr.push(11);
      break;
    }
    case "l": {
      newArr.push(12);
      break;
    }
    case "m": {
      newArr.push(13);
      break;
    }
    case "n": {
      newArr.push(14);
      break;
    }
    case "o": {
      newArr.push(15);
      break;
    }
    case "p": {
      newArr.push(16);
      break;
    }
    case "q": {
      newArr.push(17);
      break;
    }
    case "r": {
      newArr.push(18);
      break;
    }
    case "s": {
      newArr.push(19);
      break;
    }
    case "t": {
      newArr.push(20);
      break;
    }
    case "u": {
      newArr.push(21);
      break;
    }
    case "v": {
      newArr.push(22);
      break;
    }
    case "w": {
      newArr.push(23);
      break;
    }
    case "x": {
      newArr.push(24);
      break;
    }
    case "y": {
      newArr.push(25);
      break;
    }
    case "z": {
      newArr.push(26);
      break;
    }
  }
}
console.log(newArr);
console.log("--------------------------------------");
