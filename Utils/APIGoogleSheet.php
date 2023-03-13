<?php

require __DIR__.'../../vendor/autoload.php';

$client = new \Google_Client();

$client->setApplicationName('Google Sheets and PHP');

$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);

$client->setAccessType('offline');

$client->setAuthConfig(__DIR__.'../../credentials.json');

$service = new Google_Service_Sheets($client);

$spreadsheetId = "1vpJw3VXIAm6ZyWaa8cWuHG-LxGKuYSdHuCwF5h0PubU";

$update_range = "leadpv_symfony!A2:E2";

$values = [[ ]];

$body = new Google_Service_Sheets_ValueRange([

    'values' => $values

]);

$params = [

    'valueInputOption' => 'RAW'

];

$update_sheet = $service->spreadsheets_values->update($spreadsheetId, $update_range, $body, $params);