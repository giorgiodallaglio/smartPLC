// Funzione per aggiornare il livello della cisterna "Rete"
function aggiornaLivelloRete() {
    fetch('http://localhost/livello_rete.txt')  // URL per il file di rete
        .then(response => {
            console.log("File livello Rete letto con successo");
            return response.text();
        })
        .then(data => {
            console.log("Dati ricevuti per Rete:", data);  // Log per controllo
            document.getElementById('rete-livello').innerText = "Livello attuale: " + data + " lt";
        })
        .catch(error => console.error('Errore nel caricamento livello Rete:', error));
}

// Funzione per aggiornare il livello della cisterna "Osmosi"
function aggiornaLivelloOsmosi() {
    fetch('http://localhost/livello_osmosi.txt')  // URL per il file di osmosi
        .then(response => {
            console.log("File livello Osmosi letto con successo");
            return response.text();
        })
        .then(data => {
            console.log("Dati ricevuti per Osmosi:", data);  // Log per controllo
            if (data.trim() === "N/A") {
                document.getElementById('osmosi-livello').innerText = "Livello attuale: N/A";
            } else {
                document.getElementById('osmosi-livello').innerText = "Livello attuale: " + data + " lt";
            }
        })
        .catch(error => console.error('Errore nel caricamento livello Osmosi:', error));
}

// Funzione per aggiornare il livello della cisterna "Addolcita"
function aggiornaLivelloAddolcita() {
    fetch('http://localhost/livello_addolcita.txt')  // URL per il file di addolcita
        .then(response => {
            console.log("File livello Addolcita letto con successo");
            return response.text();
        })
        .then(data => {
            console.log("Dati ricevuti per Addolcita:", data);  // Log per controllo
            if (data.trim() === "N/A") {
                document.getElementById('addolcita-livello').innerText = "Livello attuale: N/A";
            } else {
                document.getElementById('addolcita-livello').innerText = "Livello attuale: " + data + " lt";
            }
        })
        .catch(error => console.error('Errore nel caricamento livello Addolcita:', error));
}

// Funzione per aggiornare tutti i dati periodicamente
function aggiornaTuttiIDati() {
    aggiornaLivelloRete();
    aggiornaLivelloOsmosi();
    aggiornaLivelloAddolcita();
}

// Esegui l'aggiornamento ogni 5 secondi
setInterval(aggiornaTuttiIDati, 5000);  // Intervallo di 5 secondi
