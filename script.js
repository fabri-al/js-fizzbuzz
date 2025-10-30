//Introduzione
const replaceFizz = "Fizz"; //creo una variabile costante
const replaceBuzz = "Buzz"; //creo una variabile costante
const replaceFizzBuzz = "FizzBuzz"; //creo una variabile costante




//Svoglimento
// creo il ciclo for
for (i = 0; i <= 100; i++) { //(dichiaro la variabile 'i' = 0; se 'i' è minore o uguale a 100; incrementa 'i')

    document.getElementById("ciclo").innerHTML += `<div>${i}</div>`; //inserisco la variabile 'i' all'interno del div che 
    // ho creato nel file html e, ciclando, viene stampata
    //in pagina ogni volta con un numero, da 0 a 100


    //creo una condizione che verifica se, 'i' è divisibile sia per 3 che per 5
    if (i % 3 == 0 && i % 5 == 0) {

        document.getElementById("ciclo").innerHTML += `<div>${replaceFizzBuzz}</div>`; //se il numero è divisibile sia per 3 
        // che per 5, viene stampata una
        //determimnata stringa 
    }

    //altrimenti se è divisibile soltanto per 3
    else if (i % 3 == 0) {

        document.getElementById("ciclo").innerHTML += `<div>${replaceFizz}</div>`; //viene stampata un'altra stringa
    }

    //altrimenti se è divisibile soltanto per 5
    else if (i % 5 == 0) {
        
        document.getElementById("ciclo").innerHTML += `<div>${replaceBuzz}</div>`; //viene stampata un'altra stringa ancora
    }

}


//Conclusione
document.getElementById("ciclo").innerHTML += "<div>fine del ciclo</div>"; //viene stampata una stringa alla fine del ciclo