import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { HistoriqueComponent } from './historique/historique.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { ProducteurListComponent } from './producteur-list/producteur-list.component';
import { ProfilComponent } from './profil/profil.component';
import { ReglementComponent } from './reglement/reglement.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'producteur',component:ProducteurListComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'profil',component:ProfilComponent},
  {path:'map',component:MapComponent},
  {path:'historique',component:HistoriqueComponent},
  {path:'menu',component:DetailMenuComponent},
  {path:'reglement',component:ReglementComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
