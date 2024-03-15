import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  pizzas = [
    {
      name: 'Pizza Margherita',
      image: '/assets/pizzaria.png',
      description: 'Molho de tomate, queijo mussarela, manjericão fresco.',
      price: 25.00
    },
    {
      name: 'Pizza Pepperoni',
      image: '/assets/pizzaria.png',
      description: 'Molho de tomate, queijo mussarela, pepperoni fatiado.',
      price: 30.00
    },
    // Adicione mais pizzas conforme necessário
  ];
}
