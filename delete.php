<?php
    //prendo il file json e lo trasformo in una stringa
    $taskListString = file_get_contents('db.json');
    //trasformo la stringa in un array associativo
    $taskList = json_decode($taskListString, true);

    //trasformo index in numero
    $index = intval($_POST['index']);
    //rimuovo dall'array l'elemento con indice $index
    unset($taskList[$index]);
    //riordino gli indici dell'array
    $taskList = array_values($taskList);

    //trasformo l'array in una stringa
    $newTaskList = json_encode($taskList);

    //sovrascrivo il file db con la nuova lista
    file_put_contents('db.json', $newTaskList);

    //trasmetto una risposta di buon esito specificando il formato json
    $response = [
        'success' => true,
        'message' => 'Ok',
        'code' => 200,
    ];

    header('Content-Type: application/json');
    echo json_encode($response);