/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function firstLetterFilter(words, letters) {
    let wordFiltrate = [];
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].charAt(0).toLowerCase() === letters.toLowerCase()) {
        wordFiltrate.push(words[i]);
      }
    }
    
    return wordFiltrate;
  }

// Invoca la funzione qui e stampa il risultato in console
let firstLetter = 'A'

const filter = firstLetterFilter(names, firstLetter);
console.log(filter);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]