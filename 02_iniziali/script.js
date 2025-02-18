/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function takeFirstLetter(name) {
    let takeFirstLetterArray = [];
    
    for (let i = 0; i < name.length; i++) {
      takeFirstLetterArray.push(name[i].charAt(0).toUpperCase());
    }
    return takeFirstLetterArray;
  }

// Invoca la funzione qui e stampa il risultato in console

const firstLetter = takeFirstLetter(names);
console.log(firstLetter);




//Risultato atteso: ["A", "L", "M", "A", "G", "A"]