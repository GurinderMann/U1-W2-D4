/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
 
*/


/* SCRIVI QUI LA TUA RISPOSTA */


function area(l1,l2){
    let result = l1*l2
    console.log(result)
    

}
area(5,10)
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (n1,n2){
    if(n1===n2){
     sum = (n1+n2)*3
         }
    else{
     sum = n1+n2
    }

    console.log(sum)
}

crazySum(10,10)
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff (n1,n2){
    
    if (n1 > n2){
        diff= Math.abs(n1-n2)*3}
    
    else{
        diff=  Math.abs (n1-n2)
    }
    
    console.log(diff)


}

crazyDiff(40,19)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary (n1){
    if(n1>=20 && n1<= 100 || n1 !== 400){
        console.log (true)
    }

    else{
        console.log(false)
    }
}

boundary(400)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string){
    if (string.startsWith ("EPICODE")){
        return string
    }
    else{
        return "EPICODE"+ string
    }
}
console.log(epify("Hello"))


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function check3and7 (n1){
    if (n1 % 3 === 0|| n1 % 7 === 0){
        console.log("è moltiplicabile con 3 o 7")
    }
    else{
        console.log("non è moltiplicabile con 3 o 7")
    }
}
check3and7(49)
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str){
    let splitString = str.split("")
    let reverseArray = splitString.reverse()
    let joinAarray = reverseArray.join ("")
    return joinAarray
}
console.log(reverseString("ciao"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst (str){
    let words = str.split("")
    for (let i = 0; i < words.length;i++ ){
        let words= words[i]
        let uppercaseWord = words.charAt(0).toUpperCase() + words.slice(1);
        words[i]= uppercaseWord
    }
    let result = words.join("")

    return result
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str){
     str = str.slice(1, -1)
}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n1){

     n1 = Math.floor(Math.random()*10)
 
    return  n1

}
console.log(giveMeRandom())