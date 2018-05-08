import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { GestionRapportPage } from '../pages/gestion-rapport/gestion-rapport';
import { GestionMedecinPage } from '../pages/gestion-medecin/gestion-medecin';
import { NouveauMedecinPage } from '../pages/nouveau-medecin/nouveau-medecin';
import { NouveauRapportPage } from '../pages/nouveau-rapport/nouveau-rapport';
import { ListeMedecinPage } from '../pages/liste-medecin/liste-medecin';
import { ListeRapportPage } from '../pages/liste-rapport/liste-rapport';
import { VisiteurPage } from '../pages/visiteur/visiteur';
import { ModifierPraticienPage} from '../pages/modifier-praticien/modifier-praticien';
import { ModifierRapportPage} from '../pages/modifier-rapport/modifier-rapport';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';


import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../providers/database/database';
import { RapportProvider } from '../providers/rapport/rapport';
import { PraticienProvider } from '../providers/praticien/praticien';
import { MedicamentProvider } from '../providers/medicament/medicament';
import { FamilleMedProvider } from '../providers/famille-med/famille-med';
import { TypePraticienProvider } from '../providers/type-praticien/type-praticien';


@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    AccueilPage,
    GestionMedecinPage, 
    GestionRapportPage,
    NouveauMedecinPage,
    NouveauRapportPage,
    ListeMedecinPage,
    ListeRapportPage,
    VisiteurPage,
    ModifierPraticienPage,
    ModifierRapportPage
   

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccueilPage,
    GestionMedecinPage, 
    GestionRapportPage,
    NouveauMedecinPage,
    NouveauRapportPage,
    ListeMedecinPage,
    ListeRapportPage,
    VisiteurPage,
    ModifierRapportPage,
    ModifierPraticienPage
 

  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLiteObject,
    SQLite,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    DatabaseProvider,
    RapportProvider,
    PraticienProvider,
    MedicamentProvider,
    FamilleMedProvider,
    TypePraticienProvider,
  

  ]
})

export class AppModule {
  

}
