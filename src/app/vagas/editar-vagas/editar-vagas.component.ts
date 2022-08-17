import { ListaVagasService } from 'src/app/vagas/lista-vagas/lista-vagas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/template/navbar/navbar.service';
import {Location} from '@angular/common';
import { CadastroVagas } from '../cadastro-vagas/cadastro-vagas';
import { CadastroVagasService } from '../cadastro-vagas/cadastro-vagas.service';
import { AlertModalService } from 'src/app/componentes/alert-modal.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-editar-vagas',
  templateUrl: './editar-vagas.component.html',
  styleUrls: ['./editar-vagas.component.css']
})
export class EditarVagasComponent implements OnInit {

  editarForm: FormGroup;
  vagas: any
  isDone: boolean

  constructor(private route: ActivatedRoute, private listavagas: ListaVagasService, private formBuilder: FormBuilder, private _location: Location, public nav: NavbarService, private cadastroVaga: CadastroVagasService,private alertService: AlertModalService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      const id = params.id
      this.listavagas.buscarPorId(id).subscribe(vaga =>
         {this.vagas = vaga
          this.carregar()});
    });


  }


  carregar(){
    this.editarForm = this.formBuilder.group({
          key: [this.vagas.key],
          cargo: [this.vagas.cargo, [Validators.required]],
          descricao: [this.vagas.descricao, [Validators.required]],
          empresa:[this.vagas.empresa.key],
          salario: [this.vagas.salario],
          tipo: [this.vagas.tipo],
          modalidade: [''],
          prazo: [this.vagas.prazo, [Validators.required]]
        })
      this.editarForm.controls["tipo"].setValue(this.vagas.tipo)
      this.editarForm.controls["modalidade"].setValue(this.vagas.modalidade)
      this.editarForm.get("prazo").setValue(new Date(this.vagas.prazo).toISOString().split('T')[0])

      this.editarForm.valueChanges.subscribe((value) => {
        this.vagas = value
      });

      this.isDone = true

    }

    voltar() {
      this._location.back();
      this.nav.show()
    }




    editar(){
      const vagaEditada = this.editarForm.getRawValue()
      this.cadastroVaga.editarVaga(vagaEditada).subscribe(()=>{
        this.alertService.showAlertSuccess('Vaga editada com sucesso!')
        setTimeout(() => {
          this.router.navigate(['/empresa']);
        }, 3000);
    }, (error)=> this.alertService.showAlertDanger('Não foi possível editar a vaga.Tente Novamente'))
  }


empresa(){
  this.router.navigate(['/empresa'])
}

}
