import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './view/home/home.component';
import { CarrosDisponiveisComponent } from './view/carros-disponiveis/carros-disponiveis.component';
import { MeuAluguelComponent } from './view/meu-aluguel/meu-aluguel.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'carrosDisponiveis',
        component: CarrosDisponiveisComponent
    },
    {
        path: 'meuAluguel',
        component: MeuAluguelComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    }
];
