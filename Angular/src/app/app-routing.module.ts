import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './home/home.component';
import { MapaPostoComponent } from './mapa/mapa-posto/mapa-posto.component';
import { MapaVoluntarioComponent } from './mapa/mapa-voluntario/mapa-voluntario.component';
import { VacinadoComponent } from './vacinado/vacinado.component';
import { VoluntarioInserirComponent } from './voluntario/voluntario-inserir/voluntario-inserir.component';
import { VoluntarioListaComponent } from './voluntario/voluntario-lista/voluntario-lista.component';

const routes: Routes = [
  {path:'', component: CabecalhoComponent, children:[
    {path: '', component: HomeComponent },
    {path: 'voluntario', component: VoluntarioListaComponent},
    {path: 'voluntario/cadastro-voluntario', component: VoluntarioInserirComponent},
    {path: 'mapa-voluntario', component: MapaVoluntarioComponent},
    {path: 'mapa-posto', component: MapaPostoComponent},
    {path: 'campanha', component: VacinadoComponent}    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
