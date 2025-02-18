/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function firstLetterFilter(words, letters) {
    let wordsFiltrate = [];
    
    for (let i = 0; i < words.length; i++) {
        if(words[i].toLowerCase() === letters.toLoweCase()){
            wordsFiltrate.push(words[i]);
        }
        return wordsFiltrate;
    }

}
// Invoca la funzione qui e stampa il risultato in console
let firstLetter = 'A'

const filter = firstLetterFilter(names, firstLetter);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]