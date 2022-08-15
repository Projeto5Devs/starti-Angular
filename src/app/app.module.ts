import { CandidatoService } from './candidato/service/candidato.service';
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
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './componentes/alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertModalComponent,
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
    ModalModule.forRoot()
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [CepService, FormBuilder, CandidatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
