import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa o CommonModule para usar *ngIf

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css'],
  standalone: true,
  imports: [CommonModule] // Adiciona o CommonModule aos imports
})
export class DescricaoComponent {
  product: any;

  products = [
    {
      id: 1,
      name: 'Chuteira Nike Air Zoom Mercurial Superfly 10 Elite SG "Electric Pack"',
      image: 'https://acdn.mitiendanube.com/stores/002/351/430/products/2f8721e6-10fac303570d40533a17298915097282-1024-1024.webp',
      descricao: 'Com o design arrojado do Superfly 10 Elite, você inclina o jogo a seu favor. Equipado com a inovadora unidade Zoom Air de 3/4 de comprimento, feita exclusivamente para futebol, proporciona amortecimento responsivo até nos terrenos mais difíceis. A textura aderente na parte superior oferece controle de bola excepcional, garantindo que você seja decisivo nos momentos que importam. Leve e rente ao chão, cada passo faz você flutuar pela grama enquanto muda de zona com agilidade.',
      price: 'R$529,90',
      availability: 'Em estoque'
    },
    {
      id: 2,
      name: 'Chuteira Adidas Predator Elite',
      image: 'https://acdn.mitiendanube.com/stores/002/351/430/products/0362c0a8-3be54fcd68b81f083b17298911985644-1024-1024.webp', 
      descricao: 'Uma chuteira projetada para controle total e performance de elite em campos de gramado natural e molhado. Com travas SG (Soft Ground) para máxima aderência, essa chuteira proporciona estabilidade em terrenos desafiadores, enquanto o cabedal texturizado permite um toque preciso para passes e chutes com controle superior. O design "tongue" clássico, aliado à tecnologia avançada Predator, oferece conforto e ajuste perfeito ao pé. Eleve seu jogo com a Predator Elite Tongue SG, a chuteira feita para quem quer marcar presença e ditar o ritmo em qualquer condição de campo.',
      price: 'R$524,90',
      availability: 'Em estoque'
    },
    {
      id: 3,
      name: 'Chuteira Puma New Future Ultimate Fly FG "Njr"',
      image: 'https://acdn.mitiendanube.com/stores/002/351/430/products/1-59651cae1340c5ebca17298895100533-1024-1024.webp', 
      descricao: 'Desenvolvido especialmente para os jogadores mais dinâmicos do planeta. Cabedal FUZIONFIT360 completamente redesenhado com tecnologia PWRTAPE atraente, que ajuda a criar um ajuste único e bloqueio seguro mesmo em alta velocidade. Textura 3D revolucionária incorporada em zonas estrategicamente posicionadas que fornecem controle máximo e melhor aderência',
      price: 'R$509,90',
      availability: 'Em estoque'
    }
  ];

  constructor(private route: ActivatedRoute) {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find((p) => p.id === productId);
  }
}
