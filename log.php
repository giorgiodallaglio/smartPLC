<?php
    if (isset($_POST['logData'])) {
        $logData = $_POST['logData'];
        $logFile = 'log.txt';

        // Aggiungi la data e ora ai dati di log
        $timestamp = date("Y-m-d H:i:s");
        $logData = $timestamp . " - " . $logData . "\n";

        // Salva i dati nel file log.txt
        file_put_contents($logFile, $logData, FILE_APPEND);
    }
?>
