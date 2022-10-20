// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

const distance = parseFloat (prompt("Benvenuto su TrainTicket, inserire la distanza da percorrere in km."));
let prince = parseFloat (distance * 0.21).toFixed(2);
console.log ("Il prezzo del biglietto è:", prince ,"€");
const age = parseInt (prompt("Inserire l'età."));
if (age < 18) {
    let newprince = parseFloat (prince * 0.80).toFixed(2);
    console.log("I passegeri under 18 hanno diritto a uno sconto del 20%. Il prezzo del biglietto è:", newprince,"€");
}

else if (age>65){
    let newprince = (prince * .60);
    console.log("I passeggeri over 65 hanno diritto ad uno sconto del 40%. Il prezzo del biglietto è:", newprince,"€");
}

else{
    console.log("Tariffa standard. Non è applicato alcuno sconto.")
}