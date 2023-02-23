<?php
    //prendo il file json e lo trasformo in una stringa
    $taskListString = file_get_contents('db.json');
    //trasformo la stringa in un array associativo
    $taskList = json_decode($taskListString, true);

    //all'array aggiungo il nuovo elemento
    $taskList[] = [
        "taskName" => $_POST['newTask'],
        "done" => false,
    ];

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

