// Funzione che viene eseguita quando si clicca sul pulsante calcola.
function calcola() {
    // numero1 e numero2 sono i valori inseriti nei campi di input. 
    // Usando parseFloat, li convertiamo in numeri decimali.
    // operazione è l'operazione selezionata dal menu a tendina.
    let numero1= parseFloat(document.getElementById('numero1').value);
    let numero2= parseFloat(document.getElementById('numero2').value);
    let operazione = document.getElementById('operazione').value;
    let risultato;

    // Usiamo isNaN per controllare se i valori inseriti non sono numeri (NaN significa "Not a Number").
    // Se uno dei due valori non è un numero, impostiamo risultato su un messaggio di errore.
    if(isNaN(numero1) || isNaN(numero2)) {
        risultato = "Per favore inserisci i numeri validi.";
    }else {
        // Usiamo una struttura di controllo switch per determinare quale operazione è stata selezionata e calcolare il risultato corrispondente
        switch(operazione) {
            case "somma":
                risultato = numero1 + numero2;
                break;
            case "sottrazione":
                risultato = numero1 - numero2;
                break;
            case "moltiplicazione":
                risultato = numero1 * numero2;
                break;
            case "divisione":
                if(numero2 === 0) {
                    risultato = "Impossibile dividere per zero."
                }else {
                    risultato = numero1 / numero2;
                }
                break;
                default:
                    risultato = "operazione non valida."                
        }
    }

    // Visualizziamo il risultato nel paragrafo con id risultato, modificandone il testo
    document.getElementById('risultato').innerText = 'Risultato: ' + risultato
}