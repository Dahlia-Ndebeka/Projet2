import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './Accueil/menu/menu.component';
import { ProgrammesCoursComponent } from './Accueil/Menu/programmes-cours/programmes-cours.component';
import { PresentationComponent } from './Accueil/Menu/presentation/presentation.component';
import { ContactComponent } from './Accueil/Menu/contact/contact.component';
import { InscriptionComponent } from './Accueil/Menu/inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    ProgrammesCoursComponent,
    PresentationComponent,
    ContactComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
