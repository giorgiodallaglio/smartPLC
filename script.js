function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function logChange(message) {
    let logs = JSON.parse(localStorage.getItem('logs')) || [];
    logs.push(`${new Date().toLocaleString()} - ${message}`);
    localStorage.setItem('logs', JSON.stringify(logs));
}

function updateCisterne() {
    var reteLivello = randomNumber(0, 10000);
    var osmosiLivello = randomNumber(0, 10000);
    var addolcitaLivello = randomNumber(0, 10000);

    document.getElementById('rete-livello').textContent = "Livello attuale: " + reteLivello + " lt";
    document.getElementById('osmosi-livello').textContent = "Livello attuale: " + osmosiLivello + " lt";
    document.getElementById('addolcita-livello').textContent = "Livello attuale: " + addolcitaLivello + " lt";

    logChange(`Cisterna - Rete: ${reteLivello} lt, Osmosi: ${osmosiLivello} lt, Addolcita: ${addolcitaLivello} lt`);
}

function updateContatori() {
    var rete1 = randomNumber(1, 100);
    var rete2 = randomNumber(1, 100);
    var osmosi = randomNumber(1, 100);
    var addolcita = randomNumber(1, 100);
    var scartoAddolcita = randomNumber(1, 100);
    var acquaBar = randomNumber(1, 100);
    var acquaRistorante = randomNumber(1, 100);

    document.getElementById('rete1-contatore').textContent = rete1 + " m3";
    document.getElementById('rete2-contatore').textContent = rete2 + " m3";
    document.getElementById('osmosi-contatore').textContent = osmosi + " m3";
    document.getElementById('addolcita-contatore').textContent = addolcita + " m3";
    document.getElementById('scarto-addolcita-contatore').textContent = scartoAddolcita + " m3";
    document.getElementById('acqua-bar-contatore').textContent = acquaBar + " m3";
    document.getElementById('acqua-ristorante-contatore').textContent = acquaRistorante + " m3";

    logChange(`Contatori - Rete1: ${rete1} m3, Rete2: ${rete2} m3, Osmosi: ${osmosi} m3, Addolcita: ${addolcita} m3, Scarto Addolcita: ${scartoAddolcita} m3, Acqua Bar: ${acquaBar} m3, Acqua Ristorante: ${acquaRistorante} m3`);
}

function updateValvole() {
    var valvolaRete = randomNumber(0, 1) === 0 ? 'red' : 'green';
    var valvolaOsmosi = randomNumber(0, 1) === 0 ? 'red' : 'green';
    var valvolaAddolcita = randomNumber(0, 1) === 0 ? 'red' : 'green';
    var valvolaScartoAddolcita = randomNumber(0, 1) === 0 ? 'red' : 'green';

    document.getElementById('valvola-rete').className = "led " + valvolaRete;
    document.getElementById('valvola-osmosi').className = "led " + valvolaOsmosi;
    document.getElementById('valvola-addolcita').className = "led " + valvolaAddolcita;
    document.getElementById('valvola-scarto-addolcita').className = "led " + valvolaScartoAddolcita;

    logChange(`Elettrovalvole - Rete: ${valvolaRete}, Osmosi: ${valvolaOsmosi}, Addolcita: ${valvolaAddolcita}, Scarto Addolcita: ${valvolaScartoAddolcita}`);
}

function updatePressioni() {
    var retePressione = randomNumber(20, 40);
    var osmosiPressione = randomNumber(10, 30);
    var addolcitaPressione = randomNumber(10, 30);

    document.getElementById('rete-pressione').textContent = retePressione + " lt/m";
    document.getElementById('osmosi-pressione').textContent = osmosiPressione + " lt/m";
    document.getElementById('addolcita-pressione').textContent = addolcitaPressione + " lt/m";

    logChange(`Pressioni - Rete: ${retePressione} lt/m, Osmosi: ${osmosiPressione} lt/m, Addolcita: ${addolcitaPressione} lt/m`);
}

setInterval(function() {
    updateCisterne();
    updateContatori();
    updateValvole();
    updatePressioni();
}, 2000);
