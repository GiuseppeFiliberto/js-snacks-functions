/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function sayHi(name){
    const hi = `ciao ${name}`
    return hi
}

// Invoca la funzione qui e stampa il risultato in console

const saluto = sayHi(userName);
console.log(saluto);

//Risultato atteso se si passa 'Mario': // ciao Mario
