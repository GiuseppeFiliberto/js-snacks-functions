/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function sayHi(name){

    let message;
    const now = new Date ();
    
    const thisHour = now.getHours();

    if (thisHour < 13){
        message = 'buon giorno';
        
    } else if(thisHour >= 13 && thisHour < 17) {

        message = 'buona pomeriggio'

    } else{
        message = 'buona sera'
    }

    return `${message} ${name}`;

}


// Invoca la funzione qui e stampa il risultato in console

const greethins = sayHi(name);
console.log(greethins);



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.