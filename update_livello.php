<?php
// Verifica se i dati dei livelli sono stati inviati tramite GET
if (isset($_GET['livello_rete']) || isset($_GET['livello_osmosi']) || isset($_GET['livello_addolcita'])) {
    
    // Recupera i dati dai parametri GET
    $livelloRete = isset($_GET['livello_rete']) ? $_GET['livello_rete'] : 'N/A';
    $livelloOsmosi = isset($_GET['livello_osmosi']) ? $_GET['livello_osmosi'] : 'N/A';
    $livelloAddolcita = isset($_GET['livello_addolcita']) ? $_GET['livello_addolcita'] : 'N/A';

    // Scrivi i valori in file separati per ogni cisterna
    file_put_contents('livello_rete.txt', $livelloRete);
    file_put_contents('livello_osmosi.txt', $livelloOsmosi);
    file_put_contents('livello_addolcita.txt', $livelloAddolcita);

    // Stampa un messaggio di successo per il debug
    echo "Livelli aggiornati con successo: ";
    echo "Rete: $livelloRete, Osmosi: $livelloOsmosi, Addolcita: $livelloAddolcita";
} else {
    // Se non sono stati ricevuti i dati, restituisci un errore
    echo "Errore: Dati dei livelli non ricevuti.";
}
?>
