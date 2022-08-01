import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {

   document.getElementById ("footer").style.display = "none";
   document.querySelector("nav").style.display = "none";
   document.querySelector("body").style.cssText ="display: flex; justify-content: center; align-items: center; background-color: rgba(79, 79, 79, 0.037);"

  }

  login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['vagas'])

    }, (error)=>{
     alert("Usuário ou senha inválidos")
      console.log(error)
    })
  }

}
