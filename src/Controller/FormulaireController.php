<?php

namespace App\Controller;

use Google_Service_Sheets;
use Google_Service_Sheets_ValueRange;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FormulaireController extends AbstractController
{
    #[Route('/merci', name: 'app_form_merci')]
    public function merci(Request $request): Response
    {

        $tokenForm = $request->query->get('token');
        if ($this->isCsrfTokenValid('app_pv', $tokenForm))
        {
            $val1 = $request->query->get('p1');
            $val2 = $request->query->get('p2');
            $val3 = $request->query->get('p3');
            $val4 = $request->query->get('p4');
            $val5 = $request->query->get('p5');

            require dirname(__DIR__).'/../vendor/autoload.php';

            $client = new \Google_Client();

            $client->setApplicationName('Google Sheets and PHP');

            $client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);

            $client->setAccessType('offline');

            $client->setAuthConfig(dirname(__DIR__).'/../Utils/credentials.json');

            $service = new Google_Service_Sheets($client);

            $spreadsheetId = "1vpJw3VXIAm6ZyWaa8cWuHG-LxGKuYSdHuCwF5h0PubU";
            // Trouver la première ligne vide dans la feuille de calcul
            $response = $service->spreadsheets_values->get($spreadsheetId, 'pv!A:E');
            $rows = $response->getValues();
            $next_row = count($rows) + 1;

            $update_range = "pv!A{$next_row}:E{$next_row}";

            $values = [[ $val1, $val2,$val3,$val4,$val5]];

            $body = new Google_Service_Sheets_ValueRange([

                'values' => $values

            ]);

            $params = [

                'valueInputOption' => 'RAW'

            ];
            $update_sheet = $service->spreadsheets_values->update($spreadsheetId, $update_range, $body, $params);

        }
        return $this->render('formulaire/merci.html.twig', [
            'controller_name' => 'FormulaireController',
        ]);
    }
}
