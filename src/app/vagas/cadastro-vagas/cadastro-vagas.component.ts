import { CadastroVagasService } from './cadastro-vagas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroVagas } from './cadastro-vagas';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { NavbarService } from 'src/app/template/navbar/navbar.service';
import { UserService } from 'src/app/user/user.service';
import { EmpresaService } from 'src/app/empresa/empresa.service';
import { AlertModalService } from 'src/app/componentes/alert-modal.service';

@Component({
  selector: 'app-cadastro-vagas',
  templateUrl: './cadastro-vagas.component.html',
  styleUrls: ['./cadastro-vagas.component.css']
})
export class CadastroVagasComponent implements OnInit {

  novaVagaForm: FormGroup;
  idUser: number;
  idEmpresa: number;
  isDone: boolean

  constructor(private formBuilder: FormBuilder, private cadastroVaga: CadastroVagasService, private router: Router, private _location: Location, public nav: NavbarService, private userService:UserService, private empresaService: EmpresaService, private alertService: AlertModalService)
  {

  }

  ngOnInit(): void {

    this.idUser = this.userService.getId()

    this.empresaService.consultarPorId(this.idUser).subscribe(data => {
      console.log(data)
     this.idEmpresa = data['idEmpresa']
     this.buildForm();
   })

  }

  buildForm() {
    this.novaVagaForm = this.formBuilder.group({
      empresa: [this.idEmpresa],
      cargo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      salario: [],
      tipo: [],
      modalidade: ['', [Validators.required]],
      prazo: ['', [Validators.required]]
    })
    this.isDone=true;
  }

  cadastrar(){

      const novaVaga = this.novaVagaForm.getRawValue() as CadastroVagas

      this.cadastroVaga.cadastrarNovaVaga(novaVaga).subscribe(()=>{
        this.alertService.showAlertSuccess('Vaga cadastrada com sucesso!')
        setTimeout(() => {
          this.router.navigate(['/empresa']);
        }, 3000);
    }, (error)=> this.alertService.showAlertDanger('Não foi possível criar a vaga.Tente Novamente'))
  }

  voltar() {
    this._location.back();
    this.nav.show()
  }

}
