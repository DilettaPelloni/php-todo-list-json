<?php
    //prendo il file json e lo trasformo in una stringa
    $taskListString = file_get_contents('db.json');
    //trasformo la stringa in un array associativo
    $taskList = json_decode($taskListString, true);

    //metto l'array in una risposta (anche lei è un array associativo)
    $response = [
        'success' => true,
        'message' => 'Ok',
        'code' => 200,
        'taskList' => $taskList
    ];

    //trasformo la risposta in un file json
    $jsonResponse = json_encode($response);

    //trasmetto la risposta specificando il formato json
    header('Content-Type: application/json');
    echo $jsonResponse; 

