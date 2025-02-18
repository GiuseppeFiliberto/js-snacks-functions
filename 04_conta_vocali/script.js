/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowelsCounter(str) {

    const vowels =['a','e','i','o','u'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
       const thisChar = str[i];
       if (vowels.includes(thisChar)){
        count++
       }
       return count;
}

}

// Invoca la funzione qui e stampa il risultato in console

const checkVowels = vowelsCounter(word);
console.log(checkVowels);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)