import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './view/home/home.component';
import { CarrosDisponiveisComponent } from './view/carros-disponiveis/carros-disponiveis.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'carrosDisponiveis',
        component: CarrosDisponiveisComponent
    }
];
