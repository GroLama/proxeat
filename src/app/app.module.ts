import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HeaderComponent } from './header/header.component';
import { ProfilComponent } from './profil/profil.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { ProducteurCardComponent } from './producteur-card/producteur-card.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { CommandeComponent } from './commande/commande.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ReglementComponent } from './reglement/reglement.component';
import { RamassageComponent } from './ramassage/ramassage.component';
import { ProducteurListComponent } from './producteur-list/producteur-list.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilComponent,
    EditProfilComponent,
    ProducteurCardComponent,
    DetailMenuComponent,
    LoginComponent,
    SignUpComponent,
    ConfirmationComponent,
    HomeComponent,
    MapComponent,
    CommandeComponent,
    HistoriqueComponent,
    ReglementComponent,
    RamassageComponent,
    ProducteurListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
