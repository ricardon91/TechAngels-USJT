import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MapaComponent } from './mapa/mapa.component';
import { VacinadoComponent } from './vacinado/vacinado.component';
import { VoluntarioInserirComponent } from './voluntario/voluntario-inserir/voluntario-inserir.component';
import { VoluntarioListaComponent } from './voluntario/voluntario-lista/voluntario-lista.component';

const routes: Routes = [
  {path:'', component: CabecalhoComponent, children:[
    {path: 'voluntario', component: VoluntarioListaComponent},
    {path: 'voluntario/cadastro-voluntario', component: VoluntarioInserirComponent},
    {path: 'mapa', component: MapaComponent},
    {path: 'campanha', component: VacinadoComponent}    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
