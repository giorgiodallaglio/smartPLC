// Funzione per generare un numero casuale tra due valori
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per registrare i cambiamenti
function logChange(cisternaRete, cisternaOsmosi, cisternaAddolcita, valvolaRete, valvolaOsmosi, valvolaAddolcita) {
    let logs = JSON.parse(localStorage.getItem('logs')) || [];
    
    const newLog = {
        data_ora: new Date().toLocaleString(),
        cisterna_rete: cisternaRete,
        cisterna_osmosi: cisternaOsmosi,
        cisterna_addolcita: cisternaAddolcita,
        valvola_rete: valvolaRete,
        valvola_osmosi: valvolaOsmosi,
        valvola_addolcita: valvolaAddolcita
    };

    logs.push(newLog);
    localStorage.setItem('logs', JSON.stringify(logs));
}

// Funzione per aggiornare i livelli delle cisterne
function updateCisterne() {
    var reteLivello = randomNumber(0, 10000);
    var osmosiLivello = randomNumber(0, 10000);
    var addolcitaLivello = randomNumber(0, 10000);

    document.getElementById('rete-livello').textContent = "Livello attuale: " + reteLivello + " lt";
    document.getElementById('osmosi-livello').textContent = "Livello attuale: " + osmosiLivello + " lt";
    document.getElementById('addolcita-livello').textContent = "Livello attuale: " + addolcitaLivello + " lt";

    logChange(reteLivello, osmosiLivello, addolcitaLivello, undefined, undefined, undefined);
}

// Funzione per aggiornare le elettrovalvole
function updateValvole() {
    var valvolaRete = randomNumber(0, 1) === 0 ? 'red' : 'green';
    var valvolaOsmosi = randomNumber(0, 1) === 0 ? 'red' : 'green';
    var valvolaAddolcita = randomNumber(0, 1) === 0 ? 'red' : 'green';

    document.getElementById('valvola-rete').className = "led " + valvolaRete;
    document.getElementById('valvola-osmosi').className = "led " + valvolaOsmosi;
    document.getElementById('valvola-addolcita').className = "led " + valvolaAddolcita;

    logChange(undefined, undefined, undefined, valvolaRete, valvolaOsmosi, valvolaAddolcita);
}

// Funzione per cancellare tutti i log
function clearLogs() {
    localStorage.removeItem('logs');
    loadLogs(); // Ricarica i log dopo averli cancellati
}

// Funzione per esportare i log in formato CSV
function exportToCSV() {
    let logs = JSON.parse(localStorage.getItem('logs')) || [];
    let csvContent = "data_ora,cisterna_rete,cisterna_osmosi,cisterna_addolcita,valvola_rete,valvola_osmosi,valvola_addolcita\n";

    logs.forEach(log => {
        csvContent += `${log.data_ora},${log.cisterna_rete || ''},${log.cisterna_osmosi || ''},${log.cisterna_addolcita || ''},${log.valvola_rete || ''},${log.valvola_osmosi || ''},${log.valvola_addolcita || ''}\n`;
    });

    let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    let link = document.createElement('a');
    let url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'log_report.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Funzione per caricare i log salvati dal localStorage
function loadLogs() {
    let logs = JSON.parse(localStorage.getItem('logs')) || [];
    displayLogs(logs);
}

// Funzione per visualizzare i log
function displayLogs(logs) {
    const logContainer = document.getElementById('log-container');
    logContainer.innerHTML = ''; // Pulisce l'area log

    logs.forEach(log => {
        const logEntry = document.createElement('p');
        logEntry.textContent = `Data/Ora: ${log.data_ora}, Cisterna Rete: ${log.cisterna_rete || 'N/A'}, Cisterna Osmosi: ${log.cisterna_osmosi || 'N/A'}, Cisterna Addolcita: ${log.cisterna_addolcita || 'N/A'}, Valvola Rete: ${log.valvola_rete || 'N/A'}, Valvola Osmosi: ${log.valvola_osmosi || 'N/A'}, Valvola Addolcita: ${log.valvola_addolcita || 'N/A'}`;
        logContainer.appendChild(logEntry);
    });
}

// Funzione di ricerca nei log
function searchLogs() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    let logs = JSON.parse(localStorage.getItem('logs')) || [];
    
    // Filtra i log in base alla keyword cercata
    const filteredLogs = logs.filter(log => {
        return Object.values(log).some(value => value && value.toString().toLowerCase().includes(searchInput));
    });
    
    displayLogs(filteredLogs); // Visualizza solo i log filtrati
}

// Esegui l'aggiornamento periodico
setInterval(function() {
    updateCisterne();
    updateValvole();
}, 2000);

// Carica i log quando la pagina viene caricata
window.onload = loadLogs;
