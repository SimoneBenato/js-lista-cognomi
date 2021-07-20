// 1. chiedi all’utente il cognome
var cognome = prompt("inserisci il tuo cognome")
console.log(cognome)

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var indiziati = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
indiziati.push(cognome);
console.log(indiziati);

// 3. stampa la lista ordinata alfabeticamente
document.getElementById("babbei").innerHTML = (indiziati.sort());

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova