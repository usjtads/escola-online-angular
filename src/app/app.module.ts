import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosComponent } from './cursos/cursos.component';
import { FooterComponent } from './footer/footer.component';
import { ModalCadastroComponent } from './modal-cadastro/modal-cadastro.component';
import { HeaderComponent } from './header/header.component';
import { ProfessoresComponent } from './professores/professores.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    FooterComponent,
    ModalCadastroComponent,
    HeaderComponent,
    ProfessoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
