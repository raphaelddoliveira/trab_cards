import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DescricaoComponent } from './descricao/descricao.component';

export const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'descricao/:id', component: DescricaoComponent }, // Rota para a página de descrição do produto
  { path: '**', redirectTo: '' }
];
