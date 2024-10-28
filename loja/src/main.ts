import { bootstrapApplication } from '@angular/platform-browser'; // Importa corretamente uma única vez
import { AppComponent } from './app/app.component'; // Importa o componente principal
import { provideRouter } from '@angular/router'; // Importa provider para roteamento
import { routes } from './app/app.routes'; // Importa as rotas

// Inicializa a aplicação com o AppComponent e as rotas
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
  .catch(err => console.error(err));
