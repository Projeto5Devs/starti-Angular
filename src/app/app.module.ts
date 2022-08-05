import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';

import { CadastroModule } from './cadastro/cadastro.module';
import { MensagemModule } from './componentes/mensagem/mensagem.module';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CepService } from './cadastro/services/cep-service.service';
import { TemplateModule } from './template/template.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    TemplateModule,
    HttpClientModule,
    MensagemModule,
    CadastroModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    HomeModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [CepService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
