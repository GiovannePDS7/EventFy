import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { FooterComponent } from './footer/footer.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'quemsomos', component: QuemSomosComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'integrantes', component: IntegrantesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
