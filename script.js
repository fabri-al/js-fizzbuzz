//Introduzione
const replaceFizz = "Fizz"; //creo una variabile costante
const replaceBuzz = "Buzz"; //creo una variabile costante
const replaceFizzBuzz = "FizzBuzz"; //creo una variabile costante


//Svoglimento

// creo il ciclo for
for (let i = 1; i <= 100; i++) { //(dichiaro la variabile 'i' = 1; se 'i' è minore o uguale a 100; incrementa 'i')

    let container = i; //creo una variabile container a cui gli assegno la variabile 'i'

    //creo una condizione che verifica se, 'i' è divisibile sia per 3 che per 5
    if (i % 3 == 0 && i % 5 == 0) {
        
       container = replaceFizzBuzz; //assegno alla variabile 'container' una variabile
    }

    //altrimenti se è divisibile soltanto per 3
    else if (i % 3 == 0) {

        container = replaceFizz; //alla variabile 'container' viene assegnata un'altra variabile
    }

    //altrimenti se è divisibile soltanto per 5
    else if (i % 5 == 0) {

        container = replaceBuzz; //alla variabile 'container' viene assegnata un'altra variabile ancora
    }


    //Conclusione
    document.getElementById("ciclo").innerHTML += `<div>${container}</div>`; //viene stampata una stringa alla fine del ciclo

}


