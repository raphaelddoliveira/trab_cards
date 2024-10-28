import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`, // O router-outlet para navegação
  standalone: true,
  imports: [RouterModule] // Importa o RouterModule
})
export class AppComponent {}
