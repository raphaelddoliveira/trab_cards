import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa o CommonModule para usar *ngFor e *ngIf

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [CommonModule] // Adiciona o CommonModule aos imports
})
export class ProductComponent {
  products = [
    {
      id: 1,
      name: 'Chuteira Nike Air Zoom Mercurial Superfly 10 Elite SG "Electric Pack"',
      image: 'https://acdn.mitiendanube.com/stores/002/351/430/products/2f8721e6-10fac303570d40533a17298915097282-1024-1024.webp',
      descricao: 'Domine o campo com velocidade e precisão.'
    },
    {
      id: 2,
      name: 'Chuteira Adidas Predator Elite Tongue SG "Solar Energy"',
      image: 'https://acdn.mitiendanube.com/stores/002/351/430/products/0362c0a8-3be54fcd68b81f083b17298911985644-1024-1024.webp', 
      descricao: 'Domine o jogo com a Adidas Predator Elite Tongue SG.'
    },
    {
      id: 3,
      name: 'Chuteira Puma New Future Ultimate Fly FG "Njr"',
      image: 'https://acdn.mitiendanube.com/stores/002/351/430/products/1-59651cae1340c5ebca17298895100533-1024-1024.webp', 
      descricao: 'Deixe os defensores loucos no novíssimo PUMA FUTURE.'
    }
  ];

  constructor(private router: Router) {}

  viewDetails(productId: number) {
    this.router.navigate(['/descricao', productId]); // Navega para a página de detalhes do produto
  }
}
