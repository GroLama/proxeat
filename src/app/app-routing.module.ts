import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
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
  {path:'producteur',component:ProducteurListComponent,data:{title:"Producteurs"}},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'profil',component:ProfilComponent,data:{title:"Profil"}},
  {path:'map',component:MapComponent,data:{title:"Map"}},
  {path:'historique',component:HistoriqueComponent,data:{title:"Historique"}},
  {path:'menu',component:DetailMenuComponent,data:{title:"Produits"}},
  {path:'reglement',component:ReglementComponent,data:{title:"Reglement"}},
  {path:'modifProfil',component:EditProfilComponent,data:{title:"Modifier Profil"}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }