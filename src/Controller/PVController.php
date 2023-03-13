<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PVController extends AbstractController
{
    #[Route('/', name: 'app_pv')]
    public function index(): Response
    {
        return $this->render('pv/index.html.twig', [
            'controller_name' => 'PVController',
        ]);
    }
}
